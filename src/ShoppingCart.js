import {localStorageUtil} from "./Util/LocalStorageUtil";
import {PRODUCTS} from "./Products/Catalog";

class ShoppingCart {

    render() {
        const productsCart = localStorageUtil.getProducts()
        const divCountCart = document.querySelector('.cart-content__list')
        productsCart.forEach(({id, name, price, img, count}) => {
                divCountCart.innerHTML = ` 
             <li class="cart-content__item">
                                <article data-id="${id}" class="cart-content__product cart-product" tabIndex="0">
                                    <img src="${img}" alt="" class="cart-product__img">
                                        <div class ="cart-product__text">
                                            <h3 class ="cart-product__title">${name}</h3>
                                            <span class ="cart-product__price">${price}</span>
                                        </div>
                                        <div class="delete material-icons">delete</div>
                                </article>
                            </li>
                `
        })
    }
}

export const shoppingCart = new ShoppingCart()
shoppingCart.render()