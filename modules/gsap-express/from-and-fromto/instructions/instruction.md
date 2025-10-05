# from() and fromTo()

## Learning

`gsap.from()` animates from the values you specify to the object’s natural values.

To animate from x and y values of 400, use:

```javascript
gsap.from(".fred", {x:400, y:400});
```
`gsap.fromTo()` animates from the values you specify to the values you specify.

The 2 objects in the code below are the *from vars* and *to vars*.

```javascript
gsap.fromTo(".fred", {x:400, y:400}, {x:200, y:200});
```
For best results make sure the from vars and to vars have the same properties.

Let's experiment with creating our first tween with the `fromTo()` method. Type the following sample code into your text editor to create a tween that will act on every element with the class fred. The element will fade in while gliding diagonally up-left and growing bigger, over the course of three seconds.
```javascript
gsap.fromTo(".fred", 
    {x:700, y:400, scale:1, opacity:0},
	{x:400, y:200, scale:3, opacity:1, duration:3});
```
You can read the docs on the `gsap.from` and the `gsap.fromTo` method at the following links:
- https://greensock.com/docs/v3/GSAP/gsap.from()
- https://greensock.com/docs/v3/GSAP/gsap.fromTo()