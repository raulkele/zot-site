const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/zot-site' : '';

module.exports = {
    basePath: repoNameURIPrefix,
    assetPrefix:repoNameURIPrefix,
    images: {
        loader: "custom",
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        nextImageExportOptimizer: {
            imageFolderPath: "public",
            exportFolderPath: "out",
            quality: 75,
        },
    },
    env: {
        storePicturesInWEBP: true,
        generateAndUseBlurImages: true,
    }
}