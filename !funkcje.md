# Funkcje w JavaScript

## Podsumowanie zapisu funkcji

Zapis domyślny

```
const add = (a, b) => {
    const result = a + b;
    return result; // like in "normal" functions, parameters and return statement are OPTIONAL!
};
```

Krótki zapis, z jednym parametrem

```
const log = message => {
    console.log(message); // could also return something of course - this example just doesn't
};
```

Zapis bez parametrów

```
const greet = () => {
    console.log('Hi there!');
};
```

Zapis jednolinijkowy

```
const add = (a, b) => a + b;
```

Zapis zwracający obiekt bez słowa return. Nawias okrągły jest potrzebny, zwyczajne klamry oznaczają ciało funkcji.

```
const loadPerson = pName => ({name: pName });
```

Funkcje stanowią 'kod na żądanie' agregując fragmenty kodu, które mogą się powtarzać lub działać nieco inaczej, zwracać różny wynik przy tej samej logice przyjmując różne **argumenty**. W definicji metody możemy zapisać **parametr** jako wartość zmienną, stosowaną w logice funkcji. **Argument** to konkretna wartość, przekazana do metody przy jej wywołaniu. Można powiedzieć, że funkcja przyjmuje _jakiąś liczbę_ co jest parametrem, natomiast przekazanie '5' to argument.

**Funkcje vs metody**  
W JavaScript funkcja będąca _property_ obiektu nazywana jest **metodą**.

```
const person = {
    greet: function greet() {
        console.log('Hello there');
    }
};

person.greet(); -> da w rezulatacie wydruk Hello there
```

**Funkcja jest obiektem!** są specjalnym rodzajem obiektu z predefiniowanymi polami.

## Function declaration vs Function expression

Funkcje mogą bycć przypisywane do zmiennych:

```
const start = function startGame() {
    console.log('Game start');
};
```

Wówczas należy odwołać się do nazwy zmiennej, nie do nazwy funkcji. W takim przypadku zbędna jest nazwa funkcji. Wystarczy zapis `function() {...}`. Jest to **funkcja anonimowa**. Taki zapis jest **wyrażeniem- function expression**. Standardowy zapis funkcji:

```
function multiply(a, b) {
    return a * b;
}
```

nazywamy **deklaracją funkcji- fuction declaration**. Istnieje tutaj różnica w przechowywaniu funkcji wewnątrz pamięci. W przypadku deklaracji zachodzi _hoisting_- funkcja zostaje wyniesiona na szczyt skryptu, funkcja jest dostępna w ramach całęgo skryptu. W przypadku wyrażenia, _hoisting_ również zachodzi, ale nieco inaczej. Zmienna będzie zainicjowana jako `undefined` do etapu w skrypcie gdy zostaje faktycznie zapisana. Wywołanie funkcji zapisanej jako wyrażenie nie możemy jej wywołać powyżej.

## Funkcje anonimowe

Funkcje anonimowe nie posiadają nazwy, można ich uzywać przy deklarowaniu funkcji przy zmiennej lub lokalnie, np. jako argument metody:

```
someButton.addEventListener('click', function(){...});
```

## Funkcje strzałkowe

Pozwalaja na skrócenie zapisu, podbnie jak lambda w Java.

```
const someFunction = (a, b) => a + b;
```

Przy zapisie jednolinijkowym nie potrzebujemy słowa `retun` ani klamer. Zapis z jednym argumentem pozwala nie zapisywać nawiasu okrągłego `arg => {...}`.

## Domyślne argumenty funkcji
JavaScript przyznaje wartośći domyślne dla parametrów, dla których nie przekazujemy argumentów. Jeżeli wywołamy funkcję oczekującą dwóch argumantów przekazując jeden, w miejsce drugiego zostanie dopisana wartość domyślna, program nie zwróci błędu. 

## Rest operator
Odpowiednik varargs, pozwala przekazac dowolna liczbe argumentów i polega na zapisaniu nazwy parametru poprzedzonego trzema kropkami. Tak samo jak w Java, rest operator musi byc ostatnim parametrem i nie można zdefiniować wielu rest operators dla jednej funkcji. 
```
const sumUp = (...args) => {
    let sum = 0;
    for (const num of args) {
        sum += num;
    }
    return sum;
}
```

## Callback
Callback to funkcja przekazana jako argument innej funkcji. Funkcji takiej nie wywołujemy z zapisaem '()'.

## Funkcja bind()
Pozesls ns przekazanie argumentów do metody, bez jej wywołania. Na przykład w sytuacji, gdzie chcemy przekazać funkcję jako argument, ale ona sama wymaga argumentów. Mtoda bind przyjmuje dwa argumenty= this(?) i drugi to rest operator pozwalający przekazać dowolną liczbę argumentów, zgodnie z funkcją. 


[MDN funkcje](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)  
[MDN Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)