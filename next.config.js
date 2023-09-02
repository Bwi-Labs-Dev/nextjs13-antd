const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:'standalone',
  publicRuntimeConfig: {
    backendHost: process.env.BACKEND_URL,
  },
  sassOptions:{
    // fiber:false,
    includePaths: [path.join(__dirname, 'styles')],
  }
};

module.exports = nextConfig;
