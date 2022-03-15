export default {
	"keywords#blind": "слепой, уровень, затвор, ролик, вверх, вниз", // blind, level, shutter, roller, up, down
	"blind": "слепой",
	
	// Config
	"config#componentOptions#BlindLevelAction#activityState#label": "Статус Активность", // State Activity
	"config#componentOptions#BlindLevelAction#activityState#info": "Статус, отражающий активность", // State which reflects the activity
	"config#componentOptions#BlindLevelAction#stopAction#label": "Статус Стоп", // State Stop
	"config#componentOptions#BlindLevelAction#stopAction#info": "Статус (логический, true/false), вызывающий команду СТОП ", // State (boolean true/false) which triggers the STOP command
	
	// States
	"blind#activity": "Активность", // Activity
	"blind#activity#true": "движение", // moving
	"blind#activity#false": "никто", // none
	"blind#level": "Уровень", // Level
	"blind#level2": "Ламель" // Lamella
}
