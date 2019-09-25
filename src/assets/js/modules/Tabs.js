export default class Tabs {
  constructor({ target }) {
    this._container = document.querySelector(target);
    this._tabs = this._container.querySelectorAll(`input[data-tab]`);

    this._onLoad(this._tabs);
  }

  _onLoad(tabs) {
    tabs.forEach((item) => {
      item.addEventListener('change', (e) => {
        this._onChange(e.currentTarget);
      })
    });

    const activeTab = Array.from(this._tabs).filter((tab) => {
      return tab.checked;
    })[0];

    this._onChange(activeTab);
  }

  _onChange(tab) {
    this._setActiveTab(tab);
    this._setActivePane(tab);

    this.onChange(this._activeTab, this._activePane);
  }

  _setActiveTab(tab) {
    this._activeTab = tab;
  }

  _setActivePane(tab) {
    this._activePane = tab.parentNode.querySelectorAll('.tabs-pane')[tab.dataset.tab];
  }

  getActiveTab() {
    return this._activeTab;
  }

  getActivePane() {
    return this._activePane;
  }

  onChange(activeTab, activePane) {

  }
}
