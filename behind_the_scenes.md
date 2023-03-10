## Pozostale
`'use sctrict';` umieszczony na początku skryptu, lub wewnątrz funkcji uruchamia [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode)

## VAR vs LET

Jedną z większych zmian zachodzących poiędzy ES5 oraz ES6 jest pojawienie się słów kluczowych `let` oraz `const`. W poprzedniej wersji ES zmienne definiowało się jedynie za pomocą słowa `var` co jest w dalszym ciągu możliwe. Róznica między tymi definicjami zachodzi w _scope_ zmiennej/stałej. Zmienne tworzone za pomocą słówka `var` tworzone są w _Function & Global Scope_, nastomiast `let` oraz `const` w _Block Scope_.
W przypadku słowa `let` taki zapis jest niemożliwy i zakończy się błędem

```
let name = "Max";
let name = 'Anna';
```

Nie jest to przeszkoda w przypadku słowa `var`

```
var name = "Max";
var name = 'Anna';
```

W zapisie poniżej zmienna `hobbies` tworzona jest jako zmienna globalna, nie jest częścią funkcji. Dlatego jest dosepna w wewnątrz funkcji, czy w wywołaniu console.log

```
let name = "Max";
if (name === "Max") {
  var hobbies = ["Sport", "Coding"];
}

function greet() {
  let age = 34;
  console.log(name, hobbies);
}

console.log(name, hobbies);

greet();
```

Jeżeli zmienimy ją na `let` dostaniemy błąd, ponieważ wówczas jest to _Block scope_ **ograniczony nawiasami klamrowymi**.

### Scope

**var** działa jedynie globalnie lub wewnątrz funkcji. Zmienna utworzona wewnątrz funkcji może być wykorzystana jedynie wewnątrz tej funkcji, zmienna globalna wszędzie.  
**let / const** działa blokowo, wewnątrz nawiasów klamrowych.

### Inicjalizacja - hoisting
Procesowanie skryptu JS. Na tym poziomie wynoszone sa zmienne `var` a inicjalizowane w miejscu swojego zapisu.
Uruchomienie poniższego kodu zaskutuje wydrukiem `undefined`. W przypadku słowa `let` otrzymalibyśmy błąd.
```
console.log(name);
var name = 'Max';
```

W rzeczywistości, dzięki z uwagi na hoisting zapis wygląda tak:
```
var name;
console.log(name);
name = 'Max';
```
zmienna `name` została wyniesiona na górę skryptu, przez co jest dostępna, ale nie jest zainicjowana. Podobna sytuacja ma miejsce w przypadku funkcji, dzięki temu zapisane gdziekolwiek w skrypcie nie powodują błędów przy ich uruchomieniu. 

## Jak działa JavaScript
Kod zapisany w skrypcie przetwarzany jest przez silnik zawarty w przeglądarce. Silniki te różnią się w zależności od przeglądarki. Składają się one z **Interpreter** oraz **Compiler (JiT)**. Interpretor przekauje bytecode do compilera a ten przetwarza go na kod maszynowy. Dzieje się to pratycznie współbierznie. Silniki stosują kilka technik optymalizacji np. w przypadku kodu, który pozostaje bez zmian. 

### Przestrzeń w pamięci
**Heap** przechowuje dane w pamięci **długotrwale**
**Stack** pamięć krótkotrwała, zarządza przepływem danych w programie takim jak wywołanie funkcji. Która funkcja jest obecnie wykonywana, jeżeli zwraca wartość to do której funkcji. Stack zarządza '_co dzieje się w programie_'.  
  
Drfinicja funkcji przechowywana jest w heap, a wywołanie w stack. Wywołanie to zostaje usunięte ze stack w moemencie, gdy funkcja zakończy swoje działanie. 

### Wartości prymitywne i referencje
Do wartości prymitywnych zaliczamy:
- String
- Number
- Boolean
- null
- undefined
- Symbol

**Przechowywane zwykle w Stack!** wartości te są kopiowane przy przypisywaniu.
```
let name = 'Max';
let anotherName = name;
```
Wartość jest skopiowana. W tej sytuacji gdyby zmienić teraz `name` na inną wartość, `anotherName` nadal zawierać będzie 'Max'.  
  
Do referencji zaliczamy wszystkie inne obiekty. Te przechowywane są zwykle w Heap. Zmienna przechowuje wskaźnik na miejsce w pamięci obiektu. Kopiowwaie takego obiektu nie powoduje stworzenia nowego. Przykładem obiektu może być tablica.
```
let hobbies = ['Sport'];
let newHobbies = hobbies;
hobbies.push('Coding');
console.log(newHobbies) -> wydrukuje ["Sport", "Coding"]
```

Na powyższym przykładnie widać, że skopiowana została jedynie referencja i modyfikacja pierwszej tablicy **ma wpływ** na drugą! Zadziała to również w drugą stronę. Zmiany wprowadzone na referencji `newHobbies` będą miały odzwierciedlenie na referencji `hobbies`. Pozwala to na ewektywniejsze zarządanie pamięcią. Faktyczne kopiowanie można wykonać:
`let yetAnotherHobbies = {...hobbies};`
w taki sposób jawnie tworzymy nowy obiekt poprzez `{ }` i stosujemy specjalny operator `...referencja` co pozwala przekopiować wszystkie własności takiego obiektu do nowego. 

Porównanie referencji poprzez === porównuje jedynie miejsce w pamięci, podobnie jak w Java. 

## Garbage collector i zarządzanie pamięcią
W ramach Heap działą mechanizm usuwający przechowywane tam dane. Usuwa obiekty bez referencji, podobnie jak w Java. Dla przykładu garbage collector zadziała w sytuacji poniżej
```
let person = {name: 'Max'};
person = null;
```
Wówczas obiekt `{name: 'Max'}` zostanie usunięty z pamięci, ponieważ żadna referencja się do niego nie odwołuje. 