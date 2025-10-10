<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Special Property: Stagger

## Learning
When you want several elements to animate one after another, like a row of images sliding in one by one, GSAP makes this easy with the stagger property. It lets you delay the start time between multiple targets in a single tween, creating a natural “domino effect”.

In GSAP 3, you no longer need the old methods `staggerTo()`, `staggerFrom()`, or `staggerFromTo()`. You can simply use stagger as part of a regular `gsap.to()` or `gsap.from()` call.

In the following example, each image will start 0.2 seconds after the previous one
```javascript
gsap.to("fred green", { y: -100, stagger: 0.2 });
```
Here, each image moves up by 100 pixels. The first one starts right away, and each following image starts 0.2 seconds later.

If you want more control, you can pass an object to stagger. This lets you choose where the animation starts and how the timing spreads across all the elements.

```javascript
gsap.to("fred green", {y: -50, stagger: { each: 0.2, from: "end"}});
```
Let’s break that down:
- each: 0.2 → each element starts 0.2 seconds after the one before it.
- from: "end" → the last element starts first, and the others follow in reverse order.

You can also use amount instead of each.
- each: 0.2 means “0.2 seconds between each start”.
- amount: 0.2 means “all animations finish starting within 0.2 seconds total” — the bigger your group, the smaller the gap.

Let's add a stagger effect to the animations in the sample javascript file.