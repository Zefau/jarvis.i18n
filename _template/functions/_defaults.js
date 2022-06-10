export default {
	"_defaults": "",
	"other": "",
	
	// Config
	"config#componentOptions#_all#val#label": "", // State Value
	"config#componentOptions#_all#val#info": "", // The state value can either be the raw value (from the state) or the processed value (by display jarvis attributes).
	"config#componentOptions#_all#val#options#val": "", // Raw (val)
	"config#componentOptions#_all#val#options#value": "", // Processed (value)
	"config#componentOptions#_all#ack#label": "", // State-Acknowledge
	"config#componentOptions#_all#ack#info": "", // Command has ack flag as false and will be sent by user (over vis, javascript-adapter, admin) to control the devices or specific adapter. Status has ack flag as true and indicate that it is from device or service.
	"config#componentOptions#_all#ack#options#true": "", // Status (ack is true)
	"config#componentOptions#_all#ack#options#false": "", // Command (ack is false)
	
	"config#componentOptions#SwitchAction#colorOn#label": "", // Color (on)
	"config#componentOptions#SwitchAction#colorOff#label": "", // Color (off)
	"config#componentOptions#SwitchAction#color#info": "", // Material-Brand-Color (Hex-Codes are not supported), siehe http
	
	"config#componentOptions#SwitchAction#triggerOnValue#label": "", // Activation value
	"config#componentOptions#SwitchAction#triggerOnValue#info": "", // Value to set on activation
	"config#componentOptions#SwitchAction#triggerOffValue#label": "", // Deactivation value
	"config#componentOptions#SwitchAction#triggerOffValue#info": "", // Value to set on deactivation
	
	"config#componentOptions#LevelBody#unit#label": "", // Use Device Unit
	"config#componentOptions#LevelBody#unit#info": "", // Shows device unit with the markers
	"config#componentOptions#LevelBody#step#label": "", // Marker Steps / Granularity (Selectable)
	"config#componentOptions#LevelBody#step#info": "", // The granularity with which the slider can step through values. This granularity regulates which values are possible to pick and NOT which are shown as marks. A granularity of e.g. 1 allows to select 1, 2, 3, etc.; whereas e.g. 2 allows to select 1, 3, 5, etc.; Minimum (min) and maximum (max) values are defined in the device itself (in the properties field).
	"config#componentOptions#LevelBody#showMarkersSteps#label": "", // Show Marker Steps
	"config#componentOptions#LevelBody#showMarkersSteps#info": "", // Indicates the markers of the steps with its position number
	"config#componentOptions#LevelBody#markStep#label": "", // Marker Steps / Granularity (Displayed)
	"config#componentOptions#LevelBody#markStep#info": "", // The displayed granularity with which the slider. This granularity regulates the number of marks to be displayed. The calculation is based on min/max values of the device
	"config#componentOptions#LevelBody#markers#label": "", // Marker Label (Pro)
	"config#componentOptions#LevelBody#markers#info": "", // Callback function to adapt the Marker Label
	"config#componentOptions#LevelBody#markerHeight#label": "", // Height of Slider
	"config#componentOptions#LevelBody#thumbSize#label": "", // Thickness of Slide Button
	
	"config#componentOptions#CustomTextBody#text#label": "", // Own custom text
	"config#componentOptions#LastChangeBody#time#label": "", // Time
	"config#componentOptions#LastChangeBody#time#info": "",
	"config#componentOptions#LastChangeBody#timeFormat#label": "", // Timeformat LastChangeBody
	"config#componentOptions#LastChangeBody#timeFormat#info": "", // Globale time format of the LastChangeBody component. For possible format values, see date-fns documentation.
	
	"config#componentOptions#IconButtonAction#pushButton#label": "", // Push Button
	"config#componentOptions#IconButtonAction#pushButton#info": "", // Use button as push button
	"config#componentOptions#IconButtonAction#flat#label": "", // Style
	"config#componentOptions#IconButtonAction#flat#info": "", // Show button with (false) or without border (true)
	"config#componentOptions#IconButtonAction#iconTurnOn#label": "", // Icon (on)
	"config#componentOptions#IconButtonAction#iconTurnOff#label": "", // Icon (off)
	"config#componentOptions#SwitchAction#icon#info": "", // only Material Design Icons are possible!
	"config#componentOptions#IconButtonAction#showState#label": "", // Show only state value
	"config#componentOptions#IconButtonAction#showState#info": "", // Shows only the state value (on true) or only the button (on false)
	"config#componentOptions#IconButtonAction#buttonSize#label": "", // Button Size
	"config#componentOptions#IconButtonAction#buttonSize#info": "", // Size of the button
	
	"config#componentOptions#IconState#iconTurnOn#label": "", // Icon (on)
	"config#componentOptions#IconState#iconTurnOff#label": "", // Icon (off)
	
	"config#componentOptions#ButtonAction#labelTurnOn#label": "", // Label (on)
	"config#componentOptions#ButtonAction#labelTurnOff#label": "", // Label (off)
	
	"config#componentOptions#TimePicker#mask#label": "", // Mask
	"config#componentOptions#TimePicker#mask#info": "", // Mask (formatting string) used for parsing and formatting value
	"config#componentOptions#TimePicker#landscape#label": "", // Landscape
	"config#componentOptions#TimePicker#landscape#info": "", // Display the component in landscape mode
	"config#componentOptions#TimePicker#minimal#label": "", // Compact
	//"config#componentOptions#TimePicker#minimal#info": "", // Compact Mode
	"config#componentOptions#TimePicker#nowButton#label": "", // Now-Button
	"config#componentOptions#TimePicker#nowButton#info": "", // Display Now Button to fill-in current time // Display Today Button to fill-in current date
	"config#componentOptions#TimePicker#format24h#label": "", // AM/PM or 24 Hours
	"config#componentOptions#TimePicker#format24h#info": "", // Forces 24 hour time display instead of AM/PM system
	"config#componentOptions#TimePicker#withSeconds#label": "", // Seconds
	"config#componentOptions#TimePicker#withSeconds#info": "", // Allow the time to be set with seconds
	
	"config#componentOptions#DatePicker#today-btn#label": "", // Today-Button
	"config#componentOptions#TimePicker#nowButton#info": "",
	
	// States
	"defaults#off": "", // off
	"defaults#on": "", // on
	"defaults#low": "", // low
	"defaults#full": "", // full
	"defaults#reachable": "", // reachable
	"defaults#notreachable": "", // not reachable
	"defaults#firmware#true": "", // update available
	"defaults#firmware#false": "", // no update
	
	"Last Change": "",
	"Last Update": "",
	"unreach": "",
	"reachability": "",
	"reachable": "",
	"not reachable": "",
	"lowBattery": "",
	"full": "",
	"low": "",
	"turn on": "",
	"turn off": "",
	
	// Component
	"Display attribute of state %s must be defined": ""
}
