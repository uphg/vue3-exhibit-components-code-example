# Vite 获取 `.vue` 文件源代码示例

利用 vite 自定义插件的特性获取 `.vue` 文件源码，用于展示组件源代码。

在 `vite.config.ts` 中添加一个自定义插件 `vueExampleCode`

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'

const vueExampleCode = () => ({
  name: 'vue-example-code',
  transform(code, id) {
    if(!(/^.+\.example\.vue/.test(id) && !(/\?/.test(id)))) return
    const file = fs.readFileSync(id).toString()
    return `${code};\nexport const __sourceCode = ${JSON.stringify(file)};`
  }
})

export default defineConfig({
  plugins: [vue(), vueExampleCode()]
})
```

使用

```html
<script setup lang="ts">
import ExampleVue from './components/Example.vue';
import * as helloWorldComp from './components/HelloWorld.example.vue'

console.log('获取到的源代码')
console.log(helloWorldComp.__sourceCode)
</script>

<template>
  <helloWorldComp.default />
</template>
```
