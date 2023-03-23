class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    console.log(this.items);
    const total = this.items.reduce((prevVal, nextItem) => prevVal + nextItem.price, 0);
    this.totalOutput.innerHTML = `<h2>Total: \$${total.toFixed(2)}</h2>`;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor(product, addToCartHandler) {
    this.product = product;
    this.addToCartHandler = addToCartHandler;
  }

  addToCart() {
    this.addToCartHandler(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    ),
  ];

  constructor(addToCartHandler) {
    this.addToCartHandler = addToCartHandler;
  }

  handle(item) {
    this.addToCartHandler(item);
  }

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, this.handle.bind(this));
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  cart = new ShoppingCart();
  productList = new ProductList(this.addToCartHandler.bind(this));

  addToCartHandler(item) {
    console.log('cart from handler ' + JSON.stringify(this.cart));
    this.cart.addProduct(item);
  }

  render() {
    const renderHook = document.getElementById('app');
    console.log('cart from render ' + this.cart);
    const cartEl = this.cart.render();
    const prodListEl = this.productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}
const shop = new Shop();
shop.render();
