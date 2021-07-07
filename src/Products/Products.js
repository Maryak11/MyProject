import './Catalog'
import { PRODUCTS } from "./Catalog";
import { PRODUCTS_PAGE } from "./ProductsPage";
import { localStorageUtil } from "../Util/LocalStorageUtil";
import { headerCount } from "../HeaderCount";
import { shoppingCart } from "../ShoppingCart";

export class Products {
  constructor() {
    this.productsBtn = document.querySelector('.products__items')
  }

  onclickProductBtn(id, name, price, img) {
    let prodItemLS = {
      id,
      name,
      price,
      img,
      count: 1
    }
    localStorageUtil.putProducts(prodItemLS)
    headerCount.render()

  }

  render() {

    // <article class="product__item" data-id = "${id}">      </article>  `
    PRODUCTS.forEach(({ id, name, img, price }) => {
      const article = document.createElement("article")
      article.innerHTML = `
             
                 <a href="#" class="products_image">
                     <img class="product_image img" src="${ img }" alt="">
                 </a>
                 <div class="products__name_title">${ name }</div>
                 <div class="product__price">${ price }</div>
                
                 <button class="products__button"> 
                     Add to Cart
                 </button>
           `
      article.classList.add("product__item")
      article.setAttribute('data-id', id)
      const btn = article.querySelector(".products__button")
      btn.addEventListener('click', (e) => {
        this.onclickProductBtn(id, name, price, img)
      })
      PRODUCTS_PAGE.appendChild(article)
    })
  }
}

const productPage = new Products()
productPage.render()
