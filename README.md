# vca-widget-emoto

[![npm](https://img.shields.io/npm/v/vca-widget-emoto.svg)](https://www.npmjs.com/package/vca-widget-emoto) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Implements a widget to integrate Emoto into Viva con Aguas Pool².

## Installation

```bash
npm install --save vca-widget-emoto
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import { EmotoButton } from 'vca-widget-emoto'

export default {
  name: 'App',
  components: { EmotoButton }
}

```

Inside your template:
```xml
<template>
  <div id="app">
    <EmotoButton />
  </div>
</template>
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="vca-widget-emoto/dist/vca-widget-emoto.css"></link>
<script src="vca-widget-emoto/dist/vca-widget-emoto.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/vca-widget-emoto/dist/vca-widget-emoto.css"></link>
<script src="https://unpkg.com/vca-widget-emoto"></script>
```

## Development

### Launch visual tests

```bash
npm run serve
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run lib
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License
