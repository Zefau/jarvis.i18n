export default {
	"HistoryGraph#description": "Отображение исторических данных (из ioBroker.history) в виде графика с использованием Echarts.", // Displays the historical values (e.g. from ioBroker.history) as a chart using Echarts.
	
	// Config
	"config#HistoryGraph#chartType#label": "Тип графика", // Type of Chart
	"config#HistoryGraph#maxEntries#label": "Максимальное количество данных", // Max. Entries
	"config#HistoryGraph#maxEntries#description": "Максимальное колтичество данных для отображения (слишком большое количество данных замедлит отображение страницы)", // Maximum numbers of entries to show (too many entries slow down the page).
	"config#HistoryGraph#legend#label": "Легенда", // Legend
	"config#HistoryGraph#legend#options#top": "сверху", // top
	"config#HistoryGraph#legend#options#bottom": "снизу", // bottom
	"config#HistoryGraph#legend#options#off": "Отключена", // off
	"config#HistoryGraph#zoom#label": "Отображать кнопки масштаба", // Show Zoom buttons
	"config#HistoryGraph#dataZoom#label": "Слайдер масштаба", // Data-Zoom Slider
	"config#HistoryGraph#dataZoom#description": "",
	"config#HistoryGraph#showSymbol#label": "Отображать маркеры на графике", // Show Markers in Chart-Lines
	
	"config#HistoryGraph#timeType#label": "Режим", // Mode
	"config#HistoryGraph#timeTimelineDate#label": "Интервал дат с фиксированными датами", // Time Range with fixed dates
	"config#HistoryGraph#timeReviewValue#label": "Глубина отображения по умолчанию", // Default time looking back
	"config#HistoryGraph#timeReviewUnit#label": "Размерность глубины отображения по умотчению", // Default unit looking back
	"config#HistoryGraph#timeConfigurable#label": "Настройка пользователем", // Configurable in Frontend
	
	"config#HistoryGraph#xAxis#label": "Настройка оси x", // Configuration of x axis
	"config#HistoryGraph#xAxis#info": "открыть опции настройки", // open configuration options
	"config#HistoryGraph#yAxis#label": "Настройка оси y", // Configuration of y axis
	"config#HistoryGraph#yAxis#info": "открыть опции настройки", // open configuration options
	"config#HistoryGraph#dateFormat#label": "Формат даты оси x", // Date format of x axis
	
	// Values
	"config#HistoryGraph#ack#select#both": "оба (true и false)",
	"config#HistoryGraph#ack#select#true": "подтвержден (true)",
	"config#HistoryGraph#ack#select#false": "не подтвержден (false)",
	
	"Timeline": "Временная шкала",
	"Review": "Обзор"
}
