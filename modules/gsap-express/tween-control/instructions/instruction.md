<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Tween Control

## Learning
Sometimes when working with tweens, you’ll want to pause, play, or restart an animation instead of letting it run automatically. To do that, you first need to store a reference to the tween — a way to “remember” it in your code.

Here’s how you can do that:
```javascript
var tween = gsap.to("#fred", { x: 600 });
```
This creates a tween that moves the element with the ID fred 600 pixels to the right. The variable tween now stores a reference to that animation, so you can control it later. You can also use let or const instead of var — they all work similarly for this example.

By default, GSAP starts playing the animation right away. If you want it to start paused, add the paused: true property:
```javascript
var tween = gsap.to("#fred", { x: 600, paused: true });
```
Try experimenting — pause, play, or even reverse your animation to see how much control you can have over a single tween!

Now the tween won’t play until you tell it to. When you’re ready, you can start the animation with `tween.play()`.

Let's add a control method to our example. We already have start, stop, and reverse the direction of our tween. Use the `tween.restart()` method to reset the animation and put it back to its starting location.