console.log(__dirname)
const path =  require('path');
module.export = {
    // 入口配置
    entry:{
        a:'./src/index.js'
    },
    // 出口配置
    output:{
        path:path.resolve(__dirname,'dist'),// path必须是绝对路径
        filename:'bunble.js'
    },
    // module rules
    module:{

    },
    // 插件
    plugins:{

    },
    // 开发服务器
    devServer:{

    }
}