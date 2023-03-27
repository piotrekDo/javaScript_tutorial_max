# Żądania HTTP w JavaScript - Fetch API
Niewspierane przez IE, zawiera funkcję `fetch()` pozwalającą wykonywać zapytania HTTP. Zwraca _Promise_. Przyjmuje kilka argumentów. Samo zwrócenie `fetch` może powodować problemy. Należy zwracać 
```
return fetch(url).then(response => response.json())
```
Aby przekonwertować stream na JSON(?)
istnieją rónież `response.text()`, `response.blob()` mapujące zwrócone dane na inne formaty.  

Promise zwraca reject tylko w przypadku błędów sieciowych. **Nie zwraca** reject dla będów typu _404_. Te należy obsługiwać ręcznie. 

Przyjmuje tylko dwa argumenty:
- url
- opcje **jako obiekt**
Najważniejsze z opcji to _method_, _headers_, _body_ [więcej na MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

```
fetch(url, {
    method: "GET",
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'inne headery po przecinku':  'wewnątrz obiektu'
    }
  })
```

## Fetch- errory
Fetch nie rozpoznaje typowych odpowiedzi z serii 4xx czy 5xx jako błędy i nie zostają one przechwycone przez `catch`. Należy je więc ograć w _ifologii_ sprawdzając status odpowiedzi. Ważny jest return, inaczej 'zewnętrny' catch nie przechwyci błędu 
```
else {
    return response.json().then(errData => {
        console.log(errData);
        throw new Error("Something went wrong - server-side.");
    });
    }
```

Przykład fetcha z obsługą error:

```
function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: data,
  })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then(errData => {
          console.log(errData);
          throw new Error("Something went wrong - server-side.");
        });
      }
    })
    .catch(error => {
      console.log(error);
      throw new Error("Something went wrong!");
    });
}
```

## JSON Data & Parsing Data
JSON.parse() służy do zamiany tekstu w obiekty.
