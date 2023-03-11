# Boolean
W JavaScript możemy porównywać wartości poprzez podwójne i potrójne '='. 
`==` oraz `!=` sprawdza róność wartości.  
`===` oraz `!==` sprawdza równość wartości **oraz typów**.
Róznica zachodzi przy porównaniu 1 z '1' czyli liczby ze Stringiem. podwójne == zwróci true, potrójne false, ponieważ nie zgadza się typ. W nowoczesnym JS zastosowanie podójnego = spada do minimum i jego stosowanie uważane jest za złą praktykę. 

# Porównania obiektów i tablic
Porówania obiektów, wyglądających identycznie przez podójne i potrójne = zwóci false. Zachownie podobne do Java. Taka sama sytuacja wystąpi przy porównaniu tablic. Dwie tablice zawierające te same dane, w identycznej kolejności zwrócą false. 

# Truthy oraz Falsy
JavaScript może działać warunkowo z obiektami i zmiennymi. W typ przypadku zprawdzamy czy wartość jest zainicjowana. Jeżeli wartość jest nullem lub undefined otrzymamy false. Zero jest traktowane jako false. 

### Bang operator: !!
zapisując przed wartością truthy albo falsy dwa wykrzykniki, możemy tę wartość przekonwertować na boolean

## Switch
Podobnie jak w Java stosowany do obsługi wielu opcji. Operator Switch korzysta z potrójnego =. Wymaga zapisu `break` po każdej opcji. W przeciwnym razie wykona **wszystkie** case poniżej. Na końcu powinien zawierać blok `default`.
```
switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK: 
        logEntry.target = 'MONSTER';
        break;
    case LOG_EVENT_MONSTER_ATTACK:
        logEntry.target = 'PLAYER';
        break;
    default: 
        logEntry = {};
}
```

# Pętle
W JavaScript wyróżniamy 4 rodzaje pętli:
- `for` podstawowy rodzaj pętli z licznikiem, zwyczajowo inkrementowanym po każdym wykonaniu ciała pętli. Zapisywana z użyciem słowa kluczowego `for`:
    ```
    for (let i = 0; i <10; i++){
        console.log("lol");
    }
    ```
- `for-of` wykonuje się dla każdego elementu w tablicy. Zapisywana ze słowem kluczowym `for`. Nie posiada warunku, zapisywana w odniesieniu do tablicy:
    ```
    for (const element of array) {
        console.log(element);
    }
    ```
    działa również ze String, iterując każdy znak ciągu.
- `for-in` służy do iterowania obiektów. W JS każdy obiekt jest mapą klucz:wartość
    ```
    for (const key in obj) {
        console.log(key);
        console.log(obj[key]);
    }
    ```
- `while` wykonuje się tak długo jak spełniony jest przekazany warunek.
    ```
    while (isLoggedIn) {
        ...
    }
    ```
    Istnieje również wariant pętli do-while:
    ```
    do {
        ...
    }while(isTrue);
    ```

#### Labeled Statements
Pętle i inne wyrażenia w JavaScript możemy oznaczać nazwą. Do nazw tych można odnosić się dzięki słowom `break` oraz `continue`. Pozwala to np. wewnątrz zagnieżdzonej pętli zatrzymać pętlę zewnętrzną
```
let i = 0;
outherWhile: do {
    console.log('outer', i);
    innerLoop: for(let j = 0; j < 5; j++) {
        if(j === 3) break outherWhile;
        console.log('inner', j);
    }
    i++;
} while(i < 3);
```
wewnątrz pętli for przerywamy działanie pętli do-while. 

# Obsługa wyjątków - try/catch i definicja własnych

### Wyrzucanie własnych wyjątków
Wyjątki zostają rzucane z pomocą słowa `throw` **bez `new`** jak w Java. Wyjątkiem może być wszytko- liczba, string czy dowolny obiekt. Często jest to obiekt z polem *message*.  

```
function getMaxLifeValues() {
  const enteredValue = prompt("Max life", "100");
  const parsedValue = Number.parseInt(enteredValue);
  if (isNaN(parsedValue) || parsedValue > 0) {
    throw { message: "Invalid user input, not a number" };
  }
  return parsedValue;
}
```

### Try/catch
Bloki try powinny być możliwie najmniejsze. W przeciwieństwie do Java, w JS nie ma możliwości zdeiniowania konkretnego typu wyjątku przechwytywanego w ramach catch. `error` w poniszym przykładzie to referencja do której możemy się odnieść i np. wyprintować `error.message`. Możliwe jest zastosowanie bloku `finally`. Można zapisać też blok try z finally, bez catch.
```
let chosenMaxLife;
try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
}
```