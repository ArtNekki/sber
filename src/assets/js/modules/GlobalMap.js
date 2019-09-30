const regions = {
    14: 'Саха (Якутия)',
    87: 'Чукотский автономный округ',
    41: 'Камчатская область',
    49: 'Магаданская область',
    25: 'Приморский край',
    27: 'Хабаровский край',
    79: 'Еврейская автономная область',
    28: 'Амурская область',
    65: 'Сахалинская область',
    36: 'Воронежская область',
    31: 'Белгородская область',
    46: 'Курская область',
    32: 'Брянская область',
    67: 'Смоленская область',
    57: 'Орловская область',
    48: 'Липецкая область',
    68: 'Тамбовская область',
    71: 'Тульская область',
    62: 'Рязанская область',
    40: 'Калужская область',
    50: 'Московская область',
    33: 'Владимирская область',
    37: 'Ивановская область',
    44: 'Костромская область',
    69: 'Тверская область',
    76: 'Ярославская область',
    56: 'Оренбургская область',
    64: 'Саратовская область',
    63: 'Самарская область',
    73: 'Ульяновская область',
    58: 'Пензенская область',
    13: 'Республика Мордовия',
    21: 'Чувашская Республика',
    52: 'Нижегородская область',
    12: 'Республика Марий Эл',
    16: 'Республика Татарстан',
    18: 'Удмуртская Республика',
    2: 'Республика Башкортостан',
    43: 'Кировская область',
    89: 'Ямало-Ненецкий автономный округ',
    72: 'Тюменская область',
    45: 'Курганская область',
    74: 'Челябинская область',
    66: 'Свердловская область',
    86: 'Ханты-Мансийский автономный округ',
    53: 'Новгородская область',
    35: 'Вологодская область',
    60: 'Псковская область',
    47: 'Ленинградская область',
    51: 'Мурманская область',
    10: 'Республика Карелия',
    11: 'Республика Коми',
    83: 'Ненецкий автономный округ',
    29: 'Архангельская область',
    39: 'Калининградская область',
    61: 'Ростовская область',
    34: 'Волгоградская область',
    30: 'Астраханская область',
    8: 'Республика Калмыкия',
    5: 'Республика Дагестан',
    95: 'Чеченская Республика',
    6: 'Республика Ингушетия',
    15: 'Республика Северная Осетия',
    7: 'Кабардино-Балкарская Республика',
    9: 'Карачаево-Черкесская Республика',
    23: 'Краснодарский край',
    26: 'Ставропольский край',
    1: 'Республика Адыгея',
    3: 'Республика Бурятия',
    17: 'Республика Тыва',
    22: 'Алтайский край',
    54: 'Новосибирская область',
    55: 'Омская область',
    70: 'Томская область',
    19: 'Республика Хакасия',
    24: 'Красноярский край',
    38: 'Иркутская область',
    75: 'Забайкальский край',
    81: 'Пермский край',
    91: 'Республика Крым',
    4: 'Республика Алтай',
    42: 'Кемеровская область'
}

const regionsPrice = {
  14: '30 956',
  87: '30 936',
  41: '31 986',
  49: '30 496',
  25: '33 986',
  27: '36 986',
  79: '37 986',
  28: '38 986',
  65: '39 986',
  36: '32 986',
  31: '31 986',
  46: '20 966',
  32: '40 986',
  67: '50 986',
  57: '60 986',
  48: '70 986',
  68: '80 986',
  71: '90 986',
  62: '31 986',
  40: '32 986',
  50: '33 986',
  33: '34 986',
  37: '35 986',
  44: '36 986',
  69: '37 986',
  76: '38 986',
  56: '39 986',
  64: '40 986',
  63: '41 986',
  73: '42 986',
  58: '43 986',
  13: '44 986',
  21: '45 986',
  52: '46 986',
  12: '47 986',
  16: '48 986',
  18: '49 986',
  2: '50 986',
  43: '51 986',
  89: '52 986',
  72: '53 986',
  45: '54 986',
  74: '55 986',
  66: '56 986',
  86: '57 986',
  53: '58 986',
  35: '59 986',
  60: '60 986',
  47: '61 986',
  51: '62 986',
  10: '63 986',
  11: '64 986',
  83: '65 986',
  29: '66 986',
  39: '67 986',
  61: '68 986',
  34: '69 986',
  30: '70 986',
  8: '23 916',
  5: '10 986',
  95: '25 986',
  6: '15 986',
  15: '9 986',
  7: '322 986',
  9: '37 986',
  23: '37 986',
  26: '38 986',
  1: '97 986',
  3: '14 986',
  17: '29 986',
  22: ' 986',
  54: '30 456',
  55: '30 876',
  70: '30 916',
  19: '30 698',
  24: '30 996',
  38: '30 216',
  75: '30 436',
  81: '30 876',
  91: '30 316',
  4: '30 326',
  42: '30 886'
}

const renderInfobarItem = (data) => {
  return `<div class="info-bar__item">
    <div class="info-bar__label">средне-рыночная стоимость<br />по региону</div>
    <div class="info-bar__data">${data} ₽/м²</div>
  </div>`
}

let activeRegionData = null;
let mapTitle = null;

document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('global-map');
    const infobar = document.getElementById('info-bar');
    // const mapTitle = map.querySelector('.global-map__title');

    map.addEventListener('mouseover', function(e) {
        const region = e.target.closest('[data-region]');
        
        if(region) {
          let tempEl = document.createElement('div');
          tempEl.innerHTML = renderInfobarItem(regionsPrice[region.dataset.region]);

          if(mapTitle) {
            map.removeChild(mapTitle);
            mapTitle = null;
          }

          if (activeRegionData) {
            infobar.removeChild(activeRegionData);
            activeRegionData = null;
          }

          activeRegionData = infobar.appendChild(tempEl.firstElementChild);

          mapTitle = document.createElement('h3');
          mapTitle.classList.add('global-map__title');
          mapTitle.innerHTML = regions[region.dataset.region];
          map.appendChild(mapTitle);

        } else if (!region && activeRegionData) {
          infobar.removeChild(activeRegionData);
          map.removeChild(mapTitle);
          activeRegionData = null;
          mapTitle = null;
        } 
    });
})
