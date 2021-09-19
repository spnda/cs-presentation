# HTML: Editoren, Doc Types, Headings, Paragraphen

## Editoren

- Ein Editor („herausgeben, bearbeiten“) ist ein Programm zur Erstellung und Bearbeitung von Daten.
- Die Arbeit mit einem Editor unterscheidet sich von der traditionellen Arbeitsweise. 
- so ist es in der Regel möglich Veränderungen ohne Probleme zu widerrufen.
Besipiele: Texteditor, HTML-Editor, Online-Editor, XML–Editor

## Doctypes

- Bei dem Doctype handelt es sich nicht um ein klassisches HTML Element. 
- Vielmehr macht der Doctype Angaben darüber, welchen Typ Dokument der Browser zu erwarten hat. 
- Standards sehen vor, dass das Element im Quellcode jedes Web Dokuments vorhanden sein muss. 
- Fehlt der Doctype, handelt es sich also um einen Fehler, auch wenn sich die Webseite unter Umständen dennoch korrekt darstellen lässt. 
- Tools zur Überprüfung des Quellcodes zeigen es ebenfalls als Fehler an, wenn der Doctype im Quellcode eines HTML Dokuments fehlt. 
- Mit ihm wird der verwendete Dokumenttyp im Kopfbereich deklariert.
- Je nach Dokumenttyp sind in HTML, XHTML oder XML unterschiedliche Elemente definiert, die der Browser erkennt und umsetzt

Der doctype bei einem HTML dokument wird am Anfang der Datei so definiert:
```html
<!doctype html>
```

## Headings

- Headings, also zu Deutsch Überschriften, bezeichnet nicht nur ein stilistisches Mittel zur Textgestaltung, sondern auch einen wichtigen Aspekt im Online Marketing.
- Man unterscheidet zwischen verschiedenen Größen: H1, H2, H3, H4, H5 und H6. 
- Hierbei ist H1 die größte Überschrift und H6 die kleinste; also rein von der Schriftgröße her betrachtet. 
- Da natürlich die größte Überschrift auch die meiste Aufmerksamkeit auf sich ziehen wird, kommt den unterschiedlichen Größen auch eine unterschiedliche Wichtigkeit zuteil.

Ein Beispie für Heading-elemente:

```html
<h1>Sehr Große Überschrift</h1>
<h2>Große Überschrift</h2>
<h4>Mittelgroße Überschrift</h4>
<h6>Sehr kleine Überschrift</h6>
```
<div class="example">
    <h1 class="example_content">Sehr Große Überschrift</h1>
    <h2 class="example_content">Große Überschrift</h2>
    <h4 class="example_content">Mittelgroße Überschrift</h4>
    <h6 class="example_content">Sehr kleine Überschrift</h6>
</div>

## Paragraphen

- Das p-Element definiert einen Textabsatz. 
- Absätze dienen der Gliederung eines Textes,zur Einteilung in aufzählendem Schrifttum, wie bei Gesetzen, Verträgen oder Lehrbüchern

Ein Beispiel für ein Paragraph-Element:

```html
<p>
    Ein Textabsatz, mit einem <br/> Zeilenumbruch.
</p>
```
<div class="example">
    <p class="example_content">
        Ein Textabsatz, mit einem <br/> Zeilenumbruch.
    </p>
</div>
