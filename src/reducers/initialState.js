export default {
    cards: {
        isFetching: false,
        list: [
            {
                id: 1,
                type: 'ms-white',
                title: 'AccessBank debit card',
                number: '5633',
                balance: 200,
                color: '#f44336',
                currency: 'AZN',
                currencyCode: '944',
            },
            {
                id: 2,
                type: 'vs',
                title: 'Expressbank Gold',
                number: '6729',
                balance: 100,
                color: '#e91e63',
                currency: 'AZN',
                currencyCode: '944',
            },
            {
                id: 3,
                type: 'ms',
                title: 'Ibar',
                number: '3422',
                balance: 30,
                color: '#03a9f4',
                currency: 'AZN',
                currencyCode: '944',
            }
        ]
    },

    payments: {
        isFetching: false,
        list: []
    }
}