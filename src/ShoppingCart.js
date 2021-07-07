import { localStorageUtil } from "./Util/LocalStorageUtil";
import { PRODUCTS } from "./Products/Catalog";
import { CART_CONTENT } from "./Products/ProductsPage";

class ShoppingCart {

  render() {
    const productsCart = localStorageUtil.getProducts()
    let htmlShoppingCart = ''
    productsCart.forEach(({ id, name, price, img, count }) => {
      htmlShoppingCart += ` 
             <li class="cart-content__item">
             <article data-id="${ id }" class="cart-content__product cart-product" tabIndex="0">
                                    <img src="${ img }" alt="" class="cart-product__img">
                                        <div class ="cart-product__text">
                                            <h3 class ="cart-product__title">${ name }</h3>
                                            <span class ="cart-product__price">${ price }</span>
                                        </div>
                                        <div class="delete material-icons">delete</div>
                                </article>           
                   </li>
                `
      const ulCountCart = document.createElement('ul')
      ulCountCart.classList.add("cart-content__top")
      ulCountCart.innerHTML = htmlShoppingCart
      CART_CONTENT.appendChild(ulCountCart)
    })
  }
}

export const shoppingCart = new ShoppingCart()
shoppingCart.render()