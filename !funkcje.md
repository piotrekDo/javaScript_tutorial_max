# Funkcje w JavaScript
Funkcje stanowią 'kod na żądanie' agregując fragmenty kodu, które mogą się powtarzać lub działać nieco inaczej, zwracać różny wynik przy tej samej logice przyjmując różne **argumenty**. W definicji metody możemy zapisać **parametr** jako wartość zmienną, stosowaną w logice funkcji. **Argument** to konkretna wartość, przekazana do metody przy jej wywołaniu. Można powiedzieć, że funkcja przyjmuje *jakiąś liczbę* co jest parametrem, natomiast przekazanie '5' to argument.  

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
