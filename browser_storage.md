# Local Storage i ciastka
**Local storage** i **session storage** przechowuje wartości klucz:wartość. Można się do niego dostać tylko poprzez JS. Z uwagi na typ danych nie nadaje się do przechowywania złożonych danych  
**Ciastka** rónież klucz:wartość. Można ustawiać im czas wygaśnięcia, czego nie da się zrobić na localstorage. Można nimi zarządzać z JS. Trudniejsze w obsłudze niz LS. Można je wysyłać z żądaniami HTTP. 
**IndexedDB** client-side database. 

Dostęp do localStorage dostajemy poprostu wywołując `localStorage.xxx()`
- setItem() pozwala dodać wpis do LS. `localStorage.setItem('userId', 'id1232432')`
- getItem() pozwala uzyskać wartość dla przekazanego klucza. 
Obiekty można przechowywać dzięki uprzejmości metody JSON.stringify(obiekt) a następnie JSON.parse() aby go ponownie zmapować na obiekt. 

Dla odróżnienia sessionStorage jest wyczyszczone przy ponownym uruchomieniu zakładki/ przeglądarki. Stronę można odświeżać, ale nie zamknąć. 
  
Cookies:  
Widoczne jedynie przez _serwowane_ aplikacje. dostęp poprzez `document.cookie`
`document.cookie = 'some string'` może już dodać ciastko. Działa jak setter. 
Można utawić wiele takich ciastek, będą rozdzielone przecinkiem. Jednak chcąc je odzyskać pobieramy wszystkie. 
`const cookieData  = document.cookie.split(';')` pozwala uzyskać tablicę
```
cookieData.map((c) => {
    return c.trim();
})
```

Dla ciastek można przypisywać czas po którym mają wygasnąć, czas ten przypisujemy w sekundach, dopisując `max-age` po średniku. Ciastka domyślnie są sesyjne. Zamiast max-age można zapisać expires przyjmujące datę. 
`document.cookie = "userId= user432; max-age=60"`
