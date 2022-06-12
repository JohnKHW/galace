module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */

  const { BASE_PATH } = process.env;

  const images = {
    domains: ['www.google.com'],
    formats: ['image/avif', 'image/webp'],
    loader: 'akamai',
    path: '',
  };

  const basePath = BASE_PATH ? BASE_PATH : '';
  const assetPrefix = (BASE_PATH ? BASE_PATH : '') + '/';

  return {
    ...defaultConfig,
    // reactStrictMode: true,
    publicRuntimeConfig: {
      BASE_PATH: basePath,
    },
    serverRuntimeConfig: {},
    basePath,
    assetPrefix,
    images,
  };
};
