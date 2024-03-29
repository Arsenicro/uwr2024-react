- [ ] Wstęp
  - [ ] Przedstawienie:
    - [ ] KMa, absolwent, 4 lata frontend, 3 React
  - [ ] Wymagania
    - [ ] HTML, CSS, JS i praca w środowisku JSa (bundlery i lintery)
    - [ ] Znajomość teorii działania internetu, przeglądarek
    - [ ] Opcjonalnie: Znajomość TSa
  - [ ] Formalności
    - [ ] Wszystko w SKOS
    - [ ] Formalne zasady zaliczenia (ze skos):
      - [ ] max 14 list, po max 10 punktów, czyli max 140 punktów, ale pewnie bliżej 130 punktów
      - [ ] W zależności od maksa procentowo wyniki
      - [ ] Pierwsza i ostatnie pracownie mniej punktowane, być może jakiś projekcik na koniec
    - [ ] Pracownie powinny pojawić się po wykładzie, raczej na pewno przed końcem weekendu
    - [ ] Pracownie będą miały ramy punktowe ale dokładna punktacja i ucinanie punktów w zakresie prowadzącego pracownię (może ucinać punkty np za czytelność)
  - [ ] Przedsłowie
    - [ ] Spis tematów poruszonych na wykładzie na bazie moich checklist będzie na skosie
      - [ ] Dodatkowe źródła będą w intenecie
    - [ ] Wartość wykładów
      - [ ] Należy mi przerywać, zadawać pytania, poprawiać jeśli będę mówił bzdury
      - [ ] Każdy głos na zajęciach jest istotny, interaktywność tego wykładu to jedyny powód dla którego nie jest on po prostu nagrany
    - [ ] Cel zajęć
      - [ ] Omówienie narzędzi, nie koniecznie poznanie rozwiązań
      - [ ] Skupienie na omawianiu koncepcji
      - [ ] Z założenia niezależne od frameworka, czysty React, ale poznamy też podejścia frameworków
      - [ ] Wartościowe na początku kariery Reacta, żeby zrozumieć co się dzieje "pod maską"
      - [ ] Kolejnymi krokami powinno być zdobycie praktycznego doświadczenia poprzez projekty i praktyki
      - [ ] Będziemy omawiać również rzeczy których nie porusza się w typowych kursach jeśli uznam że ich zrozumienie będzie wartościowe
- [ ] Problemy z czystym JSem
  - [ ] Programowanie imperatywne
    - [ ] Podejście w którym dajemy komputerowi instrukcję krok po kroku
    - [ ] Przykład countera: omówienie co się dzieje krok po kroku
    - [ ] Podejście daje dużą kontrolę ale na dłuższą metę jest męczące
      - [ ] Dużo kodu żeby coś się stało
      - [ ] Dużo rozmyślania nad metodyką a nie nad rozwiązaniem
      - [ ] Kosztowne utrzymanie kodu
    - [ ] Wiele frameworków i bibliotek to naprawia wprowadzając magię, która ogranicza nasz wpływ na to co się dzieje ale upraszcza kod
  - [ ] Importowanie zewnętrznego kodu & kompatybilność wsteczna
    - [ ] Dodajmy zewnętrzny kod:
      - [ ] Import skryptu `<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>`
      - [ ] Wraz z użyciem `let count = _.toNumber(document.getElementById("count").innerHTML);`
    - [ ] Problemy:
      - [ ] Musimy dbać o to żeby import nastąpił dostatecznie wcześnie
      - [ ] Zależność od cdn
      - [ ] Nie wszystkie biblioteki to wspierają
    - [ ] Inny sposób: import przez modułu w nowoczesnym js (ES Modules)
    - [ ] Problemy:
      - [ ] Działa tylko z kodem serwerowym więc należy postawić serwer
      - [ ] Kompatybilność wsteczna, rozwiązana przez transpilatory typu babel
    - [ ] Rozwiązania:
      - [ ] Używanie modułów, transpilatora babel
      - [ ] Używanie bundlerów które mogą "zbundlować" nasz kod, co umożliwia też np. kompilację TSa
  - [ ] Reużywalność
    - [ ] Przykład: Filmy Disneya
      - [ ] Nawet bez kodu JSa mamy dużo powtórzeń
      - [ ] Dodanie nowego filmy to kopiowanie sporego kawałka kodu
      - [ ] Zmiana np. dodanie roku kłopotliwa bo trzeba zrobić wszędzie
      - [ ] Problem się pojawia kiedy będzie więcej filmów, każda zmiana jest kłopotliwa
    - [ ] Co jeśli na stronie mamy wspólne elementy, header/footer?
      - [ ] Jedna strona = jeden plik HTML, w każdym z nich musimy powtórzyć ten sam kod
  - [ ] Rozwiązanie: Biblioteki, Frameworki, Bundlery, Transpilatory
    - [ ] Połączenie tych rzeczy rozwiązuje powyższe problemy a także wiele innych
    - [ ] Wiele frameworków może nam potencjalnie pomóc
      - [ ] React, Vue, Angular sa najpopularniejsze jeśli chodzi o rynek pracy
      - [ ] Svelte czy Solid mają swoich fanów
    - [ ] Frameworki potrafią rozwiązać też więcej problemów jak routing, mają też często wbudowane transpilatory czy bundlery
    - [ ] Dziś jest mało powodów by nie korzystać z tych rozwiązań, chyba że tworzymy coś bardzo małego
- [ ] React: Biblioteka
  - [ ] Nie Framework
    - [ ] Różnice subtelne, ale React nie jest opiniowany i nie rozwiązuje wielu problemów, nie przychodzi z bundlerami czy transpilatorami, jest lekkim rozwiązaniem
  - [ ] Czemu nie inny framework:
    - [ ] Popularność - na czele popularności
    - [ ] Community - Powiązane z powyższym, duże community
    - [ ] Stabilność - Mało braking changes bo stabilny z dużym backerem (FB)
    - [ ] Natywność - Możliwość pisania aplikacji mobilnych
    - [ ] Znajomość - Znam go
  - [ ] Komponenty
    - [ ] Główna koncepcja na której opiera się React
    - [ ] React pozwala nam pisać, renderować i kontrolować komponenty, a także reagować na zmiany np interakcje użytkownika
    - [ ] Reużywalne kawałki kodu reprezentujące elementy strony
    - [ ] Przykład filmów:
      - [ ] Komponenty kafelki filmów
      - [ ] Może inne
    - [ ] Przykład np filmweb
      - [ ] Jakie są komponenty
    - [ ] Umiejętność dzielenia strony na komponenty jest kluczowa, i widzenie strony jako komponentów to coś co powinien umieć każdy dobry programista Reacta
  - [ ] Podział na komponenty
    - [ ] Wszystko może być komponentem, ale nie wszystko powinno
    - [ ] Nie ma dobrej reguły, różni ludzie mówią inaczej
    - [ ] Wszystko może być w jednym ale każdy mały kawałek może być osobnym
    - [ ] Sensowne jest dzielenie na komponenty funkcjonalnościami i wydzielanie dodatkowych komponentów jeśli za bardzo się rozrosną/jeśli widzimy powtarzalny kawałek kodu
    - [ ] W przyszłości poznamy inne powody poza czytelnością przez które opłaci się dzielić kod na możliwie małe (w granicach rozsądku) komponenty
    - [ ] Obserwowanie strony jako drzewa komponentów (o tym będzie na koniec dzisiejszego wykładu)
- [ ] Pierwsze kroki
  - [ ] [react.new](react.new) jako entry point
    - [ ] Szybka apka do celów testowych w codesandbox
    - [ ] Za tydzień będzie więcej o tym jak postawić sobie Reacta lokalnie, ale dziś będzie codesandbox
  - [ ] Trochę dive do reacta:
    - [ ] React dba tylko o renderowanie drzewa komponentów i tworzenie reaktywnego kodu
      - [ ] Reaktywny w sensie kod który jest w stanie reagować na zmiany na stronie (interakcje użytkownika, ładowanie danych itd)
    - [ ] React nie transpiluje kodu, nie daje bundlera, więc cały dodatkowy setup jest potrzebny
      - [ ] CodeSandbox robi to trochę za nas, możemy się skupić na Reactcie
  - [ ] index.js
    - [ ] Linijka po linijce co się dzieje
      - [ ] Składnia importów z ES6
    - [ ] Cała magia to createRoot
      - [ ] Tworzenie roota w którym będzie cały kontent naszej Reactowej strony
      - [ ] Zazwyczaj jeden route na aplikację ale są case kiedy jest ich więcej (np strona korzysta z Reacta tylko w niektórych fragmentach)
    - [ ] Renderowanie Reactowego kodu w miejscu roote'a
  - [ ] JSX
    - [ ] Składnia rozszerzająca JS przypominająca HTML
    - [ ] Istnieją sposoby pisania bez JSXa ale JSX jest zdecydowanie najpopularniejszy
    - [ ] Pliki JSX często mają rozszerzenie `.jsx` dla czytelności, ale możliwe jest przygotowanie środowiska tak by `.js` też działało
    - [ ] Plik `App.js` żeby zobaczyć jak wygląda komponent
      - [ ] Komponent to funkcja
      - [ ] Składa się z dwóch części, jest cały js nad returnem, i zwracany jsx, czyli to co ma się pokazać
      - [ ] Jak widzimy jest to deklaratywne
        - [ ] Opisujemy jak chcemy żeby coś wyglądało a nie jak to osiągnąć
        - [ ] Nie interesuje nas czy to jest czysty HTML czy może JS jakoś wstrzykuje te napisy
      - [ ] Nad returnem może być prawie dowolny js ale o tym będzie za tydzień
    - [ ] Składnia bardzo podobna do HTML'a ale są różnice
      - [ ] Jeden parent
      - [ ] Zawsze zamknięte (`index.js` i `<App />`)
      - [ ] Niektóre nazwy zmienione np `className` zamiast `class` (czemu?)
- [ ] Filmy w Reactcie
  - [ ] Przepiszemy to co napisaliśmy ostatnio na TSa
  - [ ] CodeSandbox, nowy sandbox, TS
  - [ ] Przejrzenie co siedzi w środku: plik `tsconfig` z konfguracją i pliki `.tsx` (czym są?)
  - [ ] Spróbujemy przekopiować filmy bezpośrednio z naszego przykładu
    - [ ] Styl do stylu
    - [ ] HTML do JSX'a
  - [ ] Są problemy:
    - [ ] Jeden rodzic
      - [ ] Dwa rozwiązania: prawdziwy element i React.Fragment
    - [ ] `className`
    - [ ] błąd parametru `style`
      - [ ] Zastąpić `"background-image: (.*?)"` za pomocą `{{backgroundImage: "$1"}}`
    - [ ] Obrazki
      - [ ] Folder public
        - [ ] Uciążliwe w utrzymaniu ale proste rozwiązanie
      - [ ] Import pliku
        - [ ] Wrzucić do src
        - [ ] Import w komponencie i użycie
        - [ ] Problem z typem
          - [ ] `declare module "*.jpg";` albo dłuższe z `const value: string;` i `export default value;`
        - [ ] Trudny setup ale potem raczej łatwiejsze użycie
      - [ ] Setup zależy od środowiska, więc w innych środowiskach może być inaczej
  - [ ] Usprawnienia
    - [ ] Rozbicie na komponenty
    - [ ] Przekazanie propsów do komponentu
      - [ ] Czym są propsy
      - [ ] Propsy to obiekt, jedyny argument funkcji, ale myślimy o tym jak o argumentach komponentu
      - [ ] Stworzenie interface i zastosowanie
    - [ ] Stworzenie kolejnych komponentów (`MovieTitle` i `MovieYear`)
  - [ ] Drzewo komponentów
    - [ ] Nie tworzy się zazwyczaj, ale warto to robić na początku
    - [ ] Uświadomienie sobie jak wygląda drzewo Reacta i jak myśleć o komponetach jako o drzewie
    - [ ] Do rysowania można użyć Miro (trochę-płatne), Microsoft Whiteboard (troche-żałosne) ale też czego dusza zapragnie, choćby painta
    - [ ] Fajną opcją jest dość surowe draw.io
    - [ ] Stworzenie drzewa komponentu
    - [ ] W przyszłości poznamy też inne zależności do których potrzebne jest to drzewo, ale każdy dobry programista React powinien widzieć stronę jako drzewo komponentów
