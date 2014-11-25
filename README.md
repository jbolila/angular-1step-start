AngularJS first steady steps
===================

For someone how want to start with Angular, some code and some links.

This code includes some of the best practices propose by John Papa on is [angularjs-styleguide]. Here you can find one small project before you go.

I'm using some fundamental aspects of Javascript, like hoisted functions, closure, IIFE among others. If you know what this things are [You Don't Know JS], isn't a problem just more [adventure around your editor and terminal].


## Installation

You can just drag the index.html into your browser window, and will work but.

But I highly recommend other approach that will give you some nice tools like live reload. For that you will need [NodeJS] installed on your machine and execute the following commands on a terminal (or for the Windows users the so called "Node.js command prompt"):

```bash
npm install
```

and start the static HTTP server with live reload:

```bash
npm run watch
```

Open the http://localhost:9191 and experiment as much as you can (remember the server refreshes your browser after you save any source file).

Extra: find for yourself what those command can be useful:

```bash
npm install eslint -g
eslint app/js
```

and how to tell your browser to do this for you automatically.

-----

## References

* [AngularJS Docs](https://docs.angularjs.org)
* [AngularJS Style Guide][angularjs-styleguide]
* [Learn JavaScript by adventuring around in the terminal][adventure around your editor and terminal]
* [You Don't Know JS]
* [MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)



[angularjs-styleguide]: https://github.com/johnpapa/angularjs-styleguide

[You Don't Know JS]: https://github.com/getify/You-Dont-Know-JS
[adventure around your editor and terminal]: https://github.com/sethvincent/javascripting

[NodeJS]: http://nodejs.org
[nodeschool]: http://nodeschool.io
