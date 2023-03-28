## NPM zarządzanie w projekcie
wewnątrz katalogu projektu `npm init` Przeklikujemy pytania od NPM i na koniec mamy plik

```
{
  "name": "modules",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Pioter",
  "license": "ISC"
}
```
Dodajemy nowe pakiety jako `npm install --save-dev` dopis save dev oznacza ze pakiet jest koneiczny przy dev, w produkcji nie zostanie uwzgledniony. Npm przechowuje pliki w _node\_modules_ którego nie ruszamy. 

## ESLint
Sprawdza jakość kodu, pozwala ustalić zasady jak line brak, semicolon i inne. Zasady można usunąć z pliku `.eslintrc.js` z obiektu `rules`
Dodawane przez NPM `npm install --save-dev eslint` Wewnątrz VSC `CTRL SHIFT P` wpisac `eslint` i wybrac ESLint: Create ESLint Configuration. **LEPIEJ** wpisac `eslint --init` w terminalu, VSC powodowało problemy. 

## Webpack
Boundling tool, kompresuje pliki 
`npm install --save-dev webpack@4 --save-exact` (w razie problemow???)
Webpack instalujemy poprzez `npm install --save-dev webpack webpack-cli` jest to sam webpack + CLI