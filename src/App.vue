<script setup lang="ts">
import ExampleVue from './components/Example.vue';
import * as helloWorldComp from './components/HelloWorld.example.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ExampleVue
    title="ExampleVue"
    :component="helloWorldComp"
  />
</template>

<style>
#app {
  margin: 0 auto;
  width: 550px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
