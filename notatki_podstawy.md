# Podstawy

## Zmienne i stałe
Zmienne służą do przechowywania danych. Deklarujemy je ze słowem `let`. Np. `let userName = 'Pioter';` Do zmiennych można przypisywać nowe dane, nie są one finalne. Do ponownego przypisania danych nie stosujemy już słowa 'let'.

Stałe dla odmiany nie zmieniają już przechowywanych danych. Deklarowane ze słowem `const`. Próba zmiany danych w stałej zakończy się błędem.

Zmienne zapisujemy w konwencji *camelCase*. JS jest case sensitive. Zapis `userName` nie jest równozaczny z `UserName` co odpowaiada obiektom. Nazwy zmiennych mogą zawierać litery i liczby. Dodatkowo znaki $ _. Mogą się od tych znaków zaczynać. Unikamy zapisu w snake_case.
Nazw zmiennych nie możemy rozpocząć od liczb. Zmiennych nie trzeba inicializować przy zapisie.

## Operatory
Operatory pozwalają na manipulację danymi i umożliwiają działania artmetyczne i logiczne.

## Podstawowe typy danych
W JS możemy operować na róznych typach danych jak :
- number: oejmują wszystkie rodzje liczb, zarówno całkowite i zmiennoprzecinkowe.
- String (tekst): typ tekstowy zapisywany w cudzysłowie.

## Więcej o String
Zapis String w pojedyńczych i podwójnych cudzysłowach nie ma znaczenia, ważne jest trzyamnie się jednego rodzaju. Możliwy jest rónież zapis w *backtick `*. Pozwala to na zapis sformatowanego zapisu całego bloku tekstu. Taki zapis pozwala na umieszczanie w ${} referencji do zmiennych czy obiektów. Taki zapis ``template literal`` pozwala uprościć konkatenację.
```
currentResult +=10;
let calculationDesription = `( ${currentResult} + 10)`
```
zapis w backtickach pozala zachować całe formatowanie, łącznie ze znakami przejścia do nowego wiersza. Znaki specjalne escapujemy z pojedyńczym backslashem: \

# Wprowadzenie do funkcji
Funkcje odpowiadają Javowym metodą. Pozwalają zdefiniować fragment kodu, który możemy wykorzystać gdziekolwiek w kodzie dowolną liczbę razy. Kod zapisany w funkcjach **nie wykonuje się odrazu** po zapisaniu funkcji. Funkcję należy **wywołać**.

**Tworzenie funkcji**
Funkcje w JS można zapisać na kilka sposóbów jednym jest zapis od słowa `function` nazwaFunkcji(opcjonalne_parametry){}. W sygnaturze metody **nie zapisujemy** typu zwracanego, nawet jeżeli funkcja nie jest void. Zapisu funkcji nie kończymy średnikiem po nawiasie. Wszystkie zmienne zapisane wewnątrz funkcji **nie są** widoczne dla reszty kodu.
```
function add(num1, num2){
    return num1 + num2;
}
```
funkcję wywołujemy dalej w kodzie odnosząc się do nazwy, przekazując ew. argumenty:
``add(1, 2);``

## Kolejność zapisu kodu
Kod JavaScript jest przetwarzany od góry. Nie możemy się odwołać do zmienniej, która jest zapisana poniżej, podobnie jak w Java. Zasada ta nie dotyczy zapisu funkcji. Mozemy wywołać funkcję zapisaną u dołu strony. Ponownie, tak jak w Java. 

### Wprowadzenie do Scope- Global oraz Local
Zmienne zapisane wewnątrz funkcji są lokalne- dostępne tylko w ramach samej funkcji. Ich sope jest ograniczony nawiasami klamrowymi. Zmienne globalne, zapisane w kodzie **można modyfikować** wewnątrz funkcji. Wywołanie funkcji może zmienić stan zmiennej globalnej. 
```
let result = 0;
function changeResult(){
    result = 12;
}
```
Jeżeli wywołamy funkcję `changeResult`, nadpiszemy wartość dla zmiennej `result`. Nie trzeba do niej przypisuwać wyniku zwracanego przez funkcję. Nie musi ona posiadać słowa `return`.
**NIE JEST TO DOBRE PODEJŚCIE**. Wewnątrz funkcji możemy wywołać też inne funkcje. 