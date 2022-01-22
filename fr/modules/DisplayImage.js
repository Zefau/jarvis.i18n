export default {	"DisplayImage#description": "", // Displays a picture from an URL or a base64 value.
		// Config	"config#DisplayImage#url#label": "", // URL or base64 value of the image
	"config#DisplayImage#url#info": "", // URL or base64 value of the image to show (if this is given, device set below will be ignored).
	"config#DisplayImage#size#label": "", // Size / Adaption
	"config#DisplayImage#size#info": "", // Defines how the image is adapted to the widget.
	"config#DisplayImage#size#option#unset": "", // no adaption (image keeps original size)
	"config#DisplayImage#size#option#fit": "", // fit to widget (image does NOT keep size-relation)
	"config#DisplayImage#size#option#fitx": "", // fit to widget-width (image keeps size-relation)
	"config#DisplayImage#size#option#fity": "", // fit to screen-height (image keeps size-relation)
	"config#DisplayImage#repeat#label": "", // Repetition
	"config#DisplayImage#repeat#info": "", // Defines whether the image shall be repeated / duplicated in case it is smaller than the widget.
	"config#DisplayImage#repeat#option#norepeat": "", // no repeat
	"config#DisplayImage#repeat#option#repeat": "", // repeat (horizontally and vertically)
	"config#DisplayImage#repeat#option#repeatx": "", // repeat (horizontally)
	"config#DisplayImage#repeat#option#repeaty": "", // repeat (vertically)
	"config#DisplayImage#refresh#label": "", // Refresh Interval
	"config#DisplayImage#refresh#info": "", // Interval (in seconds) the image will be refreshed. The value 0 turns this off (recommended with static contents).
	"config#DisplayImage#refreshMethod#label": "", // Refresh Method
	"config#DisplayImage#refreshMethod#info": "", // In order to refresh the image it is required to change the URL. This can be done be either attaching a random string or a whitespace to the URL.
	"config#DisplayImage#refreshMethod#option#random": "", // Attach random string to URL
	"config#DisplayImage#refreshMethod#option#whitespace": "" // Attach whitespace to URL
	}