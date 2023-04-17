const productos = [
    {
        id : '1',
        titulo : 'The Last of Us Part II',
        precio : 32500,
        img : 'https://storeplaychile.com/wp-content/uploads/2019/10/portada-2.png',
        categoria : 'PS4',
        stock : 10,
        descripcion : 'Juego de accion' 
    },
    {
        id : '2',
        titulo : 'FIFA 23',
        precio : 25000,
        img : 'https://m.media-amazon.com/images/I/81+irjEqR8L._SL1500_.jpg',
        categoria : 'XBOXONE',
        stock : 5,
        descripcion : 'Juego de futbol'
     },
    {
        id : '3',
        titulo : 'GTA V',
        precio : 15000,
        img : 'https://www.mundogamers.com/cdn/covers/big/ps4/grand-theft-auto-v.jpg',
        categoria : 'PS4',
        stock : 15,
        descripcion : 'Juego de accion-multijugador online'
    },
    {
        id : '4',
        titulo : 'Halo Infinite',
        precio : 20000,
        img : 'https://www.gamereactor.es/media/85/stunningboxarthalo_2868563.png',
        categoria : 'XBOXSERIES',
        stock : 3,
        descripcion : 'Juego de accion'
        
    },
    {
        id : '5',
        titulo : 'God Of War Raganarok',
        precio : 45000,
        img : 'https://pbs.twimg.com/media/E96Ahs6X0AQasBc.jpg',
        categoria : 'PS5',
        stock : 3,
        descripcion : 'Juego de accion'
        
    }
]

export const getProductos = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 500)
    })
}

export const getProductosById = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(productos.find((producto) => producto.id === id))
        }, 500)
    })
}
export const getProductosByCategory = (categoria) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(productos.filter((producto) => producto.categoria === categoria))
        }, 500)
    })
}