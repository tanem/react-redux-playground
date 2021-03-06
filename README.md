# react-redux-playground

[![build status](https://img.shields.io/travis/tanem/react-redux-playground/master.svg?style=flat-square)](https://travis-ci.org/tanem/react-redux-playground)
[![coverage status](https://img.shields.io/coveralls/tanem/react-redux-playground.svg?style=flat-square)](https://coveralls.io/github/tanem/react-redux-playground)

 _Work in progress_

Messing about with [React](https://github.com/facebook/react) and [Redux](https://github.com/rackt/redux). There's a bunch of useful info out there, but hopefully there are a few bits and pieces others might find helpful here too.

## Features

The app is based on Redux's [counter example](https://github.com/rackt/redux/tree/master/examples/counter), and includes:

- ES2015+ syntax via [Babel](https://babeljs.io/)
- Hot reloading React classes via [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
- Live editing time travel via [Redux DevTools](https://github.com/gaearon/redux-devtools)
- Routing via [redux-simple-router](https://github.com/jlongster/redux-simple-router)
- Unit testing via [mocha](https://github.com/mochajs/mocha), [chai](https://github.com/chaijs/chai), and [sinon](https://github.com/sinonjs/sinon)
- Code coverage reporting via [isparta](https://github.com/douglasduteil/isparta)

## Start

1. Clone the repo
2. `npm install` the dependencies
3. Run `npm start`
4. Open `http://localhost:3000/` in your browser.

## Testing

Single run, specs only:

```
$ npm run test:spec
```

Run specs and watch:

```
$ npm run test:watch
```

Generate coverage reports:

```
$ npm run test:cov
```

## Links

### People

- [Dan Abramov](https://github.com/gaearon)

### Docs

- [React Docs](https://facebook.github.io/react/)
- [Redux GitBook](http://rackt.org/redux/index.html)

### Talks & Videos

- [Dan Abramov - Live React: Hot Reloading with Time Travel](https://www.youtube.com/watch?v=xsSnOQynTHs)
- [Getting Started with Redux](https://egghead.io/series/getting-started-with-redux)

### Examples & Links

- [Redux examples](https://github.com/rackt/redux/tree/master/examples)
- [A call for quality articles, examples, and resources](https://github.com/rackt/redux/issues/1014)
- [Awesome Redux](https://github.com/xgrommx/awesome-redux)
- [SoundRedux](https://github.com/andrewngu/sound-redux)
- [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example)
- [React Toolbox](https://github.com/react-toolbox/react-toolbox)
- [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate)
- [React Transform Boilerplate](https://github.com/gaearon/react-transform-boilerplate)
- [React Black Triangle](https://github.com/jamesknelson/react-black-triangle)

### Articles & Tutorials

- [A Cartoon Intro To Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.n7j014qyf)
- [Lint Like It's 2015](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48#.8nn5qe9w5)
- [Smart and Dumb Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.b0adk4ts5)
- [Full-Stack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)

## License

MIT
