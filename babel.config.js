module.exports = function(api) {
  'use strict';

  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions']
        },
        useBuiltIns: 'entry',
        corejs: '2',
        debug: false
      }
    ]
  ];
  const plugins = ['@babel/plugin-proposal-object-rest-spread'];

  return {
    presets,
    plugins
  };
};
