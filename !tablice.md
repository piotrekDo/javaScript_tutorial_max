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