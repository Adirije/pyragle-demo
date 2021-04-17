
module.exports = {
    chainWebpack: config => {

        config.resolve.alias
            .set('@components', __dirname + '/src/components')
            .set('@pages', __dirname + '/src/components/pages')
            .set('vue$', 'vue/dist/vue.runtime.esm.js')
        
        config.resolve.extensions
            .add('.js')
            .add('.vue')
        
    }
  }