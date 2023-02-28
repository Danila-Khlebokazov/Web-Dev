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
        products: [
            {
                id: 1,
                name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
                price: 229715,
                description: 'поддержка платформ: iOS\n' +
                    'материал корпуса: алюминий\n' +
                    'цвет корпуса: черный\n' +
                    'технология экрана: OLED\n' +
                    'объем встроенной памяти: 32 Гб\n' +
                    'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC\n' +
                    'время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
                imageCollection: ["/watches/watch1_1.jpeg", "/watches/watch1_2.jpeg", "/watches/watch1_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item",
                rating: 5,
                likes:0
            },
            {
                id: 2,
                name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum золотистый',
                price: 230720,
                description: 'поддержка платформ: iOS\n' +
                    'материал корпуса: алюминий\n' +
                    'цвет корпуса: starlight\n' +
                    'технология экрана: OLED\n' +
                    'объем встроенной памяти: 32 Гб\n' +
                    'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC\n' +
                    'время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
                imageCollection: ["/watches/watch2_1.jpeg", "/watches/watch2_2.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-zolotistyi-106585021/?c=750000000#!/item",
                rating: 5,
                likes:0
            },
            {
                id: 3,
                name: 'Смарт-часы Xiaomi Redmi Watch 2 Lite GL черный',
                price: 31896,
                description: 'поддержка платформ: Android, ,iOS\n' +
                    'материал корпуса: пластик\n' +
                    'цвет корпуса: черный\n' +
                    'технология экрана: TFT\n' +
                    'интерфейсы: Bluetooth\n' +
                    'время работы: в активном режиме: 120 ч, в режиме ожидания: 240 ч',
                imageCollection: ["/watches/watch3_1.jpeg", "/watches/watch3_2.jpeg", "/watches/watch3_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/xiaomi-redmi-watch-2-lite-gl-chernyi-103246651/?c=750000000#!/item",
                rating: 5,
                likes:0
            },
            {
                id: 4,
                name: 'Смарт-часы Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 мм черный-черный',
                price: 90894,
                description: 'поддержка платформ: Android\n' +
                    'материал корпуса: алюминий\n' +
                    'цвет корпуса: черный\n' +
                    'интерфейсы: Bluetooth, ,NFC',
                imageCollection: ["/watches/watch4_1.jpeg", "/watches/watch4_2.jpeg", "/watches/watch4_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item",
                rating: 5,
                likes:0
            },
            {
                id: 5,
                name: 'Смарт-часы Kieslect Smart Calling Whatch Kr черный',
                price: 34988 ,
                description: 'поддержка платформ: Android, ,iOS\n' +
                    'материал корпуса: металл\n' +
                    'цвет корпуса: черный\n' +
                    'интерфейсы: Bluetooth\n' +
                    'время работы: 9 дней/ при активном режиме - до 2 дней',
                imageCollection: ["/watches/watch5_1.jpeg", "/watches/watch5_2.jpeg", "/watches/watch5_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/kieslect-smart-calling-whatch-kr-chernyi-105772460/?c=750000000#!/item",
                rating: 5,
                likes:0
            }]
    },
    {
        name: "audio-systems",
        products: [
            {
                id: 1,
                name: 'Акустическая система SVEN PS-670',
                price: 48941,
                description: 'тип: активная\n' +
                    'назначение: сабвуфер\n' +
                    'мощность: 65 Вт\n' +
                    'материал: пластик\n' +
                    'цвет: черный',
                imageCollection: ["/audio/audio1_1.jpeg", "/audio/audio1_2.jpeg", "/audio/audio1_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/sven-ps-670-104046613/?c=750000000#!/item",
                rating: 5,
                likes:0
            },
            {
                id: 2,
                name: 'Акустическая система PreSonus Eris E3.5',
                price: 56890,
                description: 'ттип: активная\n' +
                    'назначение: монитор\n' +
                    'мощность: 50 Вт\n' +
                    'материал: MDF\n' +
                    'цвет: черный',
                imageCollection: ["/audio/audio2_1.jpeg", "/audio/audio2_2.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/presonus-eris-e3-5-100964568/?c=750000000#!/item",
                rating: 5,
                likes:0
            },
            {
                id: 3,
                name: 'Акустическая система BEHRINGER PK115',
                price: 93600,
                description: 'тип: пассивная\n' +
                    'назначение: рупорный громкоговоритель\n' +
                    'мощность: 200 Вт\n' +
                    'материал: пластик\n' +
                    'цвет: черный',
                imageCollection: ["/audio/audio3_1.jpeg", "/audio/audio3_2.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/behringer-pk115-102814306/?c=750000000#!/item",
                rating: 1,
                likes:0
            },
            {
                id: 4,
                name: 'Акустическая система M-Audio BX3',
                price: 54590,
                description: 'тип: полочная\n' +
                    'назначение: студийный громкоговоритель\n' +
                    'мощность: 120 Вт\n' +
                    'материал: MDF\n' +
                    'цвет: черный',
                imageCollection: ["/audio/audio4_1.jpeg", "/audio/audio4_2.jpeg", "/audio/audio4_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/m-audio-bx3-100951709/?c=750000000#!/item",
                rating: 4.5,
                likes:0
            },
            {
                id: 5,
                name: 'Акустическая система M-Audio BX3 D4 BT с Bluetooth (пара)',
                price: 64490,
                description: 'тип: активная\n' +
                    'назначение: студийный громкоговоритель\n' +
                    'мощность: 120 Вт\n' +
                    'материал: MDF\n' +
                    'цвет: черный',
                imageCollection: ["/audio/audio5_1.jpeg", "/audio/audio5_2.jpeg", "/audio/audio5_3.jpeg"],
                urlLink: "https://kaspi.kz/shop/p/m-audio-bx3-d4-bt-s-bluetooth-para--105073606/?c=750000000#!/item",
                rating: 4.5,
                likes:0
            }
        ]
    }

]