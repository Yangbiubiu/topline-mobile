module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [// vant 依赖所需配置
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
