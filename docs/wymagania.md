---
sidebar_position: 8
---

# Wymagania Funkcjonalne i Niefunkcjonalne

## Wymagania Funkcjonalne

Wymagania funkcjonalne to konkretnie zdefiniowane funkcje, które aplikacja Sejm 2.0 będzie wykonywała w celu spełnienia potrzeb jej użytkowników.

1. **Wyszukiwanie danych:**
   - Wyszukiwanie zaawansowane z możliwością filtrowania wyników według posła, partii, daty, tematu czy typu dokumentu.
   - Autouzupełnianie i sugestie wyszukiwania w celu poprawy doświadczeń użytkownika.

2. **Powiadomienia i Subskrypcje:**
   - Możliwość subskrypcji tematów lub posłów, aby otrzymywać powiadomienia e-mail o nowych danych czy zmianach.
   - System alertów dla użytkowników biznesowych dotyczący zmian w prawodawstwie istotnym dla ich branży.

3. **Przeglądanie Profili:**
   - Dostęp do profili posłów z szczegółowymi danymi o ich działalności, głosowaniach i udziale w komisjach.
   - Filtry pozwalające na sortowanie i wyszukiwanie posłów według określonych kryteriów.

4. **Analiza Danych:**
   - Graficzne przedstawienie statystyk i trendów dotyczących działalności sejmowej.
   - Narzędzia do analizy porównawczej działań posłów i ugrupowań politycznych.

5. **Dostęp do Dokumentów:**
   - Pełny dostęp do dokumentów sejmowych, takich jak ustawy, projekty uchwał, pytania parlamentarne w formacie czytelnym i przystępnym.
   - Funkcja pobierania dokumentów w formacie PDF dla dalszej analizy.

6. **Interakcja Użytkownika:**
   - Możliwość komentowania i oceniania działań posłów przez użytkowników.
   - Ankiety i badania opinii wśród użytkowników dotyczące aktualnych tematów legislacyjnych.

Zrozumiałe, konkretnie zdefiniowane wymagania niefunkcjonalne to klucz do zapewnienia, że aplikacja będzie spełniała oczekiwania użytkowników oraz była zgodna ze standardami branżowymi. Oto szczegółowe wymagania niefunkcjonalne dla aplikacji Sejm 2.0:

## Wymagania Niefunkcjonalne

1. **Czas Ładowania Strony:**
   - Dla 90% użytkowników czas ładowania głównych funkcji strony (np. wyniki wyszukiwania, ładowanie profilu posła) powinien być krótszy niż 3 sekundy.
   - 95% transakcji backendowych (np. zapytania do bazy danych) powinno zwracać odpowiedź w mniej niż 1 sekundę.

2. **Przepustowość:**
   - System powinien obsługiwać co najmniej 1000 jednoczesnych użytkowników bez wpływu na wydajność.
   - Serwer aplikacji powinien utrzymywać przepustowość na poziomie co najmniej 100 Mbps.

3. **Ochrona Danych:**
   - Wszystkie dane użytkowników muszą być szyfrowane przy użyciu standardu AES-256 podczas przechowywania i transmisji.
   - Regularne audyty bezpieczeństwa, przynajmniej raz na kwartał, aby zapewnić ochronę przed nowymi zagrożeniami.

4. **Autentykacja i Zarządzanie Sesionami:**
   - Mechanizmy autentykacji dwuskładnikowej dla administratorów i opcjonalnie dla użytkowników.
   - Sesje użytkowników powinny wygasnąć automatycznie po 30 minutach nieaktywności.

5. **Dostępność Serwisu:**
   - Czas pracy aplikacji (uptime) powinien wynosić 99,5% na rok.
   - Mechanizmy failover powinny być w stanie przywrócić działanie serwisu w ciągu maksymalnie 5 minut po awarii.

6. **Wsparcie dla Różnych Urządzeń:**
   - Aplikacja powinna być funkcjonalna i wyświetlać się poprawnie w przeglądarkach internetowych na urządzeniach mobilnych i desktopach.

7. **Aktualizacje i Deploy:**
   - Aktualizacje systemu powinny odbywać się bez przestojów usługi (zero downtime deployment).
   - Możliwość wdrożenia hotfixów w ciągu 2 godzin od wykrycia krytycznego błędu.

2. **Dokumentacja Techniczna:**
   - Pełna i aktualna dokumentacja techniczna, w tym dokumentacja API, powinna być dostępna dla deweloperów i administratorów systemu.

1. **Zgodność z RODO:**
   - Aplikacja musi spełniać wszystkie wymagania RODO, w tym umożliwienie użytkownikom dostępu do ich danych osobowych i ich usunięcia na żądanie.

2. **Przestrzeganie Praw Autorskich:**
   - Wszelkie wykorzystywane dane i materiały muszą być dostępne na licencji otwartej lub zgodnie z prawem cytatu.