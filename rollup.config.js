import terser from '@rollup/plugin-terser';

export default {
    input: 'src/main.js',
    output: [
        {
            file: 'dist/index.js', // 打包后的文件路径名
            format: 'esm', // 打包为esm格式
            name: 'anyscript', // 打包后的默认导出文件名称
            plugins: [terser()]
        },
        {
            file: 'dist/cdn.js', // 打包后的文件路径名
            format: 'iife', // 打包为esm格式
            name: 'anyscript', // 打包后的默认导出文件名称
            plugins: [terser()]
        }

    ]
};