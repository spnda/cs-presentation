# NETZ: IP-Adressen

Eine IP-Adresse ist eine Ziffernfolge, die dazu dient Daten von Computern untereinander, mithilfe eines Netzwerks, zu verschicken.

Man kann sich die IP wie eine komplette Anschrift mit Namen, Straße, Hausnummer, Postleitzahl und Stadt vorstellen. Wird eine Bestellung in einem Onlineshop getätigt, werden genau diese Angaben benötigt, um das Paket mit den Waren zuzusenden.

Auch virtuelle “Pakete” brauchen eine genaue Anschrift. Richtet man eine Anfrage an Google, wird zuerst ein Paket mit einer Anfrage an die IP von Google geschickt,
die dann an die eigene IP ein Paket mit den Ergebnissen zurückschickt.

### Klassische IPv4
Bsp: 192.168.2.109

- Besteht aus 4 Zahlenblöcken, jeweils aus maximal 3 Zahlen.
- Durch Punkte getrennt sind.
- Maximal 32-bit, daher 8 bits pro Block.
- Höchster Wert liegt bei 255.255.255.255.

### Neue IPv6
Bsp: 2001:db8::8a2e:370:7334

- Besteht aus 8 Zahlenblöcken, jeweils aus 4 hexadezimalen Ziffern.
- Mit Doppelpunkten getrennt.
- Maximal 128-bit, daher 16 bits pro Block.
- Entstanden, da es nicht mehr genug IPv4 Adressen gibt.

<img src="https://www.ionos.de/digitalguide/fileadmin/DigitalGuide/Screenshots_2018/aufbau-von-ipv4-und-ipv6-adressen.png" alt="IPv4vsIPv6" width="60%" />

## Logische Adresse

Die logische Adresse ist eine IP-Adresse, welche nicht auf einem Gerät konstant gespeichert wird, sondern beim einloggen in einem Netzwerk diesem zugewiesen wird.
Dadurch kann sich die logische Adresse andauernd ändern, da sie zufällig zugewiesen wird. Die physische Adresse hingegen ändert sich nie und ist im Prinzip
wie eine Identifikationsnummer oder "Namen" eines einzelnen Geräts.

Beispiel an einem Auto: 

- physische Adresse → Identifizierungsnummer
- logische Adresse → Nummernschild

## Subnetz und Subnetzmaske

Als Subnetz wird ein Teilnetz eines Netzwerkes beim Internetprotokoll bezeichnet.
Bei einem Subnetz werden die ersten 4 bits des letzten Blocks aufgeteilt und als Gruppierung genutzt.
Mit einer Subnetzmaske kann mithilfe einem bitwise AND das Subnetz identifiziert werden.

Vorteile:
 
- Datenpakete werden direkt miteinander ausgetauscht, was die Netzlast reduziert
- Systemadministrator behält einen guten Überblick über die einzelnen Hosts
- Sicherheit erhöht sich, da die Netze voneinander getrennt sind

Mit der folgenden Tabelle läst sich visualisieren, wie durch die bit-Rechung man den Netzwerkteil und den Geräteteil bestimmen kann.

|     | 11000000.10101000.00000001.10000001 | 192.168.1.129 | IPv4-Adresse |
|:---:|:-----------------------------------:|:-------------:|:------------:|
| AND | 11111111.11111111.11111111.00000000 | 255.255.255.0 | Netzmaske    |
| =   | 11000000 10101000 00000001 00000000 | 192.168.1.0   | Netzwerkteil |

<br/>

|     | 11000000.10101000.00000001.10000001 | 192.168.1.129 | IPv4-Adresse |
|:---:|:-----------------------------------:|:-------------:|:------------:|
| AND | 00000000.00000000.00000000.11111111 | 0.0.0.255     | Netzmaske    |
| =   | 00000000.00000000.00000000.10000001 | 0.0.0.129     | Geräteteil   |
