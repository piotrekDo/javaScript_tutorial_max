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
Webpack instalujemy poprzez `npm install --save-dev webpack webpack-cli` jest to sam webpack + CLI.
Tworzymy plik konfiguracyjny `webpack.config.js` w głównym folderze, tam gdzie pliki package

Zakladamy strukturę proajektu, gdzie pliki .js przechowywane sa w folderze src.
tworzymy plikg, gdzie w `entry` wyznaczamy punkt startowy aplikacji, miejsce w którym zaczynają się importy.
`output` to obiekt w którym z pomocą zależności path ustalamy nazwę jednego, skondensowanego pliku .js oraz jego miejsce
```
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: "assets/scripts/"
  },
};

```

Następnie w package.json definiujemy skrpyt do uruchomienia. Nazwa `build` jest opcjonalna. 
```
{
  "name": "modules",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "Pioter",
  "license": "ISC",
  "devDependencies": {
    "eslint": "^8.36.0",
    "webpack": "^5.76.3",
    "webpack-cli": "^5.0.1"
  }
}
```

uruchamiane w projekcie jako `npm run build` 
W wyniku, w folderze `script` dostaniemy nasz app.js oraz ewentualnie dodatkowe pliki .js jeżeli korzystamy z dynamicznych importów. Samo `entry` może zawierać obiekt, jako że projekt może zawierać wiele miejsc startowych:
```
entry: {
    welcome: './src/welcome-page/welcome.js',
    about: './src/about-page/about.js',
    // etc.
}
```

Webpack domyślnie buduje projekt dla produkcji. Wewnątrz pliku konfiguracyjnego możemy ustanowić np. 'development'
```
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/"
  },
};
```

## Webpack dev server
`npm install --save-dev webpack-dev-server`
w pliku konfiguracyjnym podajemy miejsce naszego dev server
```
module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/"
  },
  devServer: {
    contentBase: "./"
  }
};
```

Póki co jest to jednak wartość domyślna i nie musi zostać zapisana, jeżeli nie zmienamy lokalizacji dev server.

W package.json dopisujemy kolejny skrypt `"build:dev": "webpack-dev-server"` uruchamiamy jako `npm run build:dev`