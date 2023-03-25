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