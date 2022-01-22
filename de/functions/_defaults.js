export default {
	"_defaults": "Sonstige",
	"other": "Sonstige",
	
	// Config
	"config#componentOptions#_all#val#label": "Datenpunkt-Wert",
	"config#componentOptions#_all#val#info": "Datenpunkt-Wert basiert auf dem Rohwert (val) oder dem durch die Anzeige-Variante verarbeitetem Wert (value)",
	"config#componentOptions#_all#val#options#val": "Rohwert (val)",
	"config#componentOptions#_all#val#options#value": "Verarbeiteter Wert (value)",
	
	"config#componentOptions#SwitchAction#colorOn#label": "Farbe (an)",
	"config#componentOptions#SwitchAction#colorOff#label": "Farbe (aus)",
	"config#componentOptions#SwitchAction#color#info": "Material-Brand-Farbe (keine Hex-Codes), siehe https://quasar.dev/style/color-palette#Color-List",
	
	"config#componentOptions#SwitchAction#triggerOnValue#label": "Wert Aktivierung",
	"config#componentOptions#SwitchAction#triggerOnValue#info": "Der Wert der für die Aktivierung gesetzt werden soll",
	"config#componentOptions#SwitchAction#triggerOffValue#label": "Wert Deaktivierung",
	"config#componentOptions#SwitchAction#triggerOffValue#info": "Der Wert der für die Deaktivierung gesetzt werden soll",
	
	"config#componentOptions#LevelBody#step#label": "Schrittweite (auswählbare Schritte / Markierungen)",
	"config#componentOptions#LevelBody#step#info": "Die Detailgenauigkeit der einzelnen Schritte des Sliders. Diese Detailgenauigkeit der Schritte bezieht sich auf mögliche Auswahl von Werten, NICHT die angezeigten Markierungen. Eine Schrittweite von z. B. 1 ermöglicht das Auswählen von 1, 2, 3, etc.; wohingegen eine Schrittweite von z. B. 2 das Auswählen von 1, 3, 5, etc. steuert. Die min / max Werte sind im Gerät (unter Eigenschaften) zu konfigurieren.",
	"config#componentOptions#LevelBody#showMarkersSteps#label": "Schritte / Markierung zeigen",
	"config#componentOptions#LevelBody#showMarkersSteps#info": "Zeigt für die Markierungen der Schtittweite die jeweilge numerische Längenangabe",
	"config#componentOptions#LevelBody#markStep#label": "Anzahl der Markierungen",
	"config#componentOptions#LevelBody#markStep#info": "Die Anzahl der Markierungen des Sliders, die gezeigt werden sollen. Die Berechnung erfolgt auf Basis der min / max Werte: (max-min) / Markierungen. Für min=5, max=35 und einem hier definierten Wert für die Markierungen von 10 = (35-5)/10 = jede 3. Schrittweite eine Markierung Zusätzlich wird der 0-Punkt immer angezeigt.",
	"config#componentOptions#LevelBody#unit#label": "Geräte-Einheit anzeigen",
	"config#componentOptions#LevelBody#unit#info": "Zeigt die Geräte-Einheit in den Markierungen",
	
	"config#componentOptions#CustomTextBody#text#label": "Eigener Text",
	"config#componentOptions#LastChangeBody#time#label": "Zeitdarstellung",
	"config#componentOptions#LastChangeBody#time#info": "Die letzte Änderung bezieht sich auf die Zeit der letzten Veränderung des Wertes im Datenpunkt. Der Zeitstempel ist die letzte Aktualisierung des Datenpunkts der ggf. ohne Änderung des Wertes geschah.",
	"config#componentOptions#LastChangeBody#timeFormat#label": "Zeitformat LastChangeBody",
	"config#componentOptions#LastChangeBody#timeFormat#info": "Globales Zeitformat der LastChangeBody Komponente. Für mögliche Werte, siehe date-fns Dokumentation.",
	
	"config#componentOptions#IconButtonAction#pushButton#label": "Taster",
	"config#componentOptions#IconButtonAction#pushButton#info": "Button als Taster verwenden",
	"config#componentOptions#IconButtonAction#flat#label": "Stil",
	"config#componentOptions#IconButtonAction#flat#info": "Zeige Button mit (false) oder ohne Umrandung (true)",
	"config#componentOptions#IconButtonAction#iconTurnOn#label": "Icon (an)",
	"config#componentOptions#IconButtonAction#iconTurnOff#label": "Icon (aus)",
	"config#componentOptions#SwitchAction#icon#info": "nur Material Design Icons sind möglich!",
	"config#componentOptions#IconButtonAction#showState#label": "Zeige nur Datenpunkt Wert",
	"config#componentOptions#IconButtonAction#showState#info": "Zeigt nur den Datenpunkt Wert (wenn true) oder nur den Button (wenn Wert false)",
	"config#componentOptions#IconButtonAction#buttonSize#label": "Button Größe",
	"config#componentOptions#IconButtonAction#buttonSize#info": "Größe des Buttons",
	
	"config#componentOptions#IconState#iconTurnOn#label": "Icon (an)",
	"config#componentOptions#IconState#iconTurnOff#label": "Icon (aus)",
	
	"config#componentOptions#ButtonAction#labelTurnOn#label": "Label (an)",
	"config#componentOptions#ButtonAction#labelTurnOff#label": "Label (aus)",
	
	// States
	"defaults#off": "aus",
	"defaults#on": "an",
	"defaults#low": "niedrig",
	"defaults#full": "voll",
	"defaults#reachable": "erreichbar",
	"defaults#notreachable": "nicht erreichbar",
	"defaults#firmware#true": "Update verfügbar",
	"defaults#firmware#false": "kein Update",
	
	"Last Change": "letzte Änderung",
	"Last Update": "letzte Aktualisierung",
	"unreach": "Erreichbarkeit",
	"reachability": "Erreichbarkeit",
	"reachable": "erreichbar",
	"not reachable": "nicht erreichbar",
	"lowBattery": "Batterie",
	"full": "voll",
	"low": "niedrig",
	
	// Component
	"Display attribute of state %s must be defined": "Display Attribut des Datenpunkts %s muss definiert werden"
}
