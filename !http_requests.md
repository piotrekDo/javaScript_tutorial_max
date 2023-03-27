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

## Form data
Prosty interfejs, zawart w JS. Pozwala utworzyć mapę wartośći dodanych do żądania jako body. Pozwala też wysyłać pliki w prosty sposób, nawet w połączeniu z innymi danymi. Przekazując ormularz do konstruktora i stosując atrrybuty name w inputach, FormData będzie w stanie utworzyć obiket na ich podstawie. Zatem pola 
```
  fd.append('title', title);
  fd.append('body', content);
```
Są wóczas zbędne. 

async function createPost(title, content) {
  const userId = Math.random();

  const fd = new FormData(form);
  fd.append('title', title);
  fd.append('body', content);
  fd.append("userId", userId);

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
}

Fetch API automatycznie ustawi header na form data. Nie trzeba też stosować JSON.stringify przy body.
**Należy zwracać uwagę, czy API do którego wysyłamy dane wspiera FORM DATA!!**

[Wysyłanie plików z Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications)

## JSON Data & Parsing Data
JSON.parse() służy do zamiany tekstu w obiekty.

# AXIOS- wstęp
Axios zawiera metody zgodne z nazwami HTTP, np. `axios.get()` czy `axios.post()`

Metoda _get_ przyjmuje tylk URL, wykorzystuje promise, zwraca obiekt zawierający garść informacji: 
- config
- data czyli faktyczne dane uzyskane w odpowiedzi
- headers
- request
- status czyli kod odpowiedzi na żądanie
- statusText

Podobnie wygląda to w przypadku błędu, np. _404_. Dodatkowo w odróżnieniu od _fetch_, Axios traktuje takie kody odpowiedzi jako błąd i wyrzuca wyjątek do przechwycenia w `catche`. 

Metoda POST potrafi rozpoznawać rodzaj przekazanego _body_ i ustanowić odpowiedni nagłówek oraz odpowiednio przekonwertować _body_ na JSON lub inny format. 