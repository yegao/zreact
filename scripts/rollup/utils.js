const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');

function getBasePlugins(options) {
    return [typescript(options?.typescript ?? {}), commonjs(options?.commonjs ?? {})];
}

module.exports = {
    getBasePlugins
}