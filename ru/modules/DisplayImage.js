export default {
	"DisplayImage#description": "Отображает изображение, расположенное по ссылке или закодированное в формате base64", // Displays a picture from an URL or a base64 value.
	
	// Config
	"config#DisplayImage#url#label": "Ссылка на изображение или данные в формате base64", // URL or base64 value of the image
	"config#DisplayImage#url#info": "Ссылка на изображение или данные в формате base64 (если заполнено, устройство, указаннон ниже, будет игнорироваться)", // URL or base64 value of the image to show (if this is given, device set below will be ignored).
	"config#DisplayImage#size#label": "Размер / Адоптация", // Size / Adaption
	"config#DisplayImage#size#info": "Определяет, как изображение будет адоптировано к виджету", // Defines how the image is adapted to the widget.
	"config#DisplayImage#size#option#unset": "без адопьации (изображение сохраняет оригинальный размер)", // no adaption (image keeps original size)
	"config#DisplayImage#size#option#fit": "растянуть на виджет (изображение НЕ сохраняет пропорции)", // fit to widget (image does NOT keep size-relation)
	"config#DisplayImage#size#option#fitx": "растянуть по ширине виджета (изображение сохраняет пропорции)", // fit to widget-width (image keeps size-relation)
	"config#DisplayImage#size#option#fity": "растянуть по высоте виджета (изображение сохраняет пропорции)", // fit to screen-height (image keeps size-relation)
	"config#DisplayImage#repeat#label": "Повтор", // Repetition
	"config#DisplayImage#repeat#info": "Определяет, как изображение будет повторяться, если оно меньше виджета", // Defines whether the image shall be repeated / duplicated in case it is smaller than the widget.
	"config#DisplayImage#repeat#option#norepeat": "не повторять", // no repeat
	"config#DisplayImage#repeat#option#repeat": "повторять (горизонтально и вертикально)", // repeat (horizontally and vertically)
	"config#DisplayImage#repeat#option#repeatx": "повторять (горизонтально)", // repeat (horizontally)
	"config#DisplayImage#repeat#option#repeaty": "повторять (вертикально)", // repeat (vertically)
	"config#DisplayImage#refresh#label": "Интервал обновления", // Refresh Interval
	"config#DisplayImage#refresh#info": "Интервал обновления изображения (в секундах). Если указано 0, обновление будет отключено (рекомендуется для статических изображений)", // Interval (in seconds) the image will be refreshed. The value 0 turns this off (recommended with static contents).
	"config#DisplayImage#refreshMethod#label": "Метод обновления", // Refresh Method
	"config#DisplayImage#refreshMethod#info": "Чтобы обновить изображение, необходимо изменить URL. Это может быть сделано либо добавлением случайной строки, либо пробела к URL-адресу", // In order to refresh the image it is required to change the URL. This can be done be either attaching a random string or a whitespace to the URL.
	"config#DisplayImage#refreshMethod#option#random": "Добавить случайную строку к URL-адресу", // Attach random string to URL
	"config#DisplayImage#refreshMethod#option#whitespace": "Добавить пробел к URL-адресу" // Attach whitespace to URL
	
}
