# Tips & tricks, użyteczne metody

## Math random
```
function randomIntBetween(min, max) {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}
```

### Metoda pozwalająca odczytać event naciśnięcia klawisza.
Wyświetla alert z key i kodem klawisza.  
```
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed name: ${name} \r\n Key pressed code: ${code}`);
  }, false);
```

Przypisujemy na elemencie **document** dla globalnego efektu, alebo na konkretnym inpucie :
```
const filterInput = document.getElementById('filter-title');

filterInput.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name === 'Enter') filterMoviesHandler();
});
```


### Parsowanie csv
[github](https://github.com/nsebhastian/javascript-csv-array-example)