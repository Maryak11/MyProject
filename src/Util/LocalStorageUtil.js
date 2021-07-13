export class LocalStorageUtil {
  constructor() {
    this.cartContent = document.querySelector(".cart-content");
  }

  priceWithoutSpaces(num) {
    let n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
  }

  deleteLS(id) {
    const arrAllProductsLS = localStorageUtil.getProducts();
    const index = arrAllProductsLS.findIndex((el) => el.id === id);
    arrAllProductsLS.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(arrAllProductsLS));
  }

  sumFullPriceLS() {
    const arrAllProductsLS = localStorageUtil.getProducts();
    let full = arrAllProductsLS.reduce((acc, el) => {
      return (acc += el.priceCount);
    }, 0);
    return full;
  }

  changeLSCount(count, id) {
    const arrAllProductsLS = this.getProducts();
    const index = +arrAllProductsLS.findIndex((el) => el.id === id);

    if (+count === 0) {
      this.deleteLS(id);
    } else {
      arrAllProductsLS[index].count = count;
      arrAllProductsLS[index].priceCount =
        count * +arrAllProductsLS[index].price.replaceAll(" ", "");
      localStorage.setItem("products", JSON.stringify(arrAllProductsLS));
    }
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem("products");
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  putProducts(productItem) {
    let products = this.getProducts();
    const index = products.findIndex((el) => el.id === productItem.id);
    if (index === -1) {
      products.push(productItem);
    } else {
      products.map((el) => {
        if (el.id === productItem.id) {
          el.count++;
          el.priceCount = +el.count * +el.price.replaceAll(" ", "");
        }
      });
    }
    localStorage.setItem("products", JSON.stringify(products));
    return { products };
  }
}

export const localStorageUtil = new LocalStorageUtil();
localStorageUtil.sumFullPriceLS();
