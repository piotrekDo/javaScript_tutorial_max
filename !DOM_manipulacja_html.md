# Manipulacja drzewem DOM
Document Object Model- obiektowa reprezentacja dokumentu HTML.

**document vs window** - dwa bazowe obiekty. window to główny obiekt, zawierający w sobie document.

Każdy tag nazwywany jest `element node`, np `<body>` to to *body node*. Obiektowa reprezentacja pozwala stworzyć całe drzewo node. Właściwość `textContent` przechowuje tekst. 

## Node vs Element
Każdy element html taki jak body, czy div jest element-node. Wszystkie inne komponenty HTML niebędące elementami nazywami node, np. tekst wewnątrz elementów html

## Pobieranie elementów DOM - Query selectors
Istnieją dwie grupy selektorów:  
**zwracające pojedyńczą wartość**  
- `getElementById()` zwraca element wg przekazanej właściwości ID,
- `querySelector()` zwraca **pierwszy** element wg przekazanego selectora CSS.

**zwracające zbiór elementów**
- `getElementsByTagName()` zwraca wszystkie elementy wg tagu HTML, np. wszystkie nagłówki,
- `querySelectorAll()` - zwraca wszystkie elementy wg selektora CSS.
metody zwracają zwykle **NodeList**, strukturę danych zbliżoną do tablicy JS. 

Na raz przypisanym do zmiennej elemencie można dalej wykonywać metody zwracające inne, zagnieżdżone elementy- **child nodes**.

**metody querySelector wymagają przekazania warunku tak jak w CSS**, należy zapisywać nazwy klas poprzedzone kropką `document.querySelector('.list-item')`. Selektory te mogą być złożone, zupełnie jak w CSS np. `document.querySelector('ul li:first-of-type')` który zwróci pierwszy element 'li' wewnątrz listy. 

## Modyfikowanie pobranych elementów
Uzyteczne metody dla elementu `const p = document.getElementById('welcome')` wskazującego na paragraf:
- `.textContent` wskazuje na wyświetlany tekst,
- `.id` pobiera id elementu
- `.classList` zwraca listę klas CSS

## Atrybuty vs Propsy
Atrybuty to cechy **zapisywane w HTML**, takie jak id, class, value...
Często są one mapowane na prosy, dostępne w obiektach. 

Property to **wartość w obiekcie** stworzonym z tagu HTML.

Atrybut `value` działa tylko w jedną stronę. Możemy się do niego odwołać w JavaScript, aby go odczytać, ale jego nadpisanie nie spowoduje zmiany w dokumencie HTML

## Traversing - przemierzanie drzewa DOM
- **child** element zagnieżdzony bezpośrednio w innym elemencie. `<p>` jest *child* elementu `div`. `<em>` nie jest
    ```
    <div>
        <p>Child <em>Not a child</em></p>
    </div>    
    ```
- **descendant** element zagnieżdżony, ale niekoniecznie bezpośrednio, zarówno `<p>` jak i `<em>` sa *descendant* elementu `div`
    ```
    <div>
        <p>descendant <em>also a descendant</em></p>
    </div>    
    ``
- **parent** odwrotność *child* `<div>` jest *parent* dla `<p>`
    ```
    <div>
        <p>Div is parent <em>Not for me</em></p>
    </div>    
    ```
- **ancestor** odwrotność dla *descendant*. `<div>` jest *ancestor* zarówno dla `<p>` jak i dla `<em>`
     ```
    <div>
        <p>Div is ancestor <em>For me too</em></p>
    </div>    
    ```

### Metody
- `parentNode` oraz `parentElement` zwracają najbliższy nadrzędny obiekt.
- `childNodes` oraz `children` lub `querySelector` zwraca poniższe, zagnieżdżone obiekty
- `previosSibling` zaznacza sąsiedni, poprzedni **node**
- `previosElementSibling` zaznacza sąsiedni, poprzedni **element**
- `nextSibling` oraz `nextElementSibling` jak powyżej, ale sąsiedni, następny.

### Metody  DOM Traversal
Są szybsze od `querySelector'ów` i pozwalają dostać się do sąsiednich elementów.
Są to metody zaczynające się od 'next', 'previous', 'first' itp. 

## Dodawanie i usuwanie elementów z drzewa DOM

### Tworzenie i wstawianie elementów
- `createElement('div')` pozwala stworzyć nowy element node. Wywoływana na `document`.  
- `append()` oraz `appendChild()` pozwalają dodać element do innego. 
- `prepend`, `before`, `after`, `insertBefore` wstawiają element w określone mejsce.
- `replaceChild`, `replaceWith` zamieniają element/node na inny.  
  
Można również tworzyć i wstawiać nowe elementy poprzez metodę `innerHTML` np. `element.innerHTML = '<h2>Hi</h2>';` To podejśćie **nie dodaje** nowego elementu, ale **podmienia poprzednie** Można daodać nową zawartość poprzez konkatenację. 

Metoda `append` pozwala w prosty sposób tworzyć text node. Można też 'dokleić' tekst:
`someElement.textContent = someElement.textContent + 'More text!';`
Metoda `prepend` doda nowy obiekt na poczatk, na przyklad nowe li na poczatek listy ul. Można też zaznaczyć konkretny element li i wywolac na nim metodę `before` aby wstawic nowe li przed niego, na przykład na trzecie miejsce.  
  
Inną, szalenie pożyteczną metodą jest [insertAdjacentElement](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement). Pozwala ona na łatwe manipulowanie miejscem w które chcemy wstawić nowy element.

```
const list = document.querySelector("ul");
const secondLi = list.children[1];
const newLi = document.createElement("li");
newLi.textContent = "New Li"
secondLi.insertAdjacentElement("afterend", newLi);
```

### Klonowanie elementów
Metoda `cloneNode(boolean)` pozwala klonować elementy. Boolean to argument oznaczający **deep clone**. Z opcją `true` sklonuje również zagnieżdżone nody. 
`const newLi = liElement.cloneNode(true)`

### Usuwanie elementów
Usuwać obiekty możemy z pomocą metody `element.remove()` usuwa element, na którym metoda została wywołana. Niewspierane przez IE. Nieco prawilniejszym sposobem jest usuwanie elementu poprzez `removeChild` wywołana na elemencie rodzica. Jeżeli element rodzica nie jest znany z uwagni na dynamiczne zachowanie drzewa DOM, można to osiągnąc w sprytny sposób: 
```
const list = document.querySelector('ul');
list.parentElement.removeChild(list)
```

Dodatkowo istnieje metoda `replaceWith(nowy_element)` pozwalająca podmienić element na inny.

## Stylowanie elementów HTML 
- `style` najzyższe specificity
- `className` można dodawać, usuwać klasy. Jeden string zawierający **wszystkie** klasy
- `classList` zwraca tablicę wszystkich klas

Dodatkowo metoda `classList.toggle('klasa)` pozwala dodać klasę jeżeli jej nie ma lub usunąć, jeżeli jest zawarta. 
  
## Dostęp do atrybutów 'data-'
W ramach kodu HTML elementy mogą posiadać adtrybuty `data-whatever`. Możemy odwołać się do nich poprzez metodę `.dataset` wywołaną na elemencie pobranym z drzewa DOM. Metoda zwraca *DOMStringMap* rodzaj mapy przechowującej dane whatever:przypisane_dane. Można w ten sposób przypisać też nowe atrybuty `data-` poprzez `element.dataset.SomeInfo = 'Test'`

## element.getBoundingClientRect()
zwraca dane z pozycją elementu. Odwołanie do tych danych pozwala dalej manipulować elementem. 
***`window.innerWidth`*** oraz ***`window.innerHeigth`*** zwracają odpowiednio aktualną wysokość i szerokość okna. Odowłanie do ***`document.documentElement.clientWidth`*** oraz ***`document.documentElement.clientWidth`*** zwracająpodobne wartośći, ale uwzględniające scroll. Więcej na MDN odnośnie ELement i pochodnych. 

## Template
Tag HTML, który nie jest renderowany, można się do niego odwołać wewnątrz kodu JS, zamiast zapisywać `innerHTML` 'na sztywno'
```
<template id="tooltip">
    <h2>More Info</h2>
    <p></p>
</template>
```
```
const tooltipElement = document.createElement('div');
tooltipElement.className = 'card';
const tooltipTemplate = document.getElementById('tooltip');
const tooltipBody = document.importNode(tooltipTemplate.content, true);
tooltipBody.querySelector('p').textContent = this.text;
tooltipElement.append(tooltipBody);
```


# Użyteczne funkcje i metody

## Timeout i interval
Rodzaj timera, opóźniający wykonanie kodu.
Metoda `setTimeout` przyjmuje dwa argumenty- funkcję która ma się wykonać **po upłynięciu** czasu i drugi argument to czas wyrażony w ms. Nie zmraża przeglądarki, reszta funkcjonuje normalnie. W przypadku zapisu `setTimeout(this.startAnalytics, 3000);` gdzie przekazujemy referencję do funkcji, możemy przekazać trzeci argument w postaci tablicy argumentów dla funkcji. 
  
Metoda `setInterval` wykonuje przekazaną funkcję **cyklicznie** co x czasu
```
const intervalId = setInterval(() => {
  console.log('Sending analytics data...')
}, 2000);
```

## location
zawiera informacje na temat aktualnie wyswietlanej strony i pozwala nawigować.
- `location.href = 'https://....'` pozwala przejść na wskazany adres
- `location.assign('https://....')` ofen to samo, ale w formie metody
- `location.replace('https://')` jak powyżej, ale nie 'odkłada' się w historii. Nie mamy możliwości wrócić do strony poprzez <-
- `location.host` wyświetla info na temat hosta. Zwraca pusty string przy localhost
- `location.domain` jak wyzej, ale uwzglednia protokól, np; https
- `location.pathname` wskazuje na strone wewnątrz domeny, np. /home albo /users. Odświeża stronę (?)

## history
location pozwala dodawać adresy do historii, history zaś nimi zarządzać, manipulować.
- `history.back()` cofa o jedną stronę.
- `history.forward()` do przodu
- `history.length` ilość 'przełączeń', 'kroków'
- `history.go(-5)` cofa o podaną ilość 'kroków', z minusem *back*, wartość dodatnia *forward*

## obiekt navigator
kolejny ciekawy obiekt zawierający informację o użytkowniku i przeglądarce
- `navigator.geolocation.getCurrentPosition((data) => console.log(data))` funkcja ta przyjmuje funkcję określającą co chcemy zrobić z otrzymanymi danymi- np. console.log a może gdzieś je przesłać