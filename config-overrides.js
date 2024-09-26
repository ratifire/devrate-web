module.exports = {
  webpack: function override(config) {
    // Add or modify Webpack settings
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      config.client = {
        webSocketURL: {
          port: 443, // setup port for WebSocket
        },
      };

      return config;
    };
  },
};

