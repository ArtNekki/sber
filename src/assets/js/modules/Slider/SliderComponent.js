import Swiper from 'swiper';

export default class Slider {
  constructor({ target, settings = {}, turnOffOnBreakPoint }) {
    this._sliderId = this._getSliderId(target);
    this._settings = settings;

    if (turnOffOnBreakPoint) {
      this._breakpoint = window.matchMedia(`(min-width: ${turnOffOnBreakPoint}px)`);
      this._breakpoint.addListener(this._checkBreakpoint.bind(this));
    }

    this._init(target);
  }

  _init(target) {
    if (this._breakpoint && this._breakpoint.matches) return;

    if (typeof target === 'string') {
      target = document.querySelector(target);
    }

    this._slider = new Swiper(target, Object.assign(this._settings, {
      navigation: {
        nextEl: target.parentNode.querySelector('.slider-btn--next'),
        prevEl: target.parentNode.querySelector('.slider-btn--prev'),
        disabledClass: 'slider-btn--disabled',
        hiddenClass: 'slider-btn--hidden'
      }
    }));
  }

  _getSliderId(target) {
    let id;

    if (target.tagName) {
      id = `#${target.id}`;
    } else if ((typeof target === 'string') && (target[0] === '#')) {
      id = target;
    } else if ((typeof target === 'string') && (target[0] === '.')) {
      id = `#${document.querySelector(target).id}`
    }

    return id;
  }

  _checkBreakpoint() {
     if (this._breakpoint && this._breakpoint.matches && this._slider) {
        this._slider.destroy(true, true);
     } else {
        this._init(document.querySelector(this._sliderId));
     }
  }

  getAPI() {
    return this._slider;
  }
}
