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
