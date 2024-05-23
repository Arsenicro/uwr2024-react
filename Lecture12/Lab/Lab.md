# Pracownia: Testy (10p)

Twoim zadaniem na tej pracowni będzie napisanie testów do załączonej aplikacji [todo-list](./todo-list). W tym celu wykorzystasz [Vitest](https://vitest.dev/), [testing-library](https://testing-library.com/) oraz [playwright](https://playwright.dev/).
Częścią tego zadania jest także zdhefiniowanie przypadków testowych, a więc i zawartości testów. Powinny one pokrywać wszystkie Happy Path, ale także pewne nieoczywiste scenariusze mogące prowadzić do błędów.

Wszystkie testy powinny być w miarę sensowne: modyfikacja kodu lub samego testu powinno wykryć, że aplikacja nie działa poprawnie.

W każdym z przypadków należy uzasadnić, czemu napisane testy pokrywają wystarczający zestaw przypadków.

## 1. Testy jednostkowe (3p)

### Setup

Zainstaluj [Vitest](https://vitest.dev/), według załączonej na stronie instrukcji.

### Testowanie Reducera

Przetestuj reducer z pliku `src\providers\TodosProvider\todosReducer.ts`. Pamiętaj o przetestowaniu wszystkich możliwych akcji, być może w różnych kombinacjach. To, że akcje nie są używane w aplikacji nie znaczy, że nie należy ich testować!

## 2. Testy integracyjne (4p)

### Setup

Zainstaluj [React Testing library](https://testing-library.com/docs/react-testing-library/intro):

1. Zainstaluj wymagane zależności: `npm install jsdom @testing-library/react @testing-library/jest-dom --save-dev`
2. Stwórz w katalogu głównym (nie `src` tylko w katalogu w którym znajduje się `src`) plik `testSetup.ts` w którym rozszerzysz metodę `expect` o dodatkowe matchery (takie jak `toBeInTheDocument`), oraz dodasz metodę odmontowującą drzewo Reactowe po każdum teście:

```ts
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

3. Zmodyfikuj `tsconfig.json` dodając typy rozszerzonych przed chwilą matcherów, dodając `"types": ["@testing-library/jest-dom"]` wewnątrz `compilerOptions`.
4. Zmodyfikuj `vite.config.ts` używając metody z `vitest/config` zamiast tej z `vite`, i dodając obiekt `test` w którym skonfigurujesz środowisko testów na `jsdom` oraz użyjesz pliku `./testsSetup.ts` jako pliku setupu testów

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./testSetup.ts",
  },
});
```

### Testowanie komponentu `NewTodo`

Przetestuj komponent `src\components\NewTodo\NewTodo.tsx`. W tym celu wyrenderuj go za pomocą React Testing Library. Pamiętaj o dodaniu Providera, którym przekażesz początkową listę i zmockowane funkcje: w ten sposób będziesz mógł opierać testy na wywołaniach funkcji.

Nie musisz testować działania providera, wystarczą testy sprawdzające wynik wywołania funkcji `addTodo`.

### Testowanie komponentu `TodoGrid`

Przetestuj komponent `src\components\TodoGrid\TodoGrid.tsx`. W tym celu wyrenderuj go za pomocą React Testing Library. Pamiętaj o dodaniu Providera, którym przekażesz początkową listę i zmockowane funkcje: w ten sposób będziesz mógł testować samo wywołanie funkcji `editTodo` i `removeTodo`.

Nie musisz testować działania providera, wystarczą testy sprawdzające wynik wywołania funkcji `editTodo` i `removeTodo`.

### Podpowiedź

Staraj się odwzorować zachowanie użytkownika.

W przypadku Selecta: kliknij (metodą `mouseDown`, bo tego wymaga Material) w selecta, a następnie wybierz (metodą `click`) opcję.

W przypadku Autocomplete: wpisz (metodą `change`) do pola tekst, a następnie wybierz (znów, metodą `click`) opcję.

## Testy E2E (3p)

### Setup

Zainstaluj [Playwright](https://playwright.dev/), według załączonej na stronie instrukcji. Dodatkowo dodaj włączanie serwera developerskiego, np. tak jak opisano niżej:

Dołącz do skryptów `package.json` skrypt odpalający playwright'a i test odpalający serwer playwright'a, np. `"e2e:dev": "vite --port 3100"` i `test:e2e": "playwright test`.

Dołącz także do konfiguracji playwright'a odpalanie zdefiniowanego serwera developerskiego, dodając konfigurację

```ts
  webServer: {
    command: "npm run e2e:dev",
    url: "http://localhost:3100/",
    reuseExistingServer: !process.env.CI,
  },
```

w `defineConfig` w pliku `playwright.config.ts` a także `baseURL: "http://localhost:3100/"` w `use` tej samej konfiguracji tego pliku.

Pamiętaj, że możesz uruchamiać również wersję wizualną, za pomocą `npx playwright test --ui` lub definiując odpowiednią komendę w `package.json`

### Testowanie całościowe

Napisz test (lub testy) całościowo przechodzące wszystkie możliwe ścieżki: dodanie kilku todo, ich edycja a także usuwanie.
