const repoNameURIPrefix = '/zot-site';
//   process.env.NODE_ENV === 'production' ? '/zot-site' : '';

module.exports = {
    basePath: repoNameURIPrefix,
    assetPrefix:repoNameURIPrefix,
    trailingSlash: true,
    images: {
        loader: "custom",
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        nextImageExportOptimizer: {
            imageFolderPath: "public",
            exportFolderPath: "out/zot-site",
            quality: 75,
        },
    },
    env: {
        storePicturesInWEBP: false,
        generateAndUseBlurImages: true,
    }
}