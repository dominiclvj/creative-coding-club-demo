# Special Properties: Delay and Repeat

## Learning

Special properties define how the animation should run and what it should do. Special properties are not animated.

- *delay*: how much time should transpire before animation begins
- *repeat*: how many times the animation should repeat
- *yoyo*: when set to true the animation will play back and forth
- *repeatDelay*: how much time should transpire between each repeat

An animation will repeat indefinitely if you set repeat:-1

Let's try creating our own repeating animation using the following code:
```javascript
gsap.to(".fred", {x:300, repeat:-1, yoyo:true, repeatDelay:1});
```
This will move the element called Fred 300 pixels to the right, then back to where it started, pause for a second, and keep doing that forever.