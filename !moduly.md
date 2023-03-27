# Moduły w JavaScript
Rozwiązują problem makaronu w kodzie. Wprowadzają importowanie plików jak w Java. Po wydzieleniu klas moduły pozwalają uniknąc deklaracji wielu skryptów w HTML. 

- główny skrypt aplikacji, umieszczony w HTML musi posiadac atrybut `type="module"`
` <script src="assets/scripts/app.js" defer type="module"></script>`
- klasa musi być oznaczona jako `export`
`export class ProjectItem {...}`
- importujemy klasę korzystająć z relative path, trzeba pamiętać o rozszerzeniu .js. Można zapisać .mjs jako module java script. Bez różnicy
`import { ProjectItem } from './ProjectItem.js';`

Exportować można nie tylko klasy ale również stałe, zmienne, **funkcje**. Można **jednocześnie** ekportować klasy jak metody i inne elementy klas. Exportowanie funkcji działa trochę jak import statyczny w Java:

```
import { moveElement } from '../Utility/DOMHelper.js';

addProject(project) {
    this.projects.push(project);
    moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
}
```
do `moveElement` można po przecinku dopisać `DOMHelper`. Wówczas importujemy zarówno funkcję jak klasę. Można też zapisać `* as NAZWA` **bez klamr** jako import wszystkiego, **samej klasy również** jeżeli jest exportowana. Klauzulę `as` można też dopisywać jako aliasy w innych importach, wewnątrz klamr. W takiej sytuacji w klasie trzeba odwołać się do aliasu. Może to rozwiązać problem powtarzających się nazw funkcji. 

### Default export
Dodanie `default` do exportu może mieć zastosowanie jeżeli jest to jedyny export w całym pliku, np. klasa. Wówczas można nawet pominąć nazwę takiej klasy a w imporcie odniesiemy się do nazwy pliku. **Nie wyklucza to exportów innych plików** Jednak teraz to klasa jest domyślnym importem.
```
export function doSomething() {};

export default class {
    ...
    }
```

Import domyślnego elementu
```
import Com, { doSomething } from './Component.jd'
```
Import nadal wymaga jakiejś, dowolnej nazwy, ale **nie umieszczamy go w klamrach**. Dodatkowo, po przecinku i klamrach możemy umieścić inne, nie-domyślne exporty z tego samego pliku. 

## Dynamiczne importy
Importy zapisywane w klasie powodują, że aplikacja może uruchamiać się dłużej inicjując wszystkie klasy i importy. Można wykorzystać import dynamiczny aby importować klasę czy inny element _na żądanie_ wykorzystując zapis `import('./Tooltip.js').then(module => {...}` metoda import zwróci promise, którego efektem będzie właśnie moduł.

```
  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    import('./Tooltip.js').then(module => {
      const tooltip = new module.Tooltip(
        () => {
          this.hasActiveTooltip = false;
        },
        tooltipText,
        this.id
      );
      tooltip.attach();
      this.hasActiveTooltip = true;
    });
   
  }
```

## Problem z CORS
Moduły mogą prowadzić do problemu z CORS. Strona musi byc `serwowana` jako serwer. 

### Instalacja Development Server
Do jego instalacji konieczny jest node.js
