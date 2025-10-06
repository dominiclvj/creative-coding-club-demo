import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it } from 'vitest'
import { JSDOM } from 'jsdom'

const htmlPath = path.resolve(__dirname, '../exercise/index.html')
const html = fs.readFileSync(htmlPath, 'utf8');
const localScriptPath = path.resolve(__dirname, '../exercise/index.js');
const localScriptContent = fs.readFileSync(localScriptPath, 'utf8');

const loadWindow = async () => {
    const dom = new JSDOM(html, {
        resources: 'usable',
        runScripts: 'dangerously',
        url: 'file://' + __dirname + '../exercise/',
        pretendToBeVisual: true
    });

    const { window } = dom;

    await new Promise(resolve => {
        window.onload = resolve;
    });

    if (typeof window.gsap === 'undefined') {
        throw new Error("GSAP was not loaded from the CDN after window.onload.");
    }

    window.eval(localScriptContent);

    return window;
};

const normaliseEase = ease => {
    if (typeof ease === 'string') {
        return ease.replace(/\s+/g, '').toLowerCase();
    }

    if (ease && typeof ease === 'object' && typeof ease.id === 'string') {
        return ease.id.replace(/\s+/g, '').toLowerCase();
    }

    if (typeof ease === 'function' && typeof ease.id === 'string') {
        return ease.id.replace(/\s+/g, '').toLowerCase();
    }

    return '';
};

const getSingleTween = (window, selector) => {
    const element = window.document.querySelector(selector);
    const tweens = window.gsap.getTweensOf(element);

    if (tweens.length !== 1) {
        throw new Error('incorrect number of tweens registered for ' + selector);
    }

    const [tween] = tweens;

    expect(tween).toBeTruthy();

    return tween;
};

describe("ease", () => {
    it('back ease', async () => {
        const window = await loadWindow();
        const greenTween = getSingleTween(window, '.fred.green');
        expect(normaliseEase(greenTween.vars.ease)).toBe('back.config(6)');
    });

    it('linear ease', async () => {
        const window = await loadWindow();
        const pinkTween = getSingleTween(window, '.fred.pink');
        expect(normaliseEase(pinkTween.vars.ease)).toBe('linear');
    });
})