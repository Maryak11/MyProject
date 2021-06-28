class Menu {

    constructor(selectorBurger, selectorMobile) {

        this.$burgerClass = document.querySelector(selectorBurger)
        this.$mobileMenuClass = document.querySelector(selectorMobile)

    }

    addBurgerHandler() {
            this.$burgerClass.addEventListener("click", () => {
            this.$burgerClass.classList.toggle("is-active")
        })

    }

    addMenuHandler() {
            this.$burgerClass.addEventListener("click", () => {
            this.$mobileMenuClass.classList.toggle("main-active")
        })

    }

    initMenu() {
        this.addBurgerHandler()
        this.addMenuHandler()
    }
}

export default Menu