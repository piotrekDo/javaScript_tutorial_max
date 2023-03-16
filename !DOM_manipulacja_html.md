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