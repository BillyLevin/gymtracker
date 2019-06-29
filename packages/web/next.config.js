const withImages = require('next-images');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
module.exports = withImages(withTypescript(withSass()));
