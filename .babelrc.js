module.exports = {
  presets: [
    require('@babel/preset-flow'),
  ],
  plugins: [
    require('@babel/plugin-syntax-dynamic-import')
  ],
  ignore: [
    'dist/*.js',
    'packages/**/*.js'
  ]
}
