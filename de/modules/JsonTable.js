export default {
	"JsonTable#description": "Zeigt eine Tabelle auf Basis einer JSON-Struktur an.",
	
	// Config
	"config#JsonTable#thead#label": "Spalten",
	"config#JsonTable#thead#description": "Konfiguration der anzuzeigenden Spalten mit den Optionen: label, align [ left | center | right ], sortable [ true | false ], noWrap [ true | false ], format [ val => {'{}'} ], disablePadding [ true | false ], width, style, headerStyle, classes, visible [ true | false ]",
	"config#JsonTable#thead#placeholder": "[{'{ \"field\": \"originale Spalten-ID (muss eindeutig sein)\", \"label\": \"eigener Spaltenbezeichner\", \"align\": \"[ left | center | right ]\", \"sortable\": \"[ true | false ]\", \"format\": val => {}, \"classes\": \"eigeneCssKlasse\" }'}]",
	
	"config#JsonTable#object#label": "Objekt-Modus",
	"config#JsonTable#object#description": "Quelldaten liegen als Objekt {'{ \"key\": \"value\", ... }'} und nicht als Liste / Array vor",
	
	"config#JsonTable#sortable#label": "Sortierung",
	"config#JsonTable#sortable#description": "Möglichkeit zur Sortierung (de)aktivieren",
	
	"config#JsonTable#sortColumn#label": "Spalte (Sortierung)",
	"config#JsonTable#sortColumn#description": "Spalte für die initiale Sortierung	",
	
	"config#JsonTable#sortDirection#label": "Sortierrichtung",
	"config#JsonTable#sortDirection#description": "Sortierrichtung (aus = aufsteigend, an = absteigend)",
	
	"config#JsonTable#rowsPerPage#label": "Datensätze je Seite",
	"config#JsonTable#rowsPerPage#description": "Anzahl der Datensätze je Seite (0 = alle)",
	
	"config#JsonTable#max#label": "Max. Einträge",
	"config#JsonTable#max#description": "maximale Einträge die gezeigt werden sollen (0 = aus)",
	
	"config#JsonTable#dense#label": "Kompakte Ansicht",
	"config#JsonTable#dense#description": "Aktiviere kompakte Ansicht für die Zeilen",
	
	"config#JsonTable#hideFilter#label": "Suchleiste verstecken",
	"config#JsonTable#hideColumnsSelector#label": "Spaltenauswahl verstecken",
	"config#JsonTable#hideFullscreenButton#label": "Vollbild-Button verstecken"
}
