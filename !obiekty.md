# Obiekty w JavaScript

Podstawowa struktura danych w JS, działa jak mapa przyjmując wartośći klucz:wartość. Tworzenie obiektu 'w locie', poprzez `{}` nazywamy **literałem**. Funkcje zawarte w obiekcie nazywamy metodami.
    ```
    const person = {
    name: "Max",
    age: 30,
    hobbies: ["sport", "cooking"],
    greet: () => alert("hi there"),
    };
    ```

### Właściwościami obiektu można manipulować po jego utworzeniu
Można dowolnie dodawać, usuwać właściwości obiektu, bez potrzeby przypisywania nowego obiektu do zmiennej. Wystarczy dopisać prop po kropce i go zainicjować. 
```
person.isAdmin = true;
console.log(person.isAdmin);
```

Chcąc usunąć property stosujemy słowo `delete`:
```
delete person.age
```
Wówczas `console.log(person.age)` zwróci **undefined**
Nie powinno się ustawiać property na `undefined`, zamiast tego lepiej zastosować `null`. Undefined jest wartością domyślną, oznaczającą, że coś nie istnieje, null to 'reset' propsa, pisany celowo przez programistę. 

### Nazwy propsów
Odzwierciedlają nazwę zmiennych, pozwalają jednak na więcej swobody. Można na przykład zapisać nazwę key ze spacją, albo '-' co nie zadziała w przypadku deklaracji zmiennej. **Można zapisać ją jako String**: `"first name": "Max"`. Pojedyńczy lub podwójny cudzysłów nie ma znaczenia. 
Możemy dostać się do takich specalnych propsów poprzez nawias kawadratowy '[]', podobnie jak w tablicach, zamiast indexu wpisujemy nazwę propsa:
```
const person = {
    'first name': 'Max'
};
console.log(person['first name']);
```

**Dynamiczne ustawianie propsów**
Można wykorzystać nawiasy do dynamicznego ustawiania **klucza**, nie wartośći. Nieznaną nazwę klucza umieszczamy w nawiasie kwadratowym, w którym zapisujemy nazwę zmiennej, do której przypisana zostanie rzeczywista nazwa klucza. Można założyć, że nazwa ta zostanie wprowadzona przez użytkownika: 

```
const userChosenKeyName = 'level';

let person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['sport', 'cooking'],
    [userChosenKeyName]: 'something'
}
```