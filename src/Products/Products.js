import './Catalog'
import {PRODUCTS} from "./Catalog";
import {PRODUCTS_PAGE} from "./ProductsPage";
import {localStorageUtil} from "../Util/LocalStorageUtil";

export class Products {


    onclickProductBtn(){
        return console.log("fdgdg")
    }

    render() {

        let htmlCatalog = ''
        PRODUCTS.forEach(({id, name, img, price}) => {
             htmlCatalog += `
              <article class="product__item" data-id = "${id}">
                    <a href="#" class="products_image">
                        <img class="product_image img" src="${img}" alt="">
                    </a>
                    <div class="products__name_title">${name}</div>
                    <div class="product__price">${price}</div>
                   
                    <button class="products__button" onclick = "productPage.onclickProductBtn()"> 
                        Add to Cart
                    </button>
                </article>
             `
        })
        PRODUCTS_PAGE.innerHTML = htmlCatalog

    }
}
const productPage = new Products()
productPage.render()