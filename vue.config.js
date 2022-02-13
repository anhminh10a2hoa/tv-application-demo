const path = require('path');  
module.exports = {  
  configureWebpack: {  
    resolve: {  
      alias: {  
        '@': path.resolve(__dirname, '.'),
        '@src': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@state': path.resolve(__dirname, 'src/state'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@design': path.resolve(__dirname, 'src/design')
      },  
    },  
  }
}