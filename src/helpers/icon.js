module.exports = function(options) {
  const name = options.hash.name;
  const width = options.hash.width;
  const height = options.hash.height;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'icon';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' icon--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  const svg = `<svg width="${width}" height="${height}" class="${cssClass}">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#${name}">
              </svg>`

  return svg;
}
