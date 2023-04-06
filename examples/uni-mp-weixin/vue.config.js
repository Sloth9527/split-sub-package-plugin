const SplitSubPackagePlugin = require('../../src/SplitSubPackagePlugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new SplitSubPackagePlugin(),
        ],
    },
}