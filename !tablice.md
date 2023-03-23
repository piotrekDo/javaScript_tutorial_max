# Tablice, Mapy, Zbiory

"Iterable" obiekt, implementujący `iterable`. Obiekt na którym możemy wykorzystać pęltę **for-of**.
Obiekty `Array-Like` to obiekty posiadające własność `length` oraz korzystające z indexów w celu dostępu do danych. Przykładami mogą być NodeList czy HTMLCollection. **String również!**, można iterować po znakach ciągu. 

## Tworzenie tablic
- ***`const arr = [1]`***- domyślne podejście na tworzenie tablic. Dane rozdzielane przecinkami. 

- ***`const arr = new Array(1)`*** - przez konstruktor. Zwraca nową tablicę, argument '1' oznacza wartość, nie długość. Można przekazać dowolną ich ilość. Tak samo zadziała to ze String czy innymi wartościami. **W przypadku pojedyńczej wartośći liczbowej zwrócona zostanie pusta tablica o x długości** `new Array(5)` zwróci pustą tablicę o długości 5.

- ***`const arr = Array(1)`*** działa identycznie jak ze słówkiem `new`.

- ***`const arr = Array.of(1)`*** metoda przyjmująca argumenty z których tworzy tablicę.

- ***`const arr = Array.from()`*** metoda faktycznie użyteczna, przyjmuje obiety *Array-Like* czy inne *iterrable* i konwertuje je do postaci tablicy, udostępniając tym samym więcej metod niż wspomniane struktury danych. Przekazanie string `Hi!` zwróci tablicę `['H', 'i', '!']`.
  
  
W przeciwieństwie do Java, tablice mogą przechowywać dane róznego typu. Dopuszcza się mieszanie np. String z Number. Można nawet zagnieżdżać tablice w innych. 

## Tablice - dodwawanie i usuwanie elementów
- **`push`** dodaje nowy element do tablicy, **zawsze na końcu**. Zwraca liczbę całkowitą, reprezentującą nową długość tablicy.

- **`unshift`** dodaje nowy element do tablicy **zawsze na początek**. Zwraca liczbę całkowitą, reprezentującą nową długość tablicy.

- **`concat`** przyjmuje tablicę, której zawartość łączy z tablica na której wywołujemy metodę. **Zwraca nową tablicę** i nie modyfikuje wykorzystanych tablic. 

- **`pop`** usuwa ostani element z tablicy, nie wymaga argumentu. **Zwraca usunięty element**, można przypisać do zmiennej.

- **`shift`** usuwa pierwszy element z tablicy, nie wymaga argumentu. **Zwraca usunięty element**

- **`indexOf`** przyjmuje wartość i zwraca jej index w tablicy. Zwraca -1 jeżeli nie została odnaleziona. Zwraca pierwszą trafioną wartość, nie szuka dalej. **Nie działa dla referencji**. Przekazanie obiektu powoduje tworzenie nowego obiektu, więc porównanie nie zadziała. 

- **`find`** przyjmuje funkcję jako argument. Funkcja ta przyjmuje do 3 argumentów. Pierwszym jest element z tablicy, drugim jest index, trzecim jest cala tablica. 
    ```
    const perstonData = [{name: 'Max'}, {name: 'Manuel'}];
    const manuel = personData.find((person, index, persons) => {
        return person.name === 'Manuel';
    })
    ```
    Zwróci pierwsze trafienie, jezeli potrzebujemy możemy odowłać się do indexu lub całej tablicy, którą przeszukujemy. Zwraca **referencję**, zmiany na niej odbiją się na obiekcie chowanym w tablicy. Nie jest to osobny obiekt.  

- **`findIndex`** działa tak samo jak `find`, zwraca index, zamiast referencji do obiektu


Dodawanie elementów na index wykraczający poza obecną długość tablisy spowoduje powstanie obiektów `undefined`. Jeżeli mamy tablicę 2-elementową i dodamy coś na index 5, pola 2,3,4 będą `undefined`.

### Metoda splice()
przyjmuje 2 lub więcej argumentów. Pozwala między innymi wstawiać elementy między inne elementy. Pierwzym argumentem jest index, na którym zaczynamy, drugi to ilość elementów, które chcemy usunąć. Następnie przekazujemy obiekty, które chcemy wstawić:
`array.splice(0, 0, 'Some value')` - wstawi obiekt na początek tablicy, pozostawiając inne. Zadziała jak `shift`.  
`array.splice(1, 0, 'Some value')` - wstawi obiekt jako drugi, pozostawiając pierwszy i przesuwając kolejne o jeden index dalej.  
`array.splice(0, 1)` spowoduje usunięcie pierwszego elementu. Zaczynamy na indexie 0 i usuwamy jeden element.  
`array.splice(0)` usunie wszystkie elementy. Brak przekazania drugiego argumentu ozncza długość tablicy! wywolanie z argumentem `splice(1)` pozostawi tylko pierwszy element, usuwając pozostałe.  
  
Metoda `splice` zwraca tablicę z usuniętymi elementami. Jako pierwszy argument można przekazać liczbę ujemną. Wówczas wyznaczamy index od końca. Argument '-1' oznacza ostatni index.

### Splice- zaznaczanie i kopiowanie tablicy.

Samo wywolanie metody `slice` zwraca kopię tablicy na której zostało wywołane. Można zaznaczać fragmenty tablicy, przekaując argumenty. Dwa argumenty to indexy start oraz end. **index end nie wlicza się w wyniki**. Wywołanie `splice(0, 2)` zwróci elementy 0,1. Można przekazywać wartoći ujemne, aby zaznaczać od prawej strony. Przekazanie jednego argumentu oznacza index start do końca tablicy. 

## Tablice, programowanie funkcyjne
Dla przykładu:
```
const prices = [10.99, 5.99, 3.99, 5.59];
const tax = 0.19;
const taxAdjustedPrices = [];
```

- ***`forEach`***  zastępuje pętlę for-of, funkcja przyjmuje do 3 argumentów: obiekt_z_tablicy, index, tablica. Uzyskujemy dostęp do indexu, czego nie ma w pętli for of:
    ```
    prices.forEach((price, index, prices) => {
        const priceObj = {index: index, taxAdjPrice: price * (1+tax)};
        taxAdjustedPrices.push(priceObj);
    })
    ```

- ***`map`*** zwraca nowy obiekt, dla każdego w tablicy. Zaraca nową tablicę. Również przyjmuje 3 argumenty:
    ```
    taxAdjustedPrices = prices.map((price, index, prices) => {
        const priceObj = {index: index, taxAdjPrice: price * (1+tax)};
        return priceObj;
    })
    ```

- ***`sort`*** sortowanie domyślnie zamienia wartości na string i porównuje je leksykalnie, dlatego 10 jest mniejsze niż 2- komparator porównuje pierwszy znak. Funkcja przyjmuje 2 argumenty oznaczające 2 obiekty z tablicy.
    ```
    const sortedPrices = const sorted = prices.sort((a, b) => {
        if (+a > +b) return -1;
        else return 1;
    });
    ```

- ***`reverse`*** odwraca kolejność w tablicy.

- ***`filter`***  zwraca nową tablicę, przyjmuje 3 argumenty: obiekt_z_tablicy, index, tablica i musi zwrócić true/false

- ***`reduce`*** funkcja przyjmuje argumenty: prev_value, current_value, index, tablica. Najczęściej operujemy na 2 pierwszych w celu skumulowania wyniku. Jako drugi argument **metody reduce** możemy przekazać wartość początkową. W ciele funkcji zwracamy uaktualnioną wartość na daną iterację:
    ```
    const sum = prices.reduce((prevValue, nextItem, curIndex, prices) => {
    return prevValue + nextItem.value;
    }, 0);
    ```

- ***`split i join`*** metody wykorzystywane na String.
    metoda split zwróci tablicę z elementami rozdzielonymi separatorem przekazanym jako argument. 
    ```
    const data = 'new york;10.99;2000'
    const transformedData = data.split(";"), opcjonalny_limit;
    ```
    metoda join zwróci znak, domyślnym argumentem jest przecinek
    ```
    const nameFragments = ['one', 'two'];
    const result = nameFragments.join(" ");
    ```

## Spread operator- ...
Operator trzech kropek 'wyciąga' dane z tablicy. Nie możemy ich przypisać do żadnej zmiennej, nie miałoby to sensu. Może być przydatne przy kopiowaniu tablicy. 

Poniższy przykład pokazuje jak **nie kopiować** tablicy. Wówczas uzyskamy tablicę jednoelementową z zagnieżdżoną tablicą:
```
const nameFragments = ['one', 'two'];
const notCopied = [nameFragments]
```

Zamiast tego można wykorzystać operator '...'
```
const copiedArray = [...nameFragments];
```

Innym przykładem mogą być funkcje, wymagające przekazania wielu argumentów, ale **nie w postaci tablicy** np.
```
const prices = [10.99, 5.99, 3.99, 5.59];
Math.min(...prices)
```
w przypadku gdy do funkcji `min` przekażemy tablicę `prices` w wyniku otrzymamy NaN.

### Kopiowanie tablic z obiektami

W poniższym przykładzie kopiujemy tablicę jako nową i następne zmiany na referencji `persons` nie będą miały odbicia na `copiedPersons` ale należy pamietać, że jest to tablica **referencji**. Zatem dalsze zmiany na jednym z obiektów zawartych w `persons` zmienią **ten sam** obiekt w tablicy `copiedPersons`.
```
const persons = [{name: 'Max', age: 30}, {name: 'Manuel', age: 31}, {name: 'Anna', age: 29}];
const copiedPersons = [...persons];

persons[0].age = 99;  <------------- ZMIANA DOTYCZY ROWNIEŻ OBIEKTU W SKOPIOWANEJ TABLICY
```

Chcąc wykonać 'głęboką' kopię i skopiować również zawarte obiekty można wykonać trick
```
const copiedPersons = [...persons.map(person => ({name: person.name, age: person.age}))];
```

Wykorzystujemy metodę `map` aby utworzyć obiekt na podstawie poprzedniego. 

### Destrukturyzacja tablicy
Stanowi uproszczenie do przypisania elementów tablicy do zmiennych, dla przykładu:
```
const nameData = ['Max', 'Schwarz', 'Mr', 30];
```

Można przypisać 'ręcznie' do zmiennych:
```
const firstName = nameData[0];
const lastname = nameData[1];
```

Zamiast tego można zastosować **destrukturyzację tablicy**
```
const [firstName, lastName, ..otherInfo] = nameData;
```

Wówczas w 'tablicy z nazwami' nadajemy nazwy do kolejnych elementów tablicy. I do tych nazw mozemy odwołać się w kodzie, tak samo jak do zmiennych. Do nazwy `otherInformation` można przypisać tablicę z pozostałymi danymi.


## Sety w JavaScript
W odróżnieniu od tablic, zbiory nie gwarantują zachowania kolejności i zapewniają unikalnośc elementów- nie dopuszczają duplikatów. Zbiory tworzymy **wyłącznie** poprzez konstruktor `const ids = new Set()` tak utowrzony set bedzie pusty, do konstruktora można przekazać inną strukturę danych, np. tablicę. Dostęp do danych uzyskujemy poprzez iteracje, posiada metodę `has` przyjmującą obiekt i zwraca true/false. Nie posiada metody `get`. Przy iteracji działa jak mapa. Iterujemy po obiektach uzyskanych za pomocą metody `entries`
```
for (const entry of ids.entries()){
    console.log(entry)
}
```
w rezultacie daje tablice dwuelementowe w postaci [klucz, wartosć]. Klucze są **wartościami**. Set to pod maską mapa i w taki sposób zapewnia brak unikatów- klucze muszą być unikalne. Można również iterować po danychzwróconych z metody `values()` Dane usuwamy z pomocą metody `delete(obiekt)`.

Istnieje również `new WeakSet()`, może przechowywać tylko obiekty, nie liczby i nie string. Różni się tym, że nie kopiuje(?) referencji do obiektu. Jeżeli przechowujemy w zbiorze obiekt, który ustawimy na null. Nie zostanie on usunięty jeżeli jest on częścią zwykłego zbioru, w przypadku WeakSet obiekt ten zostanie usunięty przez garbage collector. 

## Mapy
Przechowują pary wartośći klucz:wartość. Obiekty w JS również są mapami z tą różnicą, że obiekty mogą posiadać klucze jedynie w postaci string lub number, mapy mogą miecz klucze zdefiniowane z jakiegokolwiek obiektu, nawet z tablic. Nie gwarantują kolejności, klucze nie mogą się duplikować, wartości tak. Mapy tworzymy przez konstruktor `const data = new Map()` dane pobieramy metodą `get(klucz)`, dodajemy metodą `set(klucz, wartość)`.
Można iterować po `map.entries()`, `map.values()`, `map.keys()`. Przy okazcji mapowanie po `entries` można zastosować destrukturyzację:
```
for (const [key, value] of someMap.entries()) {
    console.log(key, value);
}
```

Istnieje również `WeakMap` spełniający te same założenia co WeakSet. 