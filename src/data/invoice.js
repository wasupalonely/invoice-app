// SHOULDD BE CONSUMED BY A DB
export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'US',
            city: 'LA',
            state: 'CA',
            street: '1 st',
            number: 123
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 1233,
    },
    items: [
        {
            id: 1,
            product: 'Cpu intel i7',
            price: 4.99,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corser Keyboard',
            price: 150,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor asus',
            price: 300,
            quantity: 1
        }
    ]
}