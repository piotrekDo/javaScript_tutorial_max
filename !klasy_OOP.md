# Klasy w JavaScript

Konstruktor definiujemy ze słowem `constructor`, nie z nazwą klasy. Konstruktor tworzy pola (lub je nadpisuje), nie potrzebujemy ich definicji powyżej jak w Java. Metody zapisujemy **bez słowa function**, jak poniżej.

Pola klasy jak `title = 'DEFAULT'` nazywane są polami.  
Elementy konstruktora jak `this.title` nazwyane są property
 
Pola definiują propsy.  
Elementy konstruktora nadpisują pola klasy.  
Słowo `this` odwołuje się do klasy, jak w Java.  

```
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

  pseudoToString() {
    console.log(this.title + ' ' + this.description);
  }
}

```

### Klasy w JavaScript mogą zawierać pola i metody statyczne
Podobnie jak w Java, nie mamy dostępu do pól i metod klasy, której obiktu nie utworzyliśmy. Metody i pola statyczne działają jak w Java wywoływane przez `NazwaKlasy.pole`

## Gettery, Settery
Zapisywane wewnątrz obiektu z użyciem słów `get` i `set`. Zastępują props. Więc zapisując getter i setter dla pola title **nie zapisujemy** samego title, a uzyskujemy do niego dostęp przez metody  
`getterSetterMovie.movie` wywoła getter  
`getterSetterMovie.movie = 'new value'` wywoła setter
```
const getterSetterMovie = {
  set title(val) {
    this._title = val ? val : 'default';
  },
  get title() {
    return this._title;
  },
};
```

Zapisanie samego settera, bez gettera pozwala na uzyskanie wartości *read only*. Nie mamy możliwości jej nadpisania bez gettera. 

## Dziedziczenie w JavaScript
Podobnie jak w Java, stosujemy słowo `extends`, każda klasa może dziedziczyc tylko po jednej klasie. Jeżeli subklasa nie posiada konstruktora, wywołany zostanie konstruktor z rodzica. Zapisując konstruktor w subklasie należy pamiętać o `super` i dostarczeniu mu wymaganych argumentów. `super` musi być pierwsze. 
```
class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
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
  }
}
```
