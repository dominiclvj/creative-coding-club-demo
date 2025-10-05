<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Tweens and Timelines

## Learning
The basic syntax for a `to()` tween is as follows:

```javascript
gsap.to(".fred", {x:400});
```
This will take all elements with the class "fred" and move them in 400px to the right.

If you do not specify a duration, gsap will use the default which is 0.5 seconds (500ms). This will apply to our example above. You can change the default duration using:

```javascript
gsap.defaults({duration:1});
```
Behind the scenes, gsap changes the target’s inline style during the animation.

For best performance animate CSS Transform values and opacity:
1. x
2. y
3. rotation
4. rotationX
5. rotationY
6. skewX and skewY
7. scaleX, scaleY, or just scale

GSAP can animate any numeric property you throw at it.
1. width and height
2. backgroundColor (hypenated values need to be camelCase)
3. color
4. padding
5. left and top (must set position to relative, absolute, or fixed)
6. vh and vw

Changing values that are not CSS Transforms or opacity can cause the browser to re-do its layout of the page which in extreme situations can hinder performance. For a few tweens, it’s not the end of the world as some purists make it out to be. 

Let's write our first tween from scratch. Type the following code into the text editor to make your first animation:
```javascript
gsap.to(".fred", {x:700, y:400, scale:3, rotation:360, duration:3});
```
This will find all elements with the class "fred", and over the next 3 seconds, move them diagonally to the right and down, make them three times larger, and spin them in a full circle.

You can read the docs on the `gsap.to` method and gsap defaults at the following links:
- https://greensock.com/docs/v3/GSAP/gsap.to()
- https://greensock.com/docs/v3/GSAP/gsap.defaults()