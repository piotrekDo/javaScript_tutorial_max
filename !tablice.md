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

- **`pop`** usuwa ostani element z tablicy, nie wymaga argumentu. Zwraca usunięty element, można przypisać do zmiennej.

- **`shift`** usuwa pierwszy element z tablicy, nie wymaga argumentu.


Dodawanie elementów na index wykraczający poza obecną długość tablisy spowoduje powstanie obiektów `undefined`. Jeżeli mamy tablicę 2-elementową i dodamy coś na index 5, pola 2,3,4 będą `undefined`.

### Metoda splice()
przyjmuje 2 lub więcej argumentów. Pozwala między innymi wstawiać elementy między inne elementy. Pierwzym argumentem jest index, na którym zaczynamy, drugi to ilość elementów, które chcemy usunąć. Następnie przekazujemy obiekty, które chcemy wstawić:
`array.splice(0, 0, 'Some value')` - wstawi obiekt na początek tablicy, pozostawiając inne. Zadziała jak `shift`.  
`array.splice(1, 0, 'Some value')` - wstawi obiekt jako drugi, pozostawiając pierwszy i przesuwając kolejne o jeden index dalej.  
`array.splice(0, 1)` spowoduje usunięcie pierwszego elementu. Zaczynamy na indexie 0 i usuwamy jeden element.  
`array.splice(0)` usunie wszystkie elementy. Brak przekazania drugiego argumentu ozncza długość tablicy! wywolanie z argumentem `splice(1)` pozostawi tylko pierwszy element, usuwając pozostałe.  
  
Metoda `splice` zwraca tablicę z usuniętymi elementami. Jako pierwszy argument można przekazać liczbę ujemną. Wówczas wyznaczamy index od końca. Argument '-1' oznacza ostatni index.

### Splice- zaznaczanie i kopiowanie tablicy.


