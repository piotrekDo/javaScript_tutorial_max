# Więcej o number
**Każda** liczba w JS jest zmiennoprzecinkowa. Wartość '5' jest przechowywana jako '5.0'. Przechowywane w 64bitach co ocpowaida long w Java. `Number.MAX_SAFA_INTEGER` zwraca maxymalna liczbe Int

## Float point precision

JS dziala oczywiscie na systemie binarnym, liczby przekonwertowane dadzą taki kwiatek:
```
0.2 + 0.4 -> 0.6000000000000001
0.2 + 0.4 === 0.6 -> FALSE!
```
w efekcie 0.2 = 1/5 w systemie binarnym otrzymamy
```
(1/5).toString(2) || (0.2).toString(2) da w orpowiedzi:
0.001100110011001100110011001100110011001100110011001101
```
Podobna sytuacja ma miejsce w systemie dziesiętnym, gdzie 1/3  =0,3333333333333333333333333333333333...

Rozwiązaniem może być metoda `.toFixed(liczba_miejsc_po_przecinku)` np.
`(0.2 + 0.4).toFixed(2)` da w rezultacie '0.60'

## BigInt
Tworzone z dopiskiem 'n' na końcu `9151561561651561561561561651651561656n` Operacje artmetyczne wykonuje sie w taki sam sposob co na liczbach, nie mozna jedynie mieszac typów: `4324n - 15` będzie błędem. Można tworzyć BugInt przez konstruktor `4324n - BigInt(15)` taki zapis zadziała


# String

## Tagged Templates

Potrafi przetwarzac podany string, i zwrócić z niego obiekt jak poniżej. Zakomentowany kod pozwalałby zwrócić wiadomość string, z dynamicznymi częściami. `tagged template` posiada charakterystyczne wywołanie z `` 
```
function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'pretty cheap regarding its price';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${
  //   strings[2]
  // }`;
  return {name: productName, price: productPrice};
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);
```

## Regex
Zapisywane wewnątrz 2 ukośników: `const regex = /wyrażenie/`. Regex sprawdzamy metodą `test()` do której przekazujemy sprawdzany string. Zwraca true/false. Metoda `test` sprawdza czy text ZAWIERA regex, nie czy jest 1:1, `regex.exec(some_string)` zwraca tablice z informacjami, w którym miejscu mamy trafienie itp. 
```
const regex = /^\S+@\S+\.\S+$/   wyrażenie sprawdzające mail
regex.test(some_string)
```