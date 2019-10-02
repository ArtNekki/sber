import baron from 'baron';

document.addEventListener('DOMContentLoaded', function() {
  const target = document.querySelector('#table-scroll');

  if(target) {
    baron({
      root: '#table-scroll',
      scroller: '.table-scroll-content',
      bar: '.table-scroll-bar',
      scrollingCls: 'table-scroll--scrolling',
      draggingCls: 'table-scroll--dragging',
      barOnCls: 'table-scroll--scrollbar',
      direction: 'h',

      impact: 'scroller',
    });
  }
});
