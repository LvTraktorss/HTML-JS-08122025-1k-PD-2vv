# HTML-JS-08122025-1k-PD-2v

## Noteikumi

- Pārbaudes darbā atļauts izmantot tikai [devdocs.io](https://devdocs.io/).
- Github vietnē atļauts tikai glabāt savu lokālo projektu, citu projektus skatīt NAV atļauts.
- Uz datora meklēt un izmantot citus projektus NAV atļauts.
- Instalēt un lietot neatļautu programmatūru, piem., VS Code paplašinājumus, NAV atļauts.
- Darbs jāveic patstāvīgi bez komunikācijas ar citiem.

## Vides sagatavošana

1. Atinstalējiet visus Visual Studio Code paplašinājumus izņemot Live Server, Prettier un SQLite3 Editor.
2. Novirziet šo repozitoriju uz jaunu Jūsu Github kontā ar tādu pašu nosaukumu un **nosūtiet saiti skolotājam**.
3. Pārbaudiet vai veiksmīgi izdodas `git push`.

## Uzdevums

**_Izveidojiet HTML un Javascript aplikāciju `Valūtas kalkulātors`._**<br>
Tukši `index.html` un `app.js` faili jau ir doti.<br>
Kalkulātorā iespējams konvertēt 3 valūtas:

- EUR (Eiro)
- USD (ASV dolārs)
- GBP (Britu mārciņa)

Kalkulātorā ievada konvertējamo valūtu, daudzumu un valūtu uz kuru konvertēs.<br>
Piem., konvertē (jeb pārdod) 10 EUR un pērk 11.14 USD.<br>

Valūtas kursu doti šajā objektā:

> {
> "EUR" : { "EUR" : 1, "USD" : 1.1140, "GBP" : 0.8456 },
> "USD" : { "EUR" : 0.82, "USD" : 1, "GBP" : 0.70 },
> "GBP" : { "EUR" : 1.08, "USD" : 1.21, "GBP" : 1 }
> }

Skatiet pievienoto attēlu paraugam.<br>

Sintakses atslēgvārdi:

- let
- const
- document.getElementById
- value
- addEventListener
- click
- function
- innerHTML
- createElement
- appendChild
