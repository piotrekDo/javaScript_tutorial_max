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