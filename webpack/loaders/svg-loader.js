const SVGO = require('svgo');

const svgO = new SVGO({
  plugins: [{
    cleanupAttrs: true,
  }, {
    removeDoctype: true,
  }, {
    removeXMLProcInst: true,
  }, {
    removeComments: true,
  }, {
    removeMetadata: true,
  }, {
    removeTitle: true,
  }, {
    removeDesc: true,
  }, {
    removeUselessDefs: true,
  }, {
    removeEditorsNSData: true,
  }, {
    removeEmptyAttrs: true,
  }, {
    removeHiddenElems: true,
  }, {
    removeEmptyText: true,
  }, {
    removeEmptyContainers: true,
  }, {
    removeViewBox: false,
  }, {
    cleanupEnableBackground: true,
  }, {
    convertStyleToAttrs: true,
  }, {
    convertColors: true,
  }, {
    convertPathData: true,
  }, {
    convertTransform: true,
  }, {
    removeUnknownsAndDefaults: true,
  }, {
    removeNonInheritableGroupAttrs: true,
  }, {
    removeUselessStrokeAndFill: true,
  }, {
    removeUnusedNS: true,
  }, {
    cleanupIDs: true,
  }, {
    cleanupNumericValues: true,
  }, {
    moveElemsAttrsToGroup: true,
  }, {
    moveGroupAttrsToElems: true,
  }, {
    collapseGroups: true,
  }, {
    removeRasterImages: false,
  }, {
    mergePaths: true,
  }, {
    convertShapeToPath: true,
  }, {
    sortAttrs: true,
  }, {
    removeDimensions: true,
  }, {
    removeAttrs: { attrs: '(stroke|fill)' },
  }],
});

module.exports = async (content) => {
  const data = await svgO.optimize(content);
  return data.data;
};
