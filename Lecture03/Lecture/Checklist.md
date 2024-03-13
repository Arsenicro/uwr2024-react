- [ ] "Pure Components"
  - [ ] Koncepcia "Czystych Funkcji"
    - [ ] Funkcje które dla tego samego inputu dają ten sam output + nie zmieniają nic na zewnątrz świata (nie powodują side effectów)
    - [ ] Formuły w matematyce
    - [ ] React opiera się mocno na Purity i trzeba to rozumieć, choć czasem to się wydaje nieintuicyjne
    - [ ] Dodanie w Card `count += 1` z `count` zadeklarowanym poza komponentem powoduje nieprzewidziane konsekwencje
    - [ ] Dziwne liczby (rośnie o 2)
    - [ ] Rośnie cały czas przy każdej zmianie stanu
    - [ ] Renderowanie dwukrotnie tego samego daje inne wyniki
    - [ ] Wynik renderowania komponentów nie powinien zależeć od kolejności ich renderowania (tzn jeśli jeden komponent renderuje się dłużej niż pierwszy, to wynik powinien być taki sam jakby renderowały się odwrotnie)
  - [ ] Komponenty powinny być możliwie jak najbardziej "pure"
    - [ ] Podczas Renderowania jest to ważne: chcemy by komponent dla takiego samego wejścia dawał to samo wyjście, i żeby nie zmieniał nic co istniało przed renderingiem
    - [ ] Za wejście uznajemy nie tylko propsy ale też ogólno pojęty stan
    - [ ] Np nie powinniśmy modyfikować samodzielnie czegoś z innego komponentu
      - [ ] Jest może 0.01% case kiedy trzeba zrobić jakieś "getElementById" albo coś, nie o to chodzi w Reactcie
  - [ ] Side Effecty
    - [ ] Jeśli komponent musi coś zrobić (a będzie musiał, bo to programowanie), to będą side-effecty (animacja, pobranie danych z api, zmiana danych w bazie)
    - [ ] Side-effecty powinny być w jednym z dwóch miejsc:
      - [ ] Event-handlery, które dzieją się jak będzie wykonana jakaś akcja (onClick, onHover itd)
        - [ ] Event-handlery nie dzieją się podczas renderowania, więc nie muszą być Pure
      - [ ] W ostateczności jest coś takiego jak `useEffect`, będziemy o tym mówić, ale warto mieć z tyłu głowy, że należy go używać **z umiarem**
        - [ ] To dzieje się _po_ renderze, więc też nie musi być Pure
    - [ ] Najlepiej jeśli logika naszego kodu będzie możliwie jak najbliżej czystego renderowania
      - [ ] Np nie trzeba jakoś dziwnie utrzymywać stanu "filteredMovies" jak można je odfiltrować podczas renderowania
    - [ ] Ważne jest to, że Pure ma być **renderowanie**, a nie całość komponentu (choć super jest, jak cały komponent jest pure, ale renderowanie **musi być** pure, komponent nie musi i pewnie w wielu sytuacjach nie będzie)
      - [ ] Ważne: pamiętać że Render to wywołanie funkcji, więc wszystko co nie jest w "useEffect" albo w jakichś handlerach prawdopodobnie stanie się podczas Renderu
      - [ ] Stąd np do wywołań API w przyszłości będziemy używać `useEffect`a
  - [ ] Czemu to ważne
    - [ ] Performance: można zapamiętać output funkcji jeśli jest Pure, więc jak się nie zmieni wejście, to nie trzeba jeszcze raz renderować całego drzewa
    - [ ] Jeśli podczas renderowania coś się zmieni, React może to przerwać i wyrenderować nowe dane (co nie jest bezpieczne jeśli renderowanie nie jest pure i modyfikuje coś czego nie powinno)
  - [ ] Strict Mode pomaga znaleźć błędy, wołając każdy komponent dwukrotnie, żeby znaleźć "impurity"
- [ ] Stan w czasie
  - [ ] Przy zmianie stanu idzie rerender, stan nie zmienia się od razu
    - [ ] "Zawołanie" komponentu
    - [ ] Wszystkie zmienne i funkcje sa obliczone w czasie "zwawołania"
    - [ ] Przy rerenderze to wynik tego wywołania jest porównywany ze stanem obecnym i aktualizowany
  - [ ] Ma to swoje efekty, np jak się użyje wiele razy `setState` z `count + 1`
  - [ ] To się sprowadza do tego że wywołujemy `setState` z `0 + 1`
  - [ ] `setState` a potem `alert` żeby pokazać że będzie stara wartość w alercie a nie ta zaktualizowana
  - [ ] `setState` a potem `setTimeout(() => { alert(number) }, 1000)`
  - [ ] Warto pamiętać: React podczas renderu robi sobie "snapshot" stanu, w momencie jak wywołujemy ta funkcję ona działa na tym "snapshocie" stanu, nie ma wiadomości o nowym stanie dopóki nie stanie się rerender
  - [ ] Funkcyjny `setState`
    - [ ] Czy to jest dobra praktyka?
    - [ ] React wrzuca na stos wywołanie tej funkcji
    - [ ] Co będzie np funkcyjny setState a potem zwykły
  - [ ] O dobrych praktykach za chwile
  - [ ] Dodatkowa optymalizacja: React batchuje setState (wykonuje wszystkie zanim wykona rerender) dlatego setState wywołany 4 razy nie powoduje 4 rerenderów (nie zawsze prawda we wszystkich wersjach Reacta)
- [ ] Setup lokalny
  - [ ] Czysty HTML
    - [ ] Nie ma JSXa
    - [ ] Możemy załadować Reacta z cdn'a
      - [ ] import `<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>` i `<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>`
    - [ ] Nowa funkcja `App`
      - [ ] Funkcja zwraca `h1`
    - [ ] `ReactDOM.render` renderujące w root'cie element App
    - [ ] Dodanie `React.useState`
    - [ ] Dodanie przycisku: `React.createElement("button", {onClick: () => setClickCount((curr) => curr+1)}, "Click Me")`
    - [ ] Dodanie wyświetlania: `React.createElement("h1", null, "Clicked ${clickCount} times")`
    - [ ] Dodanie kontenera: `React.createElement("div", null, button, p)`
    - [ ] Babel zeby dodać JSXa
      - [ ] `<script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>`
      - [ ] `script` zamienić na `script type=text/babel`
      - [ ] JSX zamiast `createElement`
        - [ ] JSX a `createElement`
        - [ ] JSX jest tłumaczony na `createElement`
        - [ ] Reactowe Elementy to nic innego jak obiekty
        - [ ] `console.log` takiego jsx'a i co zwraca
    - [ ] Po co o tym mówimy
      - [ ] Bo to ważne zrozumieć że React to biblioteka i możemy jej używać z minimalnym wysiłkiem
      - [ ] Ważne jest zrozmieć że React to nie vite, to nie create-react-app, to nie Next. React to nie NPM. Ważne jest rozumieć co React robi
  - [ ] Vite: go-to rozwiązanie
    - [ ] Strona vite
    - [ ] Komenda do tworzenia nowej apki
      - [ ] Npm
        - [ ] nvm
    - [ ] Struktura czystej aplikacji
- [ ] https://react.dev/learn/managing-state
  - [ ] Warto to przeczytać samodzielnie, to sprawi że będziecie pisać lepszy kod
  - [ ] Reguły przechowywania stanu
    - [ ] Unikać sprzeczności
      - [ ] Np dodajemy 'increased' i 'decreased' przyciski, na oba stany
        - [ ] Może być tak że jest incremented i decremented?
        - [ ] Może lepiej w jeden stan?
    - [ ] Grupować powiązany stan
      - [ ] Jeśli zmieniamy oba na raz to warto jest mieć obiekt zamiast dwóch stanów
      - [ ] Np, counter jako obiekt
    - [ ] Unikać niepotrzebnego stanu
      - [ ] Przykład z poprzedniego wykładu: movieList i filteredMovieList
    - [ ] Unikać powtórzeń
      - [ ] Np firstName i lastName i fullName
    - [ ] Unikać głębokich zagnieżdżeń
      - [ ] Przykład, profile, ze skills, skills mogą być techinical, to jest tablica obiektów
        - [ ] Jak zmienić poziom skilla?
        - [ ] Kopia wszystkiego po kolei: obiektu, tablicy, obiektu
        - [ ] Nie wystarczy skopiować nadrzędnego obiektu
          - [ ] Ma to związek z optymalizacją, może prowadzić do subtelnych bugów
            - [ ] Ostatecznie rerender będzie, ale skoro tablica się nie zmieniła (tylko jej element) to obiekt pozostał bez zmian, więc może się wykrzaczyć
        - [ ] Immer jako potencjalne rozwiązanie
- [ ] Dzielenie stanu pomiędzy komponentami
  - [ ] Nie ma sensownych mechanizmów do przekazywania stanu "w górę" ale są "w dół"
    - [ ] Podejście kontrolowane: stan komponentu kontroluje jego rodzic
      - [ ] Tak jak przy kontrolowaniu inputu