let Hero = function() {
	let name = "";
	let alignment = "Invalid";
	let checkAlignment = ["Neutral", "Good", "Evil"];
	let armorClass = 10;
	let hitPoints = 5;

	this.getName = function(){
		return name;
	};

	this.setName = function(newName){
		name = newName;
	};

	this.getAlignment = function() {
		return alignment;
	}

	this.setAlignment = function(newAlignment) {
		checkAlignment.forEach(function(align) {
			if (align === newAlignment){
			 alignment = newAlignment;		
			}
		});
	};

	this.getArmorClass = function() {
		return armorClass;
	}

	this.getHitPoints = function () {
		return hitPoints;
	}

	this.attack = function() {
		return 18;
	}
};


