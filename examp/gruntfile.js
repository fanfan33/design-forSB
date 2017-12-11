module.exports = function(grunt){
    //1.引入
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); 
    //2.设置任务:
    grunt.initConfig({
      
//        //压缩HTML
        htmlmin:{
            options: {
                    removeComments: true, //移除注释
                    removeCommentsFromCDATA: true,//移除来自字符数据的注释
                    collapseWhitespace: true,//无用空格
                    collapseBooleanAttributes: true,//失败的布尔属性
                    removeAttributeQuotes: true,//移除属性引号      有些属性不可移走引号
                    removeRedundantAttributes: true,//移除多余的属性
                    useShortDoctype: true,//使用短的跟元素
                    removeEmptyAttributes: true,//移除空的属性
                    removeOptionalTags: true//移除可选附加标签
                  },
            yasuo:{
                expand: true,
                cwd: './views', 
                src: ['*.html'],
                dest: './yshtml'
            }
        }


    });
    //设置默认任务
    grunt.registerTask('default',['htmlmin']);
}