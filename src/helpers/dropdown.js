module.exports = function(options) {
  const id = options.hash.id;
  const name = options.hash.name;
  const label = options.hash.label;
  const items = options.hash.items;
  const mods = options.hash.mods;
  let cssClass = 'dropdown';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' dropdown--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  const dropdown = `<div class="${cssClass}">
    <input type="radio" name="dropdown" class="dropdown__input" id="${id}">
    <label for="${id}" class="dropdown__btn">
      <span>${label}</span>
    </label>
    <ul class="dropdown__list">
      ${JSON.parse(items).map((item) => `<li class="dropdown__item">${item.name}</li>`).join(' ')}
    </ul>
  </div>
  `

  return dropdown;
}
