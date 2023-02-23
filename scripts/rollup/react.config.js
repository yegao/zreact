const path = require('path');
const fs = require('fs');
const { getBasePlugins } = require('./utils');
const generatePackageJson = require('rollup-plugin-generate-package-json');

function getSourcePath(packageName) {
    return path.resolve(__dirname, '../../packages', packageName);
}

function getDistPath(packageName) {
    return path.resolve(__dirname, '../../dist', packageName);
}

function getPackageJson(packageName) {
    const p = getSourcePath(packageName) + '/package.json';
    const json = fs.readFileSync(p, {encoding: 'utf-8'});
    return JSON.parse(json);
}

const {name, module: mainModule} = getPackageJson('react');

module.exports = [
    {
        input: getSourcePath('react') + '/' + mainModule,
        output: {
            file: getDistPath('react') + '/index.js',
            name: 'index.js',
            format: 'umd'
        },
        plugins: [
            ...getBasePlugins(),
            generatePackageJson({
                inputFolder: getSourcePath('react'),
                outputFolder: getDistPath('react'),
                baseContents: ({name, description, version}) => ({
                    name,
                    description,
                    version,
                    main: 'index.js'
                })
            })
        ]
    }, {
        input: getSourcePath('react') + '/src/jsx.ts',
        output: [
            {
                file: getDistPath('react') + '/jsx-runtime.js',
                name: 'jsx-runtime.js',
                format: 'umd'
            },
            {
                file: getDistPath('react') + '/jsx-dev-runtime.js',
                name: 'jsx-dev-runtime.js',
                format: 'umd'
            }
        ],
        plugins: getBasePlugins({
            typescript: { compilerOptions: { module: 'CommonJS' } },
            commonjs: { extensions: ['.js', '.ts'] }
        })
    }
]