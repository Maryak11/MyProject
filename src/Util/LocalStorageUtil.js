export class LocalStorageUtil {

  constructor() {
    this.cartContent = document.querySelector('.cart-content')
  }

  priceWithoutSpaces(num) {
    let n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }


  getProducts(id) {
    const productsLocalStorage = localStorage.getItem(id)
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage)
    }
    return []
  }

  deleteLS(id) {
    localStorage.removeItem(id)
  }

  sumFullPriceLS() {
    const allItems = this.getAllItems()
    let arrPriceCount = allItems.map(el => {
      return el.priceCount
    })

    let full = arrPriceCount.reduce((acc, el) => {
      return acc += el
    }, 0)

    return full
  }

  changeLSCount(count, id) {
    const item = JSON.parse(localStorage.getItem(id))
    if (count <= 0) {

      this.deleteLS(id)
    } else {
      item.count = count
      item.priceCount = +item.price.replaceAll(' ','') * item.count
      localStorage.setItem(id, JSON.stringify(item))
    }
  }


  getAllItems() {
    const allItems = []
    Object.keys(localStorage).forEach((el) => {
      allItems.push(JSON.parse(localStorage.getItem(el)))
    })
    return allItems
  }

  putProducts(productItem) {
    let products = this.getProducts(productItem.id)
    const item = localStorage.getItem(productItem.id)
    if (item) {
      let parseItem = JSON.parse(item)
      parseItem.count++
      parseItem.priceCount = +parseItem.price.replaceAll(' ','') * parseItem.count
      // let newPrice = +parseItem.price.replaceAll(' ','')
      // newPrice += newPrice
      // console.log(this.priceWithoutSpaces(newPrice))
      localStorage.setItem(productItem.id, JSON.stringify(parseItem))
    } else {
      localStorage.setItem(productItem.id, JSON.stringify(productItem))
    }

    return {
      products
    }
  }
}

export const localStorageUtil = new LocalStorageUtil()
localStorageUtil.sumFullPriceLS()