export default {
	"_defaults": "Другой",
	"other": "Другой",
	
	// Config
	"config#componentOptions#_all#val#label": "Значение статуса",
	"config#componentOptions#_all#val#info": "Необработанное значение статуса (val), или обработанное значение статуса с учетом варианта отображения (value)",
	"config#componentOptions#_all#val#options#val": "Необработанное значение",
	"config#componentOptions#_all#val#options#value": "Обработанное значение",
	"config#componentOptions#_all#ack#label": "",
	"config#componentOptions#_all#ack#info": "",
	"config#componentOptions#_all#ack#options#true": "",
	"config#componentOptions#_all#ack#options#false": "",
	
	"config#componentOptions#SwitchAction#colorOn#label": "Цвет (включено)", // Color (on)
	"config#componentOptions#SwitchAction#colorOff#label": "Цвет (выключено)", // Color (off)
	"config#componentOptions#SwitchAction#color#info": "Material-Brand-Color (шестнадцатеричные кодв не поддерживаются)", // Material-Brand-Color (Hex-Codes are not supported), siehe http
	
	"config#componentOptions#SwitchAction#triggerOnValue#label": "Значение активации", // Activation value
	"config#componentOptions#SwitchAction#triggerOnValue#info": "Значение для активации", // Value to set on activation
	"config#componentOptions#SwitchAction#triggerOffValue#label": "Значение деактивации", // Deactivation value
	"config#componentOptions#SwitchAction#triggerOffValue#info": "Значение для деактивации", // Value to set on deactivation
	
	"config#componentOptions#LevelBody#unit#label": "Использование единиц измерения устройства", // Use Device Unit
	"config#componentOptions#LevelBody#unit#info": "Отображение единиц измерения устройства на маркерах", // Shows device unit with the markers
	"config#componentOptions#LevelBody#step#label": "Маркер шага (Выбор)", // Marker Steps / Granularity (Selectable)
	"config#componentOptions#LevelBody#step#info": "Шаг, с которым можно выбирать значения слайдера. Шаг определяет, какие значения доступны для выбора и отображаются на слайдере. Шаг 1, например, позволяет выбрать значения 1, 2, 3..., шаг 2 позволяет выбрать 1, 3, 5... Минимальное и максимальное значения определяются в настройках устройства", // The granularity with which the slider can step through values. This granularity regulates which values are possible to pick and NOT which are shown as marks. A granularity of e.g. 1 allows to select 1, 2, 3, etc.; whereas e.g. 2 allows to select 1, 3, 5, etc.; Minimum (min) and maximum (max) values are defined in the device itself (in the properties field).
	"config#componentOptions#LevelBody#showMarkersSteps#label": "Показать шаг маркера", // Show Marker Steps
	"config#componentOptions#LevelBody#showMarkersSteps#info": "Указывает маркеры шагов с номарами их позиции", // Indicates the markers of the steps with its position number
	"config#componentOptions#LevelBody#markStep#label": "Маркер шага (Отображение)", // Marker Steps / Granularity (Displayed)
	"config#componentOptions#LevelBody#markStep#info": "Отображение шага на слайдере. Шаг определяет количество маркеров для отображения. Расчет базируется на минимальном/максимальном значениях, определенныхв настройках усстройства", // The displayed granularity with which the slider. This granularity regulates the number of marks to be displayed. The calculation is based on min/max values of the device
	"config#componentOptions#LevelBody#markers#label": "",
	"config#componentOptions#LevelBody#markers#info": "",
	"config#componentOptions#LevelBody#markerHeight#label": "",
	"config#componentOptions#LevelBody#thumbSize#label": "",
	
	"config#componentOptions#CustomTextBody#text#label": "Ваш текст", // Own custom text
	"config#componentOptions#LastChangeBody#time#label": "Время", // Time
	"config#componentOptions#LastChangeBody#time#info": "",
	"config#componentOptions#LastChangeBody#timeFormat#label": "Формат времени последнего изменения (LastChangeBody)", // Timeformat LastChangeBody
	"config#componentOptions#LastChangeBody#timeFormat#info": "Глобальный формат времени компонента LastChangeBody. Возможные форматы можно узнать в документации date-fns", // Globale time format of the LastChangeBody component. For possible format values, see date-fns documentation.
	
	"config#componentOptions#IconButtonAction#pushButton#label": "Кнопка", // Push Button
	"config#componentOptions#IconButtonAction#pushButton#info": "Использовать переключатель как кнопку", // Use button as push button
	"config#componentOptions#IconButtonAction#flat#label": "Стиль", // Style
	"config#componentOptions#IconButtonAction#flat#info": "Отображать кнопку с (false) или без (true) окантовки", // Show button with (false) or without border (true)
	"config#componentOptions#IconButtonAction#iconTurnOn#label": "Иконка (включено)", // Icon (on)
	"config#componentOptions#IconButtonAction#iconTurnOff#label": "Иконка (выключено)", // Icon (off)
	"config#componentOptions#SwitchAction#icon#info": "возможно использование только иконок Material Design!", // only Material Design Icons are possible!
	"config#componentOptions#IconButtonAction#showState#label": "Отображать только значение статуса", // Show only state value
	"config#componentOptions#IconButtonAction#showState#info": "Отображать только значение статуса (true) или только кнопку (false)", // Shows only the state value (on true) or only the button (on false)
	"config#componentOptions#IconButtonAction#buttonSize#label": "Размер кнопки", // Button Size
	"config#componentOptions#IconButtonAction#buttonSize#info": "Размер кнопки", // Size of the button
	
	"config#componentOptions#IconState#iconTurnOn#label": "Иконка (включено)", // Icon (on)
	"config#componentOptions#IconState#iconTurnOff#label": "Иконка (выключено)", // Icon (off)
	
	"config#componentOptions#ButtonAction#labelTurnOn#label": "Подпись (включено)", // Label (on)
	"config#componentOptions#ButtonAction#labelTurnOff#label": "Подпись (выключено)", // Label (off)
	
	"config#componentOptions#TimePicker#mask#label": "",
	"config#componentOptions#TimePicker#mask#info": "",
	"config#componentOptions#TimePicker#landscape#label": "",
	"config#componentOptions#TimePicker#landscape#info": "",
	"config#componentOptions#TimePicker#minimal#label": "",
	//"config#componentOptions#TimePicker#minimal#info": "",
	"config#componentOptions#TimePicker#nowButton#label": "",
	"config#componentOptions#TimePicker#nowButton#info": "",
	"config#componentOptions#TimePicker#format24h#label": "",
	"config#componentOptions#TimePicker#format24h#info": "",
	"config#componentOptions#TimePicker#withSeconds#label": "",
	"config#componentOptions#TimePicker#withSeconds#info": "",
	
	"config#componentOptions#DatePicker#today-btn#label": "",
	"config#componentOptions#DatePicker#today-btn#info": "",
	
	// States
	"defaults#off": "выключено", // off
	"defaults#on": "включено", // on
	"defaults#low": "низкий", // low
	"defaults#full": "полный", // full
	"defaults#reachable": "доступно", // reachable
	"defaults#notreachable": "не доступно", // not reachable
	"defaults#firmware#true": "доступно обновление", // update available
	"defaults#firmware#false": "обновление не доступно", // no update
	
	"Last Change": "Последнее изменение",
	"Last Update": "Последнее обновление",
	"unreach": "недоступно",
	"reachability": "доступность",
	"reachable": "доступно",
	"not reachable": "недоступно",
	"lowBattery": "низкий заряд батареи",
	"full": "полный",
	"low": "низкий",
	
	// Component
	"Display attribute of state %s must be defined": "Должно быть определено отображение атрибута статуса %s"
}
