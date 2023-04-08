/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'public/sounds/',
          },
        },
      ],
    });

    return config;
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
