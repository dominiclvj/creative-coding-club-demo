import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it } from 'vitest'
import { JSDOM } from 'jsdom'

const htmlPath = path.resolve(__dirname, '../exercise/index.html')
const html = fs.readFileSync(htmlPath, 'utf8');
const localScriptPath = path.resolve(__dirname, '../exercise/index.js');
const localScriptContent = fs.readFileSync(localScriptPath, 'utf8');

describe('stagger', () => {
  it('detects presence of a stagger configuration', async () => {
    // Create JSDOM
    const dom = new JSDOM(html, {
      resources: 'usable',
      runScripts: 'dangerously',
      url: 'file://' + path.resolve(__dirname, '../exercise/') + '/',
      pretendToBeVisual: true
    })

    const { window } = dom

    // wait for script content to be loaded
    await new Promise((resolve) => {
      window.onload = resolve
    })

    // gsap should be defined on the jsdom window
    if (typeof window.gsap === 'undefined') {
      throw new Error('GSAP was not loaded from the CDN after window.onload.')
    }

    // run the local exercise script (after ESM export rewrite)
    window.eval(localScriptContent)

    // Try to detect stagger in two ways:
    // 1) Runtime tween inspection via GSAP
    // 2) Fallback to explicit boolean published by the exercise script
    let staggerDetected = false

    // Prefer inspecting actual tweens created by the exercise
    const imgs = window.document.querySelectorAll('#freds img')
    if (imgs.length > 0) {
      // Check any tween associated with the first target
      const tweens = window.gsap.getTweensOf(imgs[0])
      if (tweens && tweens.length >= 1) {
        const tween = tweens[0]
        expect(tween).toBeTruthy()
        if (tween && tween.vars && Object.prototype.hasOwnProperty.call(tween.vars, 'stagger')) {
          staggerDetected = true
        }
      }
    }

    // Fallback: allow script to expose a global boolean for testability
    if (!staggerDetected && typeof window.__HAS_STAGGER__ !== 'undefined') {
      staggerDetected = Boolean(window.__HAS_STAGGER__)
    }

    expect(staggerDetected).toBe(true)
  })
})