# Pracownia: Harry Potter Guessing Game (10p)

Twoim zadaniem na tej pracowni będzie stworzenie gry Guessing Game w uniwersum Harrego Pottera. W tym celu skorzystasz z [potterdb](https://docs.potterdb.com/) do pobrania danych odnośnie eliksirów i/lub zaklęć i wyświetlenia opisu oraz czterech możliwych odpowiedzi.

## Środowisko

Użyj [vite](https://vitejs.dev/) do stworzenia lokalnej instancji Reacta. Koniecznie użyj Reacta z TypeScriptem.

## Style

Aplikacja powinna wyglądać przede wszystkim schludnie. Użyj dowolnej metody stylowania poznanej na wykładzie (jedna z poznanych bibliotek komponentów, tailwind, sass, czysty css).

## Wymagania

Poniżej znajdują się wymagania: wersja podstawowa, oraz dwa rozszerzenia. Do uzyskania jakichkolwiek punktów należy wykonać wersję podstawową, a następnie dowolne (lub oba) z rozszerzeń.

Jak zawsze, zadbaj o odpowiedni podział komponentów i czytelność kodu.

### Wersja Podstawowa (6p)

1. Wybierz jeden z endpointów: `Potions` lub `Spells`.
2. Pobierz dane na temat wszystkich obiektów wybranego endpointu z API [potterdb](https://docs.potterdb.com/)
3. Wyświetl grę:
   1. Jako pytanie, gra będzie wyświetlać efekt zaklęcia/eliksiru (`attributes.effect`)
   2. Cztery możliwe odpowiedzi będą nazwami zaklęcia/eliksiru, z jedną poprawną (`attributes.name`)
   3. Po zaznaczeniu poprawnej odpowiedzi, generowane będzie kolejne pytanie
   4. Przy zaznaczeniu błędnej odpowiedzi, wyświetlany będzie odpowiedni komunikat: do czasu zaznaczenia poprawnej odpowiedzi, kolejne pytanie nie powinno być generowane.
4. Wyświetl wynik:
   1. Obecny wynik będzie zwiększany za każdym razem, jak gracz zaznaczy poprawną odpowiedź
   2. Obecny wynik będzie zerowany za każdym razem, jak gracz zaznaczy błędną odpowiedź
5. Wyświetl ładowanie:
   1. Dopóki dane z API nie zostaną pobrane, wyświetl element pokazujący użytkownikowi, że w tle ładują się dane
6. Zadbaj o efektywność:
   1. Zadbaj o to, by dane z api pobierane były raz, przy wczytaniu strony, a nie wielokrotnie

### Rozszerzenie: Kategorie (3p)

1. Pobierz dane na temat wszystkich obiektów drugiego endpointu (tego nie wybranego w wersji podstawowej) z API
2. Rozszerz grę o wybór kategorii:
   1. Przy rozpoczęciu gry, wyświetl opcje wyboru kategorii: Zaklęcia albo Eliksiry
   2. Po wybraniu kategorii, gra przebiega jak w wersji podstawowej
   3. Przy zaznaczeniu poprawnej odpowiedzi, możemy albo wrócić do wyboru kategorii, albo kontynuować grę w tej samej kategorii: zdefiniowanie sposobu działania jest częścią tego zadania.
3. Umożliw dodatkowe rozszerzanie:
   1. Zadbaj o to, by rozszerzenie gry o kolejne kategorie było stosunkowo łatwe (przy zachowaniu odpowiednich, zdefiniowanych przez Ciebie warunków np. odnośnie formatu danych)
4. Zachowaj Efektywność:
   1. Dane wciąż powinny być pobierane tylko raz, przy wczytaniu strony

### Rozszerzenie: High Score (1p)

1. Dodaj możliwość śledzenia najwyższego wyniku:
   1. Najwyższy wynik powinien być przechowywany w Local Storage, żeby mógł być pamiętany po zamknięciu karty przeglądarki
   2. Najwyższy wynik powinien działać jak najwyższy wynik: zwiększać się wraz z wynikiem, jeśli obecny wynik przekracza obecny najwyższy wynik

## Przykład

[Przykładowa aplikacja](./images/example.gif)
