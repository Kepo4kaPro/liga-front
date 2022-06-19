export default Object.freeze([
    {
        id: 'auto',
        label: 'Авто',
        icon: 'mdi-shield-car',
        subcategories: [
            {
                id: 'auto-kasko',
                label: 'Каско',
                icon: 'mdi-shield-car',
            },
            {
                id: 'auto-osago',
                label: 'Осаго',
                icon: 'mdi-shield-car',
            },
        ],
    },
    {
        id: 'travel',
        label: 'Путешествия',
        icon: 'mdi-shield-airplane-outline',
        subcategories: [
            {
                id: 'travel-accident',
                label: 'Страхование от несчастного случая',
                icon: 'mdi-shield-airplane-outline',
            },
            {
                id: 'travel-visa',
                label: 'Полис выезжающего за рубеж',
                icon: 'mdi-shield-airplane-outline',
            },
        ],
    },
    {
        id: 'realEstate',
        label: 'Недвижимость',
        icon: 'mdi-shield-home-outline',
        subcategories: [
            {
                id: 'realEstate-apartments',
                label: 'Квартиры и апартаменты',
                icon: 'mdi-shield-home-outline',
            },
            {
                id: 'realEstate-home',
                label: 'Дом',
                icon: 'mdi-shield-home-outline',
            },
            {
                id: 'realEstate-responsibility',
                label: 'Ответственность перед соседями',
                icon: 'mdi-shield-home-outline',
            },
        ],
    },
    {
        id: 'health',
        label: 'Здоровие',
        icon: 'mdi-shield-account-outline',
        subcategories: [
            {
                id: 'health-nszh',
                label: 'НСЖ',
                icon: 'mdi-shield-account-outline',
            },
            {
                id: 'health-garmoniya',
                label: 'Женское страхование',
                icon: 'mdi-shield-account-outline',
            },
            {
                id: 'health-child',
                label: 'Детское страхование',
                icon: 'mdi-shield-account-outline',
            },
        ],
    },
    {
        id: 'cash',
        label: 'Кредитование',
        icon: 'mdi-shield-sync-outline',
        subcategories: [
            {
                id: 'cash-cash',
                label: 'Кредит наличными',
                icon: 'mdi-shield-sync-outline',
            },
            {
                id: 'cash-mortgage',
                label: 'Ипотека',
                icon: 'mdi-shield-sync-outline',
            },
            {
                id: 'cash-auto',
                label: 'Автокредиты',
                icon: 'mdi-shield-sync-outline',
            },
        ],
    },
])