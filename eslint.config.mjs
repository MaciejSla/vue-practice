// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt().overrideRules({
  'vue/no-multiple-template-root': 'off',
  'vue/html-self-closing': ['error', { html: { void: 'always' } }]
})
// Your custom configs here
