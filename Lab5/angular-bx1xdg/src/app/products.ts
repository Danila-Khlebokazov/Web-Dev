export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageCollection: string[],
  urlLink: string,
  rating: number
  likes : number
}

export function setLike(product : Product){
  product.likes += 1;
}


export const products = [
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 87490,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Exynos 850\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    imageCollection: ["prod1_1.jpeg", "prod1_2.jpeg", "prod1_3.jpeg"],
    urlLink: "https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item",
    rating: 5,
    likes:0
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 376199,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    imageCollection: ["prod2_1.jpeg", "prod2_2.jpeg", "prod2_3.jpeg"],
    urlLink: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item",
    rating: 5,
    likes:0
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 293710,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A13 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3110 мАч',
    imageCollection: ["prod3_1.jpeg", "prod3_2.jpeg", "prod3_3.jpeg"],
    urlLink: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
    rating: 5,
    likes:0
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 704730,
    description: 'технология NFC: Да\n' +
        'цвет: фиолетовый\n' +
        'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
        'диагональ: 6.7 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A16 Bionic\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    imageCollection: ["prod4_1.jpeg", "prod4_2.jpeg", "prod4_3.jpeg"],
    urlLink: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
    rating: 5,
    likes:0
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    price: 129700,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: Super AMOLED, сенсорный, Corning Gorilla Glass 5\n' +
        'диагональ: 6.4 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный Exynos 1280\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    imageCollection: ["prod5_1.jpeg", "prod5_2.jpeg", "prod5_3.jpeg"],
    urlLink: "https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item",
    rating: 5,
    likes:0
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 13 128Gb белый\n',
    price: 375700,
    description: 'технология NFC: Да\n' +
        'цвет: белый\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    imageCollection: ["prod6_1.jpeg", "prod6_2.jpeg", "prod6_3.jpeg"],
    urlLink: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item",
    rating: 5,
    likes:0
  },
  {
    id: 7,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/64 ГБ серый',
    price: 67515,
    description: 'технология NFC: Нет\n' +
        'цвет: серый\n' +
        'тип экрана: IPS, сенсорный, мультитач\n' +
        'диагональ: 6.71 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 680\n' +
        'объем встроенной памяти: 64 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    imageCollection: ["prod7_1.jpeg", "prod7_2.jpeg", "prod7_3.jpeg"],
    urlLink: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-64-gb-seryi-104417151/?c=750000000#!/item",
    rating: 5,
    likes:0
  },
  {
    id: 8,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/64 ГБ голубой',
    price: 80720,
    description: 'технология NFC: Да\n' +
        'цвет: голубой\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Exynos 850\n' +
        'объем встроенной памяти: 64 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    imageCollection: ["prod8_1.jpeg", "prod8_2.jpeg", "prod8_3.jpeg"],
    urlLink: "https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-64-gb-goluboi-104253442/?c=750000000#!/item",
    rating: 5,
    likes:0
  },
  {
    id: 9,
    name: 'Смартфон OPPO A17 4 ГБ/64 ГБ черный',
    price: 71969,
    description: 'технология NFC: Нет\n' +
        'цвет: черный\n' +
        'тип экрана: IPS, сенсорный мультитач\n' +
        'диагональ: 6.56 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный MediaTek Helio G25\n' +
        'объем встроенной памяти: 64 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    imageCollection: ["prod9_1.jpeg", "prod9_2.jpeg", "prod9_3.jpeg"],
    urlLink: "https://kaspi.kz/shop/p/oppo-a17-4-gb-64-gb-chernyi-107420168/?c=750000000#!/item",
    rating: 5,
    likes:0
  },
  {
    id: 10,
    name: 'Смартфон OPPO Reno 7 8 ГБ/128 ГБ оранжевый',
    price: 161070,
    description: 'технология NFC: Да\n' +
        'цвет: оранжевый\n' +
        'тип экрана: сенсорный, мультитач AMOLED\n' +
        'диагональ: 6.44 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 4500 мАч',
    imageCollection: ["prod10_1.jpeg", "prod10_2.jpeg", "prod10_3.jpeg"],
    urlLink: "https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-oranzhevyi-104705825/?c=750000000#!/item",
    rating: 5,
    likes:0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/