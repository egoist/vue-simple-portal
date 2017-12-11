# vue-simple-portal

[![NPM version](https://img.shields.io/npm/v/vue-simple-portal.svg?style=flat)](https://npmjs.com/package/vue-simple-portal) [![NPM downloads](https://img.shields.io/npm/dm/vue-simple-portal.svg?style=flat)](https://npmjs.com/package/vue-simple-portal) [![CircleCI](https://circleci.com/gh/EGOIST/vue-simple-portal/tree/master.svg?style=shield)](https://circleci.com/gh/EGOIST/vue-simple-portal/tree/master)

Simple portal component which allows to mount component anywhere.

This component only does one thing that already existed in [portal-vue](https://github.com/LinusBorg/portal-vue/), which is, mounting component to a target HTML element.

## Install

```bash
yarn add vue-simple-portal
```

CDN: [UNPKG](https://unpkg.com/vue-simple-portal/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-simple-portal/) (available as `window.SimplePortal`)

## Usage

Given an html file:

```html
<!-- where your app is mounted -->
<div id="app"></div>
<!-- where the portal targets are mounted -->
<div id="target"></div>
```

And your component:

```vue
<template>
  <simple-portal target="target">
    <h1>haha</h1>
    <h2>it just works<h1>
    <p>we'll appear in #target element!</p>
  </simple-portal>
</template>

<script>
import SimplePortal from 'vue-simple-portal'

export default {
  components: {
    SimplePortal
  }
}
</script>
```

## Props

### target

Type: `string`<br>
Required: `true`

The id of target HTML element.

### componentName

Type: `string`<br>
Default: `portal-target`

The component name for the portal target component.

It's recommended to set a custom name if you used this component for multiple times.

## Gotchas

- `transition` doesn't work yet.
- You can't see the portal target component in vue-devtools.

## License

MIT &copy; [EGOIST](https://github.com/EGOIST)
