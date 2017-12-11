<template>
  <div id="app">
    <simple-portal class="foo" target="target">
      <h1>hahaha</h1>
      <!-- <h2>it works</h2> -->
    </simple-portal>
  </div>
</template>

<script>
import SimplePortal from '../src'

export default {
  name: 'app',

  components: {
    SimplePortal
  }
}
</script>
