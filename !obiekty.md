# Obiekty w JavaScript

Podstawowa struktura danych w JS, działa jak mapa przyjmując wartośći klucz:wartość. Tworzenie obiektu 'w locie', poprzez `{}` nazywamy **literałem**. Funkcje zawarte w obiekcie nazywamy metodami.
`    const person = {
    name: "Max",
    age: 30,
    hobbies: ["sport", "cooking"],
    greet: () => alert("hi there"),
    };
   `

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

## Spread operator- ...

Podobnie jak w przypadku tablic, obiekty również możemy 'klonować' z pomocą operatora '...'. Zachodzi ponownie problem 'deep clone'. Dla przykładu

```
const person = {
    name: 'Max',
    age: 30,
    hobbies: ['sport', 'cooking']
}
```

Kopiowanie: `const person2 = {...person}` **nie sprawi**, że tablica zawarta w `person` również zostanie skopiowana. Wszystkie zmiany wewnątrz niej, poprzez referencję `person` będą miały odzwierciedlenie dla obiektu z referencją `person2` i odwrotnie! **Dane skopiowane przez ... można nadpisywać** po przecinku jak poniżej:

```
const person3 = {
    ...person,
    age: 99,
    hobbies: [...person.hobbies]
}
```

zostanie skopiowana również tablica hobby a także **nadpisana** wartość dla `age`.

## Kopiowanie poprzez Object.assign()

Przyjmuje conajmniej 2 argumenty. Pierwszym jest docelowy 'produkt', najczęściej obiekt, kolejnymi są obiekty z których kopiujemy np `const person4 = Object.assign({}, person)` zamiast '{}' możemy przekazać inny, istniejący już obiekt. **Wykonuje płytką kopię**.

## Destrukturyzacja obiektu

Zapisujemy z klamrami, nie nawiasami kwadratowymi jak w tablicach, nazwy pochodzą od klucza, nie możemy definiować własnych. W tablicach decyduje kolejność wyrażona indexami, tutaj trzeba się odwoływać do nazwy klucza:

```
const { info } = movie
```

Własne nazwy możemy przypisywać po dwukropku

```
const { name: newName } = movie.info;
```

## Sprawdzanie propsa

Możemy sprawdzić czy obiekt posiada props przez słowo `in` w składni nazwa_propsa `in` referencja_obiektu:

```
if('info' in movie) {
    ...some logic
}
```

Negacja, koniecznie z nawiasami:

```
if(!('info' in movie)) {
    ...some logic
}
```

Można również sprawdzić za pomocą porówniania do `undefined` lub jako _truthy falsy_.

## Słowo this

- **_wewnątrz funkcji_** odwołuje się do miejsca w którym funkcja została wywołana. Zastosowane w _metodzie_ odniesie się do samego obiektu:

    ```
    const movie = {
        info: {
            title: 'Example 2',
            extra: 'extraValue',
        },
        id: Math.random(),
        getFormattedTitle: function() {
            return this.info.title.toUpperCase();
        }
    }
    ```
    `return this.info.title.toUpperCase();` oznacza pole title z samego obiektu