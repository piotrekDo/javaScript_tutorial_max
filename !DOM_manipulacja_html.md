# Manipulacja drzewem DOM
Document Object Model- obiektowa reprezentacja dokumentu HTML.

**document vs window** - dwa bazowe obiekty. window to główny obiekt, zawierający w sobie document.

Każdy tag nazwywany jest `element node`, np `<body>` to to *body node*. Obiektowa reprezentacja pozwala stworzyć całe drzewo node. Właściwość `textContent` przechowuje tekst.  

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