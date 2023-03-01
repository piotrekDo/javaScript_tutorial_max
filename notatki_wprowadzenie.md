# JavaScript
Dynamiczny język, słabo typowany. Kompilowany w runtime. Został stworzony aby uczynić strony internetowe dynamicznymi. Dawniej nazywany *Live Script*, przemianowany z uwagi na popularność Java. 

## Jak wykonywany jest JavaScript
Działa we wbudowanym w przeglądarkę *JavaScript Engine* (np. dla Chrmoe będzie to V8), który odczytuje kod i w locie kompiluje do kodu binarnego. Nowsze silniki potrafią wykonywać kod maszynowy częściowo przed skompilowaniem całośći kodu aby przyśpieszyć proces. Wykonanie kodu JavaScript odbywa się w jednym wątku. 

JavaScript jest dynamiczny, słabo typowany. Zmienne nie mają na stałe przypisanego typu danych i ich rodzaj może się zmienać w ciągu działania programu. Zmienna będąca wcześniej tekstem może zmienić się na zmienną liczbową. Nie musimy deklarować typu danych co oznacza, że są one domyślne, co jest odmiennym podejściem od tego, znanego w Java. Takie **typowanie** nazywane jest **dynamicznym**.

JavaScript można wykonywać również po stronie serwera, bez przeglądarki. Z poziomu działania w przeglądarce JavaScript ma pewne ograniczenia. Dla przykładu z uwagi na bezpieczeństow nie może odowływać się do plików systemowych. Poza przeglądarką JS może działać na silniku V8, nazywanym **Node.js**. Wówczas JS może zostać wykorzystany do tworznia kodu po stronie back-endu. Node.js może zostać uruchomiony do dowolnej maszynie i może uzyskać dostęp do wspomnianych plików systemowych.  

## JavaScript vs Java
JavaScript i Java to dwa osobne języki z różną składnią i zasadami. Poza nazwą niewiele je łączy. JS domyślnie działa w przeglądarce, gdzie nie możemy wykonać kodu Java. Dodatkwo, Java jest silnie typowanym językiem obiektowym, natomast JS jest językiem funkcyjnym, dynamicznym.

## Krótka historia JavaScript
Język został zapoczątkowany w roku 1995 jako LiveScript przez firmę Netscape. Rok później swoją wersję wydał Microsoft do współpracy z Internet Explorer. Później w roku 1996 z uwagi na rozjeżdżające się wersje i rosnące zainteresowanie JavaScript został on poddany standaryzacji ECMA. W latach 1997 - 2005 odbywała się dalsza standaryzacja języka i jego rozwój z niewielkim wsparciem Microsoft. W latach 2006 -2011 nastąpił gwałtowny rozwój języka, już ze wsparciem Microsoft. JavaScript jest implementacją standardu EcmaScript.

## VisualStudioCode i Google Chrome
Do pracy z JavaScript potrzebujemy edytora, środowiska programistycznego. VSC jest wiodącym narzędziem na tym polu, jest darmowy, pozwala na personalną konfigurację z pluginami. Po stronie przeglądarki najlepszym rozwiązaniem jest Google Chrome, oferujący solidne narzędzia deweloperskie.