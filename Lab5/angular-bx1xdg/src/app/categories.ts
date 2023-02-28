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
                id: 1,
                name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
                price: 169990,
                description: 'диагональ экрана: 15.6 дюйм\n' +
                    'процессор: Intel Pentium Gold 7505\n' +
                    'видеокарта: Intel UHD Graphics\n' +
                    'размер оперативной памяти: 8 ГБ\n' +
                    'тип жесткого диска: SSD\n' +
                    'общий объем накопителей: 256 ГБ',
                imageCollection: ["/laptops/lap1_1.jpeg", "/laptops/lap1_2.jpeg", "/laptops/lap1_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item",
                rating: 5,
                likes:0
            },
            {
                id: 2,
                name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
                price: 479940,
                description: 'диагональ экрана: 13.3 дюйм\n' +
                    'процессор: Apple M1\n' +
                    'видеокарта: Apple M1 7 core\n' +
                    'размер оперативной памяти: 8 ГБ\n' +
                    'тип жесткого диска: SSD\n' +
                    'общий объем накопителей: 256 ГБ',
                imageCollection: ["/laptops/lap2_1.jpeg", "/laptops/lap2_2.jpeg", "/laptops/lap2_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
                rating: 5,
                likes:0
            },
            {
                id: 3,
                name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
                price: 389800,
                description: 'диагональ экрана: 15.6 дюйм\n' +
                    'процессор: Intel Core i5 11400H\n' +
                    'видеокарта: NVIDIA GeForce GTX 1650\n' +
                    'размер оперативной памяти: 16 ГБ\n' +
                    'тип жесткого диска: SSD\n' +
                    'общий объем накопителей: 512 ГБ' +
                    'общий объем накопителей: 256 ГБ',
                imageCollection: ["/laptops/lap3_1.jpeg", "/laptops/lap3_2.jpeg", "/laptops/lap3_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item",
                rating: 5,
                likes:0
            },
            {
                id: 4,
                name: 'Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый',
                price: 139990,
                description: 'диагональ экрана: 14 дюйм\n' +
                    'процессор: Intel Celeron N4020\n' +
                    'видеокарта: Intel UHD Graphics 600\n' +
                    'размер оперативной памяти: 4 ГБ\n' +
                    'тип жесткого диска: SSD\n' +
                    'общий объем накопителей: 128 ГБ',
                imageCollection: ["/laptops/lap4_1.jpeg", "/laptops/lap4_2.jpeg", "/laptops/lap4_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item",
                rating: 5,
                likes:0
            },
            {
                id: 5,
                name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
                price: 349930,
                description: 'диагональ экрана: 15.6 дюйм\n' +
                    'процессор: AMD Ryzen 5 4600H\n' +
                    'видеокарта: nVidia GeForce GTX1650\n' +
                    'размер оперативной памяти: 8 ГБ\n' +
                    'тип жесткого диска: SSD\n' +
                    'общий объем накопителей: 512 ГБ',
                imageCollection: ["/laptops/lap5_1.jpeg", "/laptops/lap5_2.jpeg", "/laptops/lap5_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item",
                rating: 5,
                likes:0
            }
        ]
    },
    {
        name: "smart-watches",
        products: []
    }
]