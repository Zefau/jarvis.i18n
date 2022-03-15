export default {
	"iFrame#description": "Отображает содержимое другого сайта как iFrame", // Displays contents from another website as iFrame.
	
	// Config
	"config#iFrame#url#label": "URL", // URL
	"config#iFrame#sandbox#label": "Включить песочницу", // Enable Sandbox
	"config#iFrame#sandbox#info": "Атрибуты песочницы включают дополнительный набор ограничений для контента фрейма", // The sandbox attribute enables an extra set of restrictions for the content in the iframe
	"config#iFrame#sandboxOptions#label": "Опции песочницы", // Sandbox options
	"config#iFrame#keepalive#label": "Поддерживать соединение", // Keep Alive
	"config#iFrame#keepalive#info": "Сохранять фрейм открытым в фоне если вкладка не активна (true). В противном случае фрейм будет обновлен (false).", // Whether to keep iFrame opened in the background when the tab is not active (true). Otherwise the iFrame will be re-rendered (false).
	"config#iFrame#refresh#label": "Интервал обновления", // Refresh Interval
	"config#iFrame#refresh#info": "Интервал обновления фрейма в секундах. Значение 0 отключает обновление (рекумендуется для статического контента" // Interval (in seconds) the iFrame will be refreshed. The value 0 turns this off (recommended with static contents).
}
