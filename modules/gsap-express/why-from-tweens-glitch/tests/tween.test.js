import * as fs from "fs";
import * as path from "path";

import { describe, expect, it } from "vitest";
import { JSDOM } from "jsdom";

import { patchGSAP } from "../../../../utils";

const htmlPath = path.resolve(__dirname, "../exercise/index.html");
const html = fs.readFileSync(htmlPath, "utf8");
const localScriptPath = path.resolve(__dirname, "../exercise/index.js");
const localScriptContent = fs.readFileSync(localScriptPath, "utf8");

describe("glitch", () => {
  it("bugfix", async () => {
    // Create JSDOM
    const dom = new JSDOM(html, {
      resources: "usable",
      runScripts: "dangerously",
      url: "file://" + __dirname + "../exercise/",
      pretendToBeVisual: true,
    });

    const { window } = dom;

    // wait for script content to be loaded
    await new Promise((resolve) => {
      window.onload = resolve;
    });

    // gsap should be defined on the jsdom window
    if (typeof window.gsap === "undefined") {
      throw new Error("GSAP was not loaded from the CDN after window.onload.");
    }

    const registry = patchGSAP(window.gsap);

    // run the script as it can't be easily loaded due to the relative file paths
    window.eval(localScriptContent);

    // get the button element
    const button = window.document.querySelector(".button");
    const bg = window.document.querySelector(".bg");
    const tweens = window.gsap.getTweensOf(bg);

    for (let i = 0; i < 3; i++) {
      const mouseEnterEvent = new window.MouseEvent("mouseenter", {
        bubbles: false,
        cancelable: true,
        view: window,
      });
      button.dispatchEvent(mouseEnterEvent);
    }

    expect(registry.all.length).toBe(1);

    const mouseEnterEvent = new window.MouseEvent("mouseenter", {
      bubbles: false,
      view: window,
    });

    button.dispatchEvent(mouseEnterEvent);

    expect(registry.all.length).toBe(1);
  });
});

