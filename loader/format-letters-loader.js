const loaderUtils = require('loader-utils');

const Lowercase2Uppercase = 'L2U';
const Uppercase2Lowercase = 'U2L';

module.exports = function (source, map, meta) {
    // console.log(this.version);
    // console.log(this.context);
    // console.log(this.rootContext);
    // console.log(this.request);
    // console.log(this.loaderIndex);
    // console.log(this.resource);
    // console.log(this.target);
    // console.log(this.sourceMap);

    // return source.replace(/World/g, 'Loader');
    // console.log('map1:', map);
    // console.log('meta1:', meta);
    // options获取
    // const options = loaderUtils.getOptions(this);
    // console.log('options:', options);

    // // 同步
    // const output = source.replace(/World/g, 'Loader');
    // this.callback(null, output, map, {test: 'testwwwww'});

    // 异步
    // const callback = this.async();
    // setTimeout(() => {
    //     const output = source.replace(/World/g, 'Loader');
    //     // console.log(output);
    //     callback(null, output);
    // }, 100)
    let output = '';
    // 获取options
    const options = loaderUtils.getOptions(this);
    const { formatType } = options;
    switch(formatType) {
        case Lowercase2Uppercase: {
            output = source.toUpperCase();
            break;
        }
        case Uppercase2Lowercase: {
            output = source.toLowerCase();
            break;
        }
        default: {
            output = source;
        }
    }

    this.callback(null, output, map, meta);
};