import { localStorageUtil } from "./Util/LocalStorageUtil";
import { PRODUCTS } from "./Products/Catalog";
import { CART_CONTENT } from "./Products/ProductsPage";
import { headerCount } from "./HeaderCount";

class ShoppingCart {
  constructor() {
    this.cartContent = document.querySelector('.cart-content')
    this.cart = document.querySelector(".cart")
    this.price = document.querySelector('.fullprice')
  }

  deleteProductItem(productItem, id) {
    localStorageUtil.deleteLS(id)
    headerCount.render()
    this.render()
  }

  onChangeCountProduct(value, id) {
    localStorageUtil.changeLSCount(value, id)
    headerCount.render()
    this.render()
  }

  onClickInMobileVersion() {
    if (localStorageUtil.getAllItems().length !== 0) {
      this.cartContent.classList.toggle("active")
      console.log('dfgdfg')
    } else {
      this.cartContent.classList.remove("active")
    }
  }

  render() {
    const allItemsLS = localStorageUtil.getAllItems()
    let htmlShoppingCart = ''
    CART_CONTENT.innerHTML = ''
    if (localStorageUtil.getAllItems().length !== 0) {
      this.cartContent.classList.add("active")
      allItemsLS.forEach(({ id, name, price, img, count }) => {
        const liShoppingCart = document.createElement('li')
        liShoppingCart.innerHTML = ` 
        <article data-id="${ id }" class="cart-content__product cart-product" tabIndex="0">
                  <img src="${ img }" alt="" class="cart-product__img">
                      <div class ="cart-product__text">
                          <h3 class ="cart-product__title">${ name }</h3>
                          <span class ="cart-product__price">${ price }</span>
                      </div>
                      <input class="cart-product__input" type="number" value="${ count }" min="0">
                      <div class="delete material-icons">delete</div>
              </article>           
                 
                `
        liShoppingCart.classList.add('cart-content__item')
        const btnDelete = liShoppingCart.querySelector('.delete')
        const changeInput = liShoppingCart.querySelector('.cart-product__input')
        changeInput.addEventListener('change', (el) => {
          let inputValue = el.currentTarget.value
          this.onChangeCountProduct(inputValue, id)
        })
        btnDelete.addEventListener('click', (el) => {
          this.deleteProductItem(el.target.closest('.cart-content__item'), id)
        })
        this.price.textContent = localStorageUtil.sumFullPriceLS()
        console.log(window.screen.width)
        if (window.screen.width <= 640) {
          this.cartContent.addEventListener('click', el => {
            el.stopPropagation()
          })
          this.cart.addEventListener("click", el => {
            this.onClickInMobileVersion()
          })

        }
        CART_CONTENT.appendChild(liShoppingCart)
      })

    } else {
      this.cartContent.classList.remove("active")
    }
  }
}

export const shoppingCart = new ShoppingCart()
shoppingCart.render()