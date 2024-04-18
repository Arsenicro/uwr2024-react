# Pracownia: Refactor Tailwind (6p)

Twoim zadaniem na tej pracowni będzie poprawienie kodu wygenerowanego za pomocą sztucznej inteligencji, znajdującego się [tutaj](https://codesandbox.io/p/sandbox/new-wind-4k58gm).

## Środowisko

Użyj [vite](https://vitejs.dev/) do stworzenia lokalnej instancji Reacta. Koniecznie użyj Reacta z TypeScriptem.

## Zasady

1. Strona powinna zawierać przynajmniej te same elementy w tym samym układzie co ta wygenerowana przez sztuczną inteligencje
   1. W ramach ćwiczenia tailwinda można (ale nie trzeba) dodawać nowe elementy, lub uatrakcyjnić wizualnie istniejące; powinno być to jednak efektem nadania nowych styli, nie uproszczenia istniejących.
2. Należy zadbać o dobry podział na komponenty. Nie tylko na sekcje, ale także komponenty funkcjonalne, takie jak `team-card`, `blog-card`, `contact-form` czy choćby `section`.
   1. Pamiętaj o propsie `children` który może pomóc w stworzeniu choćby komponentu `section`.
3. Dane strony powinny nadal znajdować się w tym samym obiekcie w którym się znajdują, a obiekt powinien znajdować się w pliku `App`. Obiekt nie powinien być eksportowany, wszelkie dane należy przekazywać za pomocą propsów (można też użyć kontekstu).
4. Częścią zadania jest zapoznanie się z dokumentacją użytego rozwiązania.

## Wymagania

1. Wszystkie style (również te domyślne) powinny być napisane z użyciem klas tailwindowych. Twoja aplikacja nie powinna więc ustawiać żadnych styli samodzielnie.
2. Do dark mode użyj [strategii selector](https://tailwindcss.com/docs/dark-mode) oraz klas `dark:`
3. Zadbaj o to by powtórzeń było możliwie najmniej, wprowadzając odpowiednie komponenty
