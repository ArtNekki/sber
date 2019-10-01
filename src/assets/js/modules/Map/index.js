import Popper from 'popper.js';

console.log('popper', Popper);

import createHTMLMapMarker from './HtmlMapMarker';
import { generateMarkerTemplate } from './MarkerTemplate';

//data
import markers from '../../../../data/markerCoords.json';

document.addEventListener('DOMContentLoaded', function() {
  const mapPopupQuery = '.region-map__popup';
  const mapContainer = document.getElementById("region-map");
  const mapPopup = document.querySelector(mapPopupQuery);

  console.log('pp', mapPopup);

  if(!mapContainer) return;
    
  const map = new google.maps.Map(mapContainer, {
    zoom: 4,
    center: new google.maps.LatLng(markers[0].coords.lat, markers[0].coords.lng),
    disableDefaultUI: true
  });

  markers.forEach((marker) => {
    createHTMLMapMarker({
        latlng: new google.maps.LatLng(marker.coords.lat, marker.coords.lng),
        map: map,
        html: generateMarkerTemplate(marker.id, marker.count)
    });
  });


  let activeMarker = null;
  let popper = null;

  document.addEventListener('mouseover', function(e) {
    const marker = e.target.closest('.region-map__marker');

    if(marker) {

      if (activeMarker) {
        activeMarker.classList.remove('region-map__marker--active');
        activeMarker = null;
      }
  
      activeMarker = marker;
      activeMarker.classList.add('region-map__marker--active');
  
      mapContainer.parentNode.classList.add('region-map--marker-active');
  
      popper = new Popper(marker, mapPopup, {
        placement: 'left',
        modifiers: {
          flip: {
              behavior: ['left', 'bottom', 'top', 'right']
          },
          preventOverflow: {
              boundariesElement: mapContainer,
          }
        }
      });

      console.log(popper)

    } else if (!marker && !e.target.closest(mapPopupQuery)) {
      mapContainer.parentNode.classList.remove('region-map--marker-active');
      
      if(activeMarker) {
        activeMarker.classList.remove('region-map__marker--active');
      }
      
      if(popper) {
        popper.destroy();
      }
    }

  });
});

