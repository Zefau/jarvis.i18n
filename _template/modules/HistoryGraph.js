export default {
	"HistoryGraph#description": "", // Displays the historical values (e.g. from ioBroker.history) as a chart using Echarts.
	
	// Config
	"config#HistoryGraph#chartType#label": "", // Type of Chart
	"config#HistoryGraph#maxEntries#label": "", // Max. Entries
	"config#HistoryGraph#maxEntries#description": "", // Maximum numbers of entries to show (too many entries slow down the page).
	"config#HistoryGraph#legend#label": "", // Legend
	"config#HistoryGraph#legend#options#top": "", // top
	"config#HistoryGraph#legend#options#bottom": "", // bottom
	"config#HistoryGraph#legend#options#off": "", // off
	"config#HistoryGraph#zoom#label": "", // Show Zoom buttons
	"config#HistoryGraph#dataZoom#label": "", // Data-Zoom Slider
	"config#HistoryGraph#dataZoom#description": "",
	"config#HistoryGraph#showSymbol#label": "", // Show Markers in Chart-Lines
	
	"config#HistoryGraph#timeType#label": "", // Mode
	"config#HistoryGraph#timeTimelineDate#label": "", // Time Range with fixed dates
	"config#HistoryGraph#timeReviewValue#label": "", // Default time looking back
	"config#HistoryGraph#timeReviewUnit#label": "", // Default unit looking back
	"config#HistoryGraph#timeConfigurable#label": "", // Configurable in Frontend
	
	"config#HistoryGraph#xAxis#label": "", // Configuration of x axis
	"config#HistoryGraph#xAxis#info": "", // open configuration options
	"config#HistoryGraph#yAxis#label": "", // Configuration of y axis
	"config#HistoryGraph#yAxis#info": "", // open configuration options
	"config#HistoryGraph#dateFormat#label": "", // Date format of x axis
	"config#HistoryGraph#callback#label": "", // Callback
	"config#HistoryGraph#callback#info": "", // Modify the value using a callback function with the parameter value, timestamp and index
	"config#HistoryGraph#series#label": "", // Configuration of the serie
	"config#HistoryGraph#series#info": "", // open configuration options
	
	// Values
	"config#HistoryGraph#ack#select#both": "", // both (true and false)
	"config#HistoryGraph#ack#select#true": "", // acknowledged (only true)
	"config#HistoryGraph#ack#select#false": "", // not acknowledged (only false)
	
	"Timeline": "",
	"Review": ""
}
