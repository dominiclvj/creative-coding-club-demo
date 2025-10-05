import * as fs from 'fs'
import * as path from 'path'

import {describe, expect, it} from 'vitest'
import { JSDOM } from 'jsdom'

const htmlPath = path.resolve(__dirname, '../exercise/index.html')
const html = fs.readFileSync(htmlPath, 'utf8');
const localScriptPath = path.resolve(__dirname, '../exercise/index.js');
const localScriptContent = fs.readFileSync(localScriptPath, 'utf8');


describe("delay", () => {
    it('repeat', async () => {
        // Create JSDOM
        const dom = new JSDOM(html, {
            resources: 'usable',
            runScripts: 'dangerously',
            url: 'file://' + __dirname + '../exercise/',
            pretendToBeVisual: true
        });

        const { window } = dom;

        // wait for script content to be loaded
        await new Promise(resolve => {
            window.onload = resolve;
        });

        // gsap should be defined on the jsdom window
        if (typeof window.gsap === 'undefined') {
            throw new Error("GSAP was not loaded from the CDN after window.onload.");
        }

        // run the script as it can't be easily loaded due to the relative file paths
        window.eval(localScriptContent);

        // get the fred element
        const fred = window.document.querySelector('.fred');
        const tweens = window.gsap.getTweensOf(fred);

        if (tweens.length !== 1) {
            throw new Error('incorrect number of tweens registered')
        }

        let tween = tweens[0]

        expect(tween).toBeTruthy()

        expect(tween.vars.repeat).toBe(-1)

    })
})