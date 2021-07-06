
    const productBtn = document.querySelectorAll(".products__button")
    const cartProductList = document.querySelector('.cart-content__list')
    const cart = document.querySelector('.cart-content')
    const cartCount = document.querySelector('.header-menu__item-card-count')
    const fullPrice = document.querySelector('.fullprice')


    let price = 0
    let randomID = 0

    // const randomID = () => {
    //     return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    // }

    const priceWithoutSpaces = (str) => {
        return str.replace(/\s/g, '')
    }

    const normalPrice = (str) => {
        return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$]))/g, '$1 ')
    }

    const printFullPrice = () => {
        fullPrice.textContent = `${normalPrice(price)} `
    }

    const printCount = () => {
        let length = cartProductList.children.length
        cartCount.textContent = length
        length > 0
            ? cart.classList.add('active') : cart.classList.remove('active')
    }

    const generateCartProduct = (img, title, price, id) => {
        return `
     <li class="cart-content__item">
                            <article data-id="${id}" class="cart-content__product cart-product" tabindex="0">
                                <img src="${img}" alt="" class="cart-product__img">
                                <div class="cart-product__text">
                                    <h3 class="cart-product__title">${title}</h3>
                                    <span class="cart-product__price">${price}</span>
                                </div>
                                <div class="delete material-icons">delete</div>
                            </article>
                        </li>
    `
    }
    const plusPrice = (currentPrice) => {
        return price += currentPrice
    }
    const minusPrice = (currentPrice) => {
        return price -= currentPrice
    }

    const upDateStorage = () => {
        let parent = cartProductList
        let html = parent.innerHTML
        html.trim().length
            ? localStorage.setItem('products', html)
            : localStorage.removeItem('products')
    }

    const sumCount = () => {
        document.querySelectorAll('.cart-content__item').forEach( el => {
            price += parseInt(priceWithoutSpaces(el.querySelector('.cart-product__price').textContent))
        })
    }
    const initialState = () => {
        if (localStorage.getItem('products') !== null) {
            cartProductList.innerHTML = localStorage.getItem('products')
            printCount()
            sumCount()
            printFullPrice()
            // cartProductList.querySelector('.simplebar-content').innerHTML = localStorage.getItem('products')
        }
        // printCount()
    }
    initialState()

    const deleteProduct = (productParent) => {
        let id = productParent.querySelector('.cart-product').dataset.id
        let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent))
        minusPrice(currentPrice)
        printFullPrice()
        productParent.remove()
        printCount()
        upDateStorage()
    }
    productBtn.forEach(el => {
        el.closest(".product__item").setAttribute('data-id', ++randomID)
        el.addEventListener('click', (e) => {
            let self = e.currentTarget
            let parent = self.closest('.product__item')
            let id = parent.dataset.id
            let img = parent.querySelector('.products_image img').getAttribute('src')
            let title = parent.querySelector('.products__name_title').textContent
            let priceCountString = parent.querySelector('.product__price').textContent
            let priceCountNumber = parseInt(priceWithoutSpaces(priceCountString))
            plusPrice(priceCountNumber)
            printFullPrice()
            cartProductList.insertAdjacentHTML('afterbegin',
                    generateCartProduct(img, title, priceCountNumber, id))
            printCount()
            upDateStorage()
        })
    })

    cartProductList.addEventListener('click', e => {
        if (e.target.classList.contains('delete')) {
            deleteProduct(e.target.closest('.cart-content__item'))
        }
    })

