export default {
	"#ConfigurationPage.title": "Willkommen in der Konfiguration",
	"#ConfigurationPage.content": "Die Konfiguration besteht aus drei Teilen:\n\n1. Der Geräte-Konfiguration zur Verwaltung deiner Geräte inkl. deren Datenpunkte. Außerdem werden die Geräte-Details (das Popup) über die Geräte-Konfiguration eingestellt.\n\n2. In der Layout-Konfiguration werden die Tabs / Registerkarten sowie deren Spalten und Widgets verwaltet. Hier werden die Geräte den Widgets hinzugefügt, um diese darzustellen.\n\n3. Über die Einstellungen werden allgemeine Sachverhalte konfiguriert wie z. B. Dark Mode, Seitentitel oder -Icon, etc.",
	
	"#DeviceList.title": "Die Geräte-Konfiguration",
	"#DeviceList.content": "Die Übersicht der Geräte-Konfiguration besteht aus zwei Teilen: Der Suche (oben) und der gruppierten Liste von Geräten (unten).",
	
	"#DeviceListFilter.title": "Die Geräte-Gruppierung und -Suche",
	"#DeviceListFilter.content": "Die Liste von Geräten kann nach Gewerk (Standardeinstellung) oder Hersteller gruppiert werden.\n\nDie Suche ist nicht case-sensitiv und findet bei der Eingabe von `pc` oder `PC` jeweils beides. Ein Platzhalter (`*`) wird nicht unterstützt, jedoch findet die Suche nach `CD` sowohl `ABCDE` als auch `ABCD` oder `CDEF`.\nDie folgenden Felder werden alle gesamtheitlich durchsucht:\n- Namen des Geräts (`name`)\n- ID des Geräts (`id`)\n- Gewerk des Geräts (`function`)\n- ID der Datenpunkte des Geräts (`stateId`)\n- Label der Datenpunkte des Geräts (`stateLabel`)\n- State sowie Action Trigger der Datenpunkte des Geräts (`state` / `action`)\n- Hersteller (`manufacturer`)\n\nDie Felder können auch dediziert durchsucht werden indem z.B. `-name:PC` oder `-function:Licht` eingegeben wird. Es können auch mehrere dedizierte Felder durchsucht werden, z. B. `-name:PC -function:Licht` (also einfach hintereinander weg schreiben).",
	
	"#DeviceGroup.title": "Die Geräte einer Gruppe",
	"#DeviceGroup.content": "Das Öffnen einer Geräte-Gruppe zeigt alle Geräten mit Name, Gewerk, Hersteller und den angelegten Datenpunkten (States). Das Gerät kann kopiert oder bearbeitet werden.",
	
	"#DeviceAdd.title": "Ein Gerät hinzufügen",
	"#DeviceAdd.content": "Über den Button Geräte hinzufügen können neue Geräte angelegt werden, insbesondere wenn diese nicht importiert werden konnten oder sehr individuell sind (z. B. eigene Datenpunkte oder spezielle Adapter).\n\n**Bitte Button klicken zum Fortfahren.**",
	
	"#DeviceOverview.title": "Die Geräte-Anlage / -Bearbeitung",
	"#DeviceOverview.content": "Das Gerät wird zunächst durch einen Namen bezeichnet (z. B. Vitrine oder Licht Vitrine). Ein Label kann genutzt werden, falls die Anzeige in der Visualisierung vom Namen abweicht oder abweichen soll.\n\nDas Gewerk dient der Einordnung des Geräts. Je nach Gewerk greifen bestimmte Standard-Werte bezogen auf Icons bzw. der Darstellung von Datenpunkt-Werten (siehe auch [Wiki](https://github.com/Zefau/ioBroker.jarvis/wiki/de-Functions)).\n\nDie Option `Popup unterdrücken` verhindern, dass beim Klick auf das Gerät die Geräte-Details geöffnet werden.",
	
	"#DeviceStateAdd.title": "Einen Datenpunkt hinzufügen",
	"#DeviceStateAdd.content": "Die Datenpunkte machen das Gerät aus. Sie bestimmen, was angezeigt wird. Der hier vergebene Bezeichner kann frei gewählt werden (es wird Kleinschreibung empfohlen). Dieser dient der Identifizerung des Datenpunkts bei der Konfiguration des Layout und steht repräsentativ für den gesamten Datenpunkt.",
	
	"#DeviceState.title": "Die Datenpunkt Konfiguration (Anzeige und Trigger)",
	"#DeviceState.content": "Das Herz des Geräts ist die Konfiguration des Datenpunkts.\n\nDie Felder `Datenpunkt (Anzeige)` / `Datenpunkt (Trigger)`: Der ioBroker Datenpunkt, dessen Wert angezeigt werden soll (`Anzeige`) bzw. der ioBroker Datenpunkt, der geschaltet werden soll (`Trigger`). In der Regel dergleiche Datenpunkt. Diese können sich bei Bedarf aber auch unterscheiden, wenn ein anderer Datenpunkt angezeigt als geschaltet werden soll (z. B. bei HomeMatic IP aufgrund verschiedener Kanäle).",
	
	"#DeviceDisplay.title": "Die Datenpunkt Konfiguration (Anzeigevariante)",
	"#DeviceDisplay.content": "Das Feld `Anzeigevariante`: In Abhängigkeit des Datenpunkt-Werts kann ein bestimmter Text angezeigt werden, z. B. statt `true` wird `offen` oder statt `false` wird `geschlossen` gezeigt. Dies erfolgt mittels JSON-Eingabe: `{ \"true\": \"offen\", \"false\": \"geschlossen\" }`",
	
	"#DeviceJSON.title": "Die Datenpunkt Konfiguration (JSON Felder)",
	"#DeviceJSON.content": "Die Felder `Datenpunkt Stil` / `Einheit` / `Icon` / `Icon Stil` (alle JSON Felder): Diese Logik (Text bzw. Stil in Abhängigkeit des Datenpunkt-Werts) kann für alle JSON-Felder genutzt werden. So kann z. B. ein unterschiedliches Icon (alle Material Design Icons) für offen / geschlossen genutzt werden: `{ \"true\": \"mdi-window-open-variant\", \"false\": \"mdi-window-closed-variant\" }`. Weitere [Erläuterungen im Wiki](https://github.com/Zefau/ioBroker.jarvis/wiki/de-Devices#json-eingabefelder).",
	
	"#DeviceProperties.title": "Die Datenpunkt Konfiguration (Eigenschaften)",
	"#DeviceProperties.content": "Das Feld `Datenpunkt (Eigenschaften)`: Hiermit können die Standardwerte für die visuellen Komponenten (Body Element `bodyElement` sowie Action Element `actionElement`) überschrieben werden, z. B. mit `min` (Standard `0`) / `max` (Standard `100`) die unteren und oberen möglichen Werte eines Geräts überschrieben werden. Weitere [Erläuterungen im Wiki](https://github.com/Zefau/ioBroker.jarvis/wiki/de-Devices#datenpunkt-eigenschaften)."
}
