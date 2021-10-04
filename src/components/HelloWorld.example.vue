<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('hi，你好')
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>
