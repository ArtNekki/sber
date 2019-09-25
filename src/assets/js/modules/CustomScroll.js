import baron from 'baron';

document.addEventListener('DOMContentLoaded', function() {
  const target = document.querySelector('#customScroll');

  if(target) {
    baron({
      root: '#customScroll',
      scroller: '.custom-scroll-content',
      bar: '.custom-scroll-bar',
      scrollingCls: 'custom-scroll--scrolling',
      draggingCls: 'custom-scroll--dragging',
      barOnCls: 'custom-scroll--scrollbar',
      impact: 'scroller'
    });
  }
});
