# Tips & tricks, użyteczne metody

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


