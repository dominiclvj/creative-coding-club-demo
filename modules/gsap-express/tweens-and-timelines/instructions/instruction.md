<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Tweens and Timelines

## Learning
If you've used any version of GSAP in the past 12 years, you might be familiar with TweenLite, TweenMax, TimelineLite or TimelineMax. These have now all been replaced with the gsap object.

The gsap object is your access point to everything the engine does:
- Create animations
- Configure settings
- Register plugins, eases, and effects
- Provides global control over all animations

This course will primarily focus on the three main methods for creating Tweens and adding them to Timelines. These include:
- `gsap.to()`
- `gsap.from()`
- `gsap.fromTo()`

Here's an example of the `gsap.to()` method featured in the accompanying video.

```javascript
gsap.to(".star", {x:750, duration:3});
```
Let's break it down
- `gsap.to()` → This tells GSAP to animate something to new values over time. In other words: “Move or change this thing until it reaches the settings I’m about to describe.”
- `".star"` → This is the target. It selects any HTML element(s) with the class name star. (In CSS, .star means “any element that has class=‘star’.”)
- `{x: 750, duration: 3}` → This is the animation configuration. `x: 750` means move it 750 pixels to the right. `duration: 3` means do it within 3 seconds.

The gsap object makes it extremely easy to make powerful edits to Tweens. Try this out for yourself by increasing the animation distance to 1000px and increasing the duration of the animation to 5 seconds.