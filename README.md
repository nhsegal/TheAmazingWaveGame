# The Wave Game
This is the first sim that I have refactored with webpack after originally writing it solely with p5.js.

## Note for Physics Teachers and Students
The levels of this game are supposed to help the user develop an understanding of reflection, interference, and standing waves. The 'dots' are meant to represent whiteboard markers that get knocked over by a slinky during various wave demonstrations.
One shortcoming of this sim is that I wasn't able to effectively show the transverse motion of the links without introducing numerical errors that make waves pulse decay or grow.

## Note for Coders
The node module for the minified p5 library was deemed too big by webpack, so I tried various code splitting strategies and also experimented with the lighter weight [Q5](https://q5xjs.netlify.app/) library. Q5 unfortunately reduced the resolution substantially and didn't allow me to control where the canvas element was placed. Ultimately I went with the very hacky solution of using a script tag in the html template to reference the p5 CDN repository.