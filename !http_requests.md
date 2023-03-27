# Żądania HTTP w JavaScript - Fetch API
Niewspierane przez IE, zawiera funkcję `fetch()` pozwalającą wykonywać zapytania HTTP. Zwraca _Promise_. Przyjmuje kilka argumentów. Samo zwrócenie `fetch` może powodować problemy. Należy zwracać 
```
return fetch(url).then(response => response.json())
```
Aby przekonwertować stream na JSON(?)
istnieją rónież `response.text()`, `response.blob()` mapujące zwrócone dane na inne formaty.  

## JSON Data & Parsing Data
JSON.parse() służy do zamiany tekstu w obiekty.
