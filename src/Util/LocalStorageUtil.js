export class LocalStorageUtil {

    constructor() {
        this.keyName = 'products'
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName)

        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage)
        }

        return []
    }


    putProducts(id) {
        let products = this.getProducts()
        const index = products.indexOf(id)

        if (index === -1){
            products.push(id)
        }

        localStorage.setItem(this.keyName, JSON.stringify(products))

        return {
            products
        }
    }
}

export const localStorageUtil = new LocalStorageUtil()
