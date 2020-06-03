// Wait until html is full loaded to run jQuery

// Initiate global variables, arrays, objects
// 1.	variable to store results (Array);
// 2.	variable to store results.join("") (String); 
// 3.	variable to store usersHouse (string);
// 4. 	variable to store resultsDescription (string);
// 5.	variables to store running tally for (E/I/S/N/T/F/J/P) (Number);
// 6.	variable to store key:value pairs (Object);
// 	a. 	Where the key is a possible result;
// 	b.	where the value is an obj, with a key:value pair for house and description;
// 7. 	variable to contain house crests as html element (String);

// Conditionals
// 1. 	Check option user choice, and increment respective variable (GV5);
// 2. 	Check for higher variable from each pair, .push("") letter to resultsArray (GV1);

// Display to DOM
// 1. 	Cache element to new variable to update 
// 		a. HOUSE;
//		b. MBPT;
//		c. DESCRIPTION;
// 2.	Cache element to new variable (w/HTML) to include House Crest;

// Icons
// Hufflepuff crest https://thenounproject.com/term/harry-potter/1704951/
// Slytherin crest https://thenounproject.com/term/harry-potter/1704952/
// Gryffindor crest https://thenounproject.com/term/harry-potter/1704953/
// Ravenclaw crest https://thenounproject.com/term/harry-potter/1704954/
// Sorting hat https://thenounproject.com/term/harry-potter/337533/

const $label = $("label");



const sortingHat = {};





sortingHat.mbptTraits = {
	extrovert: 0,
	introvert: 0,
	sensing: 0,
	intuitive: 0,
	thinking: 0,
	feeling: 0,
	judging: 0,
	perceptive: 0,
};

sortingHat.houses = {
	ENFJ: {
		house: "gryffindor",
		description: "desc"
	},
	ENFP: {
		house: "gryffindor",
		description: "desc"
	},
	ENTP: {
		house: "gryffindor",
		description: "desc"
	},
	ESTP: {
		house: "gryffindor",
		description: "desc"
	},
	ESFJ: {
		house: "hufflepuff",
		description: "desc"
	},
	ESFP: {
		house: "hufflepuff",
		description: "desc"
	},
	ISFJ: {
		house: "hufflepuff",
		description: "desc"
	},
	ISFP: {
		house: "hufflepuff",
		description: "desc"
	},
	ISTP: {
		house: "slytherin",
		description: "desc"
	},
	ENTJ: {
		house: "slytherin",
		description: "desc"
	},
	ESTJ: {
		house: "slytherin",
		description: "desc"
	},
	ISTJ: {
		house: "slytherin",
		description: "desc"
	},
	INFJ: {
		house: "ravenclaw",
		description: "desc"
	},
	INFP: {
		house: "ravenclaw",
		description: "desc"
	},
	INTP: {
		house: "ravenclaw",
		description: "desc"
	},
	INTJ: {
		house: "ravenclaw",
		description: "desc"
	},
}

sortingHat.resultsArray = [];
const _shResultsArray = sortingHat.resultsArray;

sortingHat.resultsString = sortingHat.resultsArray.join("");
const _shResultsString = sortingHat.resultsString;


sortingHat.usersHouse = sortingHat.houses[_shResultsString]["house"];
const _shUsersHouse = sortingHat.usersHouse;


sortingHat.init = function() {
	
	$("input").on("click", function (event) {
	
		const _val = $(this).val();
		
		if (_val) {
			sortingHat.mbptTraits[_val]++;
			console.log(`${_val} is now at ${sortingHat.mbptTraits[_val]}`);
		};
	});

	$("button[type='submit']").on("click", function(event){
		event.preventDefault();

		const _traits = sortingHat.mbptTraits;

		if (_traits["extrovert"] > _traits["introvert"]) {
			_shResultsArray.push("E");
		} else if (_traits["extrovert"] < _traits["introvert"]) {
			_shResultsArray.push("I");
		}

		if (_traits["intuitive"] > _traits["sensing"]) {
			_shResultsArray.push("N");
		} else if (_traits["intuitive"] < _traits["sensing"]) {
			_shResultsArray.push("S");
		}

		if (_traits["thinking"] > _traits["feeling"]) {
			_shResultsArray.push("T");
		} else if (_traits["thinking"] < _traits["feeling"]) {
			_shResultsArray.push("F");
		}
		
		if (_traits["perceptive"] > _traits["judging"]) {
			_shResultsArray.push("P");
		} else if (_traits["perceptive"] < _traits["judging"]) {
			_shResultsArray.push("J");
		}

		
	});
};




console.log(_shResultsString);

console.log(_shUsersHouse);



// const $radio = $("input[type='radio']");
// console.log($radio);

// console.log($("input[type='radio']").val())


$(document).ready(function(){
	sortingHat.init();
});


// 	init: (results) => {
	// 		let usersHouse = this.houses[results]["house"];
	// 		let resultsDescription = this.houses[results]["description"]
// 	}
	
	

// }

// console.log(sortingHat.resultsString);

// console.log(sortingHat.init(sortingHat.resultsString));



	
	
	
	
	



