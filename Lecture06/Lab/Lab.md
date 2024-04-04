# Pracownia: Sklep (10p)

Twoim zadaniem na tej liście będzie stworzenie prostego systemu zarządzania produktami w sklepie.

Bardzo istotną częścią tego zadania jest wykorzystanie bibliotek komponentów [material ui](https://mui.com/material-ui/). W tym celu trzeba będzie przeanalizować jej dokumentacje.

Samo stylowanie nie jest dużą częścią tego zadania, należy jednak zadbać o to by style wyglądały schludnie, nie były one stylami domyślnymi.

Zmieniając style pamiętaj o Themingu ([material ui](https://mui.com/material-ui/customization/theming/)): customizacja każdego komponentu osobno może być uznane za nieczytelne i wpłynąć na przyznaną liczbę punktów.

## Wymagania

1. Strona powinna posiadać Header
   1. Header powinien zawierać nazwę sklepu (jako logo)
   2. Header powinien zawierać ikonę zalogowanego użytkownika
      1. Ikona po najechaniu powinna wyświetlać nazwę użytkownika
   3. Header powinien być "sticky": niezależnie od długości contentu header powinien być zawsze widoczny
2. Strona powinna zawierać listę produktów jako tabelkę
   1. Tabelka powinna zawierać header
   2. Kolumny: Nazwa (string), Typ (string), Cena (number), Dostępność (boolean), liczba dostępnych sztuk (number) oraz akcje
      1. Kolumna z akcją powinna dla każdego wiersza powinna zawierać akcję usunięcia produktu
      2. Kolumna z ceną powinna obok ceny wyświetlić walutę
      3. Dostępność produktu powinna wyświetlać napis tak/nie
   3. Każda kolumna (oprócz akcji) powinna być sortowalna
   4. Tabelka powinna być paginowalna
      1. Powinno dać się wybrać liczbę produktów na stronie
3. Na stronie powinien być przycisk dodania produktu
   1. Dodawanie produktu powinno się odbywać w osobnym modalu z formularzem
   2. Dodawanie powinno być walidowane (powinna być wyświetlana informacja o błędnych danych)
4. Akcja usunięcia powinna być potwierdzona przez komunikat na ekranie

## Przykład

Przykładowa aplikacja: [1](images/1.png), [2](images/2.png).
