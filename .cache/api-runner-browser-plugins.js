module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-gdpr-cookies/gatsby-browser.js'),
      options: {"plugins":[],"googleAnalytics":{"trackingId":"UA-210294931-1","cookieName":"gatsby-gdpr-google-analytics","anonymize":true,"allowAdFeatures":false},"environments":["production","development"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"starter-default","short_name":"starter","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"standalone","icon":"src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"53aa06cf17e4239d0dba6ffd09854e02"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
