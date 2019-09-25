// import createHTMLMapMarker from './HtmlMapMarker';
// import { generateMarkTemplate } from './MarkerTemplate';
// import markerCoords from '../../../../data/markerCoords.json';

// document.addEventListener('DOMContentLoaded', function() {
//   const html = this.documentElement;
//   const mapContainer = document.getElementById("map");

//   if(!mapContainer) return;
    
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: new google.maps.LatLng(marks[0].coords.lat, marks[0].coords.lng)
//   });

//   marks.forEach((mark) => {
//     createHTMLMapMarker({
//         latlng: new google.maps.LatLng(mark.coords.lat, mark.coords.lng),
//         map: map,
//         html: generateMarkTemplate(mark.id, mark.count)
//     });
//   });

//   let activeMark = null;

//   document.addEventListener('click', function(e) {
//     const mark = e.target.closest('.mark');

//     if(mark) {
    
//       if (activeMark) {
//         activeMark.classList.remove('mark--active');
//         activeMark = null;
//       }

//       activeMark = mark;
//       activeMark.classList.add('mark--active');

//       html.classList.add('page--marker-active');
//     };

//   });

//   document.querySelector('[data-close-panel]').addEventListener('click', function() {
//     html.classList.remove('page--marker-active');
//     activeMark.classList.remove('mark--active');
//   });
// });
