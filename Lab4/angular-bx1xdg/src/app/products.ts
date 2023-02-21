export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageCollection: string[],
  urlLink: string
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
    urlLink: "https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item"
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    imageCollection: [],
    urlLink: ""
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    imageCollection: [],
    urlLink: ""
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/