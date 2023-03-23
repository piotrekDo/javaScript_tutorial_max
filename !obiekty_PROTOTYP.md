# Prototyp obiektu w JavaScript
Prorotyp jest w JS mechanizmem, pozwalającym obiektom na dziedziczenie. Każdy obiekt w JavaScript posiada prototyp pochodzący z Object, dlatego też można na nim wywołać np. metodę `toString()`. Prototypy łączą się w łańcuch oznaczający dziedziczenie. JS szukając metody odowłuje się do prototypów, jeżeli taka metoda nie istnieje w klasie obiektu. ~~Do prototypu odwołujemy się poprzez `referencja.__proto__`. Prototyp obiektu możemy zaś zmienić odwołując się do `referencja.prototype`. Poprzez `x.prototype` zmienimy prototyp już utworzonego obiektu, nie zmieniuy 'domyślnego' dla całego obiektu `User`~~

```
function User() {
    ... // some logic, doesn't matter => configures which properties etc. user objects will have
}
User.prototype = { age: 30 }; // sets prototype object for "to be created" user objects, NOT for User function object
```

```
const userA = new User();
userA.__proto__ === User.prototype; // true
userA.__proto__ === User.__proto__ // false
```

Metody są częścią prototypu i są współdzielone z instancjami klasy, co pozwala zaoszczędzić pamięć. Dlatego nie należy wewnątrz klas przypisywać funkcji do pól.

## Zmiana prototypu, manipulowanie prototypem
Prototyp obiektu można nadpisać np. z wywołaniem metody `Object.setPrototypeOf(referencja, nowyPrototyp)`. Można też dopisać coś do istniejącego prototypu 
```
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function() {
    console.log(`${this.rating}/5`);
  }
});
```
W typ przyapdku pierwsza linia metody jest zbędna, nie da się 'pozbyć' domyślnego prototypu z Object, zostanie od dopisany i tak. 

## Extends
Stosowanie słowa extends przy dziedziczeniu jest równoznaczne z zastosowaniem prototypu, ułatiwa to cały proces. 