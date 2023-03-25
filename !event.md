# Event
Kod wykonujący się na jakieś zdarzenie, niekoniecznie klikniecie czy hover. Można nasłuchiwać końca video i innych mediów.
Eventy można nadawać na elemencie HTML np onClick, nie jest to jednak podejście rekomendowane. 
`<button onClick="alert('hello')">Click me</button>`

Można nadawać wiele `eventListener`, istnieje też metoda `removeEventListener` służąca usuwaniu listenerów. Ważne aby do remove przekazać identyczny zestaw- trigger i nazwę funkcji handlera. W przypadku funkcji anonimowych takie podejście nie zadziała. Dlatego warto przypisywać funkcje do zmiennych. W przypadku handlerów z bind również nie zadziała. Tak samo należy przypisać funkcję handlera do zmiennej
```
const boundFn = buttonClickHandler.bind(this);
button.addEventListener('click', boundFn);
button.removeEventListener('click', boundFn);
```

Handler przyjmuje domyślnie argument w postaci samego eventu, który funkcję wywołał. Poprzez props `event.target` można się odwołać do elementu na którym zdarzenie zotało wywołane- w tym przypadku ustawiamy atrybut `disabled` na przycisku po jego kliknięciu
```
const buttonClickHandler = event => {
  event.target.disabled = true;
  console.log(event);
};
```

## Bubbling & Capturing
Dwue fazy wykonywanie listnera. Button zagnieżdzóny w div, a ten w section. Capturing to faza sprawdzania czy na section/div sa umieszczone listnery- uruchomią się pirwsze, bubbling to odwrotna sytuacja. Wykonanie buttona a następnie innych listenerów po drodze w górę. Domyślnie działa bubbling. 
```
div.addEventListener('mouseenter', event => {
  console.log('CLICKED DIV');
  console.log(event);
});

button.addEventListener('mouseenter', event => {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
});
```
W pierwszej kolejności pojawi się wydruk `CLICKED BUTTON`, następnie `CLICKED DIV`.

Event listener przyjmuje trzeci argument, domyślnie false oznaczający czy event 'bierze udział' w *capturing faze*
```
div.addEventListener('mouseenter', event => {
  console.log('CLICKED DIV');
  console.log(event);
}, true);

button.addEventListener('mouseenter', event => {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
});
```
Przy powyższym zapisie pierwszy uruchomi się litener z DIV, następnie z buttona. 

### Event propagation
metoda `event.stopPropagation()` powstrzyma przechwytywanie tego eventu w powyższych i nie zadziała tutaj bubbling ani capturing

```
button.addEventListener('mouseenter', event => {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
});
```
dodatkowo, metoda `stopImmediatePropagation()` powstrzyma inne listenery zapisane na tym samym elemencie 

## Event delegation
Pozwala zapisać jeden listener zamiast wielu. W sytuacji, gdzie mamy wiele elementów `li` wewnątrz `ul` musielibyśmy pisać event osobno dla każdego elementu `li` Dzięki propagacji zadziała nam kliknięcie w dowolny element znajdujący się wewnątrz listy:

```
list.addEventListener('click', function(event) {
  event.target.closest('li').classList.toggle('highlight');
});
```

Odowłanie do `event.currentTarget` wywołałoby faktyczną listę zamiast elementu.