export default {
	"HistoryGraph#description": "Stellt historische Werte (z.B. aus ioBroker.history) grafisch als Chart mittels Echarts dar.",
	
	// Config
	"config#HistoryGraph#chartType#label": "Chart Typ",
	"config#HistoryGraph#maxEntries#label": "Maximale Einträge",
	"config#HistoryGraph#maxEntries#description": "Maximale Einträge, die im Chart dargestellt werden sollen (zu viele Einträge verlangsamen die Seite).",
	"config#HistoryGraph#legend#label": "Legende",
	"config#HistoryGraph#legend#options#top": "oben",
	"config#HistoryGraph#legend#options#bottom": "unten",
	"config#HistoryGraph#legend#options#off": "aus",
	"config#HistoryGraph#zoom#label": "Zoom-Buttons anzeigen",
	"config#HistoryGraph#dataZoom#label": "Daten-Zoom Slider",
	"config#HistoryGraph#dataZoom#description": "Daten-Zoom in Prozent von 0 (ausblenden) bzw. 1 bis 100.",
	"config#HistoryGraph#showSymbol#label": "Markierungen / Symbole in Chart-Linie zeigen",
	
	"config#HistoryGraph#timeType#label": "Modus",
	"config#HistoryGraph#timeTimelineDate#label": "Zeitleiste mit festen Datumsangaben",
	"config#HistoryGraph#timeReviewValue#label": "Standard-Zeit des historischen Rückblicks",
	"config#HistoryGraph#timeReviewUnit#label": "Standard-Einheit des historischen Rückblicks",
	"config#HistoryGraph#timeConfigurable#label": "Konfigurierbar im Frontend",
	
	"config#HistoryGraph#xAxis#label": "Konfiguration der x-Achse",
	"config#HistoryGraph#xAxis#info": "öffne Konfigurationsoptionen",
	"config#HistoryGraph#yAxis#label": "Konfiguration der y-Achse",
	"config#HistoryGraph#yAxis#info": "öffne Konfigurationsoptionen",
	"config#HistoryGraph#dateFormat#label": "Datumsformat der x-Achse",
	"config#HistoryGraph#callback#label": "Callback",
	"config#HistoryGraph#callback#info": "Mittels Callback-Funktion (Parameter Wert, Zeitstempel und Index) den Wert verändert",
	"config#HistoryGraph#series#label": "Konfiguration der Serie",
	"config#HistoryGraph#series#info": "öffne Konfigurationsoptionen",
	
	// Values
	"config#HistoryGraph#ack#select#both": "beide (true und false)",
	"config#HistoryGraph#ack#select#true": "bestätigt (nur true)",
	"config#HistoryGraph#ack#select#false": "nicht bestätigt (nur false)",
	
	"Timeline": "Zeitleiste",
	"Review": "Rückblick"
}
