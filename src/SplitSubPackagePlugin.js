class SplitSubPackagePlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync(
            'SplitSubPackagePlugin',
            (compilation, callback) => {
              console.log('这是一个示例插件！');
              console.log(
                '这里表示了资源的单次构建的 `compilation` 对象：',
                compilation
              );
      
              // 用 webpack 提供的插件 API 处理构建过程
            //   compilation.addModule(/* ... */);
      
              callback();
            }
          );
    }
}

module.exports = SplitSubPackagePlugin

// export default SplitSubPackagePlugin;
