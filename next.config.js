/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  excludeFile: str => /\*.{spec,test}.*/.test(str),
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\*.test.*$/,
      loader: 'ignore-loader'
    })
    return config
  }
}
