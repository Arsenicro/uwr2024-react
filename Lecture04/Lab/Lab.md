# Pracownia 4: Wyszukiwarka Przepisów (10p)

Twoim zadaniem na pracowni będzie stworzenie wyszukiwarki przepisów. Dużą częścią tego zadania będzie stworzenie pliku `RecipeContext.tsx` zawierającego Reactowy kontekst w którym znajdować się będzie cała logika opisująca wszystkie funkcjonalności.

## Dobre praktyki

Niezależnie od doświadczenia i obecności na wykładzie, warto zapoznać się z trzema pierwszymi sekcjami z https://react.dev/learn (Describing the UI, Adding Interactivity, Managing State). Dobre zrozumienie tematów tam zawartych pomoże Ci pisać lepszy kod.

## Środowisko

Użyj [vite](https://vitejs.dev/) do stworzenia lokalnej instancji Reacta. Koniecznie użyj Reacta z TypeScriptem.

## Funkcjonalności

1. Cała logika odpowiedzialna za zarządzanie stanem przepisów ma się znajdować w pliku `RecipeContext.tsx`
   1. Plik ten zawiera logikę napisaną za pomocą funkcji `useReducer`
   2. Komponent zwracany z tego pliku to `RecipeProvider` przyjmujący jeden props: `children` czyli `JSX`a przekazywanego jako "dziecko"
2. Każdy przepis składa się z nazwy i treści przepisu
3. Powinna istnieć opcja dodawania nowych przepisów, za pomocą prostego formularza
4. Każdy przepis można usunąć
5. Każdy przepis można "dodać do ulubionych"
   1. "Ulubione" przepisy powinny wyświetlać się w specjalny sposób (powinny być jakoś oznaczone)
   2. "Ulubione" przepisy można łatwo odfiltrować, tak, żeby zostawić tylko przepisy "ulubione"
6. Przepisy można "odfiltrować" używając słów kluczowych (może być zwykły input z tekstem)
   1. Słowa kluczowe powinny brać pod uwagę zarówno nazwę jak i opis
7. Aplikacja powinna zawierać prosty styl, napisany w dowolny sposób, sprawiający że aplikacja wygląda schludnie

## Uwagi

1. Ważny jest dobry podział komponentów: komponenty nie powinny być zbyt duże, powinny też być czytelne
2. Używamy TypeScriptu, więc chcemy, by był on przydatny: wszelkie błędy typescripta należy rozwiązać
3. Aplikacja ma wyglądać schludnie, ale stylowanie nie jest częścią zadania, nie będzie więc oceniane poza podstawowym zakresem "wygląda/nie wygląda ok"
