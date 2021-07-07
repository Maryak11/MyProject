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


  putProducts(productItem) {
    let products = this.getProducts()

    const index = products.findIndex(el => el.id === productItem.id)
    if (index === -1) {
      products.push(productItem)
    } else {
      products.map(el => el.id === productItem.id ? el.count += 1 : '')
    }
    localStorage.setItem(this.keyName, JSON.stringify(products))
    return {
      products
    }
  }
}

export const localStorageUtil = new LocalStorageUtil()
