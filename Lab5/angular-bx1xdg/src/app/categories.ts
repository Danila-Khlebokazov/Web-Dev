import {Product, products} from "./products";

export interface Category{
    name: string,
    products : Product[]
}

export const categories = [
    {
        name: "phones",
        products : products
    },
    {
        name: "laptops",
        products : [
            {
                id: 2,
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
            }
        ]
    }
]