#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metoda `GET` la adresa `/homeworks` si metoda `GET` la adresa `/homeworks/id`:

- Daca metoda GET /homeworks a fost apelata fara parametri va returna toate temele din baza de date
- Daca metoda GET /homeworks a fost apelata cu parametrul pass = true va returna toate temele care au obtinut o nota mai mare sau egala ca 5
- Daca metoda GET /homeworks/id a fost apelata cu id inexistent returneaza status code `404`
- Daca metoda GET /homeworks/id a fost apelata cu un id valid returneaza un obiect json
- Daca clientul HTTP accepta doar text metoda GET /homeworks/id returneaza doar continutul temei
