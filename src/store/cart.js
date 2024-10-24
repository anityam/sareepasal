class Store {
    removeFromCart(id) {
        this.carts = this.carts.filter(item => {
            return item.product_id !== id;
        });
        this.getCart();
    }
    increaseQuantityInCart(id) {
        this.carts.map(item => {
            if (item.product_id === id) item.quantity += 1;
            return item;
        });
        this.getCart();
    }
    decreaseQuantityInCart(id) {
        this.carts.map(item => {
            if (item.product_id === id && item.quantity > 1) item.quantity -= 1;
            return item;
        });
        this.getCart();
    }
    addToCart(id) {
        let found = false;
        this.carts.map(item => {
            if (item.product_id === id) {
                item.quantity += 1;
                found = true;
            }
            return item;
        });
        if (!found) {
            this.carts.push({ product_id: id, quantity: 1 });
        }
        this.getCart();
    }
    getCart() {
        let carts = this.carts;
        carts.map(item => {
            for (let i in this.products) {
                if (item.product_id === this.products[i].id) {
                    item.image = this.products[i].image;
                    item.name = this.products[i].name;
                    item.description = this.products[i].description;
                    item.price = this.products[i].price * item.quantity;
                }
            }
            return item;
        });
        this.currentCart = carts;
    }
}
export default Store;