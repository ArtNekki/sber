module.exports = function() {
  const name = options.hash.name;
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

  const svg = `<svg class="${cssClass}">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#${name}">
              </svg>`

  return svg;
}
