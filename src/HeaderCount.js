import { localStorageUtil } from "./Util/LocalStorageUtil";

class HeaderCount {
  render() {
    const productArrayCount = localStorageUtil.getAllItems();
    console.log(productArrayCount);
    const newArr = productArrayCount.reduce((acc, el) => {
      return acc + +el.count;
    }, 0);
    console.log(newArr);
    const divCount = document.querySelector(".cart-q");
    divCount.innerHTML = `
            <div class="header-menu__item item material-icons cart-q">
            shopping_cart
                     <div class="header-menu__item-card-count">${newArr}</div>
              </div>
        `;
  }
}

export const headerCount = new HeaderCount();
headerCount.render()