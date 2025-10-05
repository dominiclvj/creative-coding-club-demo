<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Special Property: Ease

## Learning
The ease setting controls how your animation changes speed over time. Instead of everything moving at one constant rate, an ease lets you decide whether something should start slowly, speed up, or ease into place smoothly. Think of it as the rhythm or feel of your motion.

- Ease out (default): starts fast and slows down at the end — like a car coming to a stop.
- Ease in: starts slowly and speeds up — like pressing the accelerator.
- Ease in-out: starts slow, speeds up, then slows down again — the most natural feeling of all.

```javascript
ease: "bounce"        // bounce on the way out
ease: "bounce.in"     // bounce on the way in
ease: "bounce.inOut"  // bounce on both
```

Each ease is drawn as a curve.
- A steeper curve means the animation is changing faster at that moment.
- A flatter curve means it’s changing more slowly.

You can explore all of them visually using [GSAP’s Ease Visualizer](https://gsap.com/docs/v3/Eases/?ref=6234). This is an interactive tool that shows exactly how motion speed changes over time with various animations.

Other common eases include:
```javascript
ease: "back"           // goes slightly past the end, then settles back
ease: "back.inOut"     // overshoots at both the start and end
ease: "back.config(4)" // increases how far it overshoots (larger number = stronger)
ease: "linear"         // moves at a constant speed, no easing
```

Let's experiment adding some eases to existing tweens. Add a `back` ease with config "6" to the green tween and a `linear` ease to the pink tween.