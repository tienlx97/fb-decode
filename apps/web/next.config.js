/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  transpilePackages: ['ui', '@negiganaito/react-components'],

  experimental: {
    serverActions: true,
    forceSwcTransforms: true,
  },

  reactStrictMode: false,

  compiler: {
    relay: {
      src: './',
      language: 'typescript',
      artifactDirectory: '__generated__',
    },
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },

  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },

  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
}
