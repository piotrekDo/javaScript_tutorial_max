# Security

- **_XSS_** Cross-Site Scripting Attacks: 
Złośliwy kod wstrzyknięty do JS. Pakiet [sanitize](https://www.npmjs.com/package/sanitize) pomaga uniknąć takich problemów. Zagrożeniem jest stosowanie `innerHTML`
- **_CSRF_** Cross-Site Request Forgery polega na wykorzystaniu ciasteczek na ściemnionych stronach. Klikamy w link, prowadzący do atrapy strony podszywającą się pod naszą a ta uzyskuje dostęp do ciastek i wykorzystuje dane w nich zawarte. Problem po stronie serwera, nie przeglądarki. Można w taki sposób ukraść token do autoryzacji.  
- **_CORS_** Cross-Origin Resource Sharing blokuje żądania wychodzące na inny serwer niż ten hostujący aplikację frontendową. Kontrolowane przez nagłówki żądań