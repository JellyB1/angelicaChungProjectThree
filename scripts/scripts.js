

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


// Create my namescape object
const sortingHat = {};

// Create an object to hold all my trait variables, keep it clean!
sortingHat.mbptTraits = {
	extrovert: 5,
	introvert: 0,
	sensing: 5,
	intuitive: 0,
	thinking: 5,
	feeling: 0,
	judging: 5,
	perceptive: 0,
};

// Boom! All the data in one spot to parse easily
sortingHat.houses = {
	ENFJ: {
		crest: "./styles/assets/gryffindorCrest.svg",
		house: "Gryffindor",
		description: "desc"
	},
	ENFP: {
		crest: "./styles/assets/gryffindorCrest.svg",
		house: "Gryffindor",
		description: "desc"
	},
	ENTP: {
		crest: "./styles/assets/gryffindorCrest.svg",
		house: "Gryffindor",
		description: "desc"
	},
	ESTP: {
		crest: "./styles/assets/gryffindorCrest.svg",
		house: "Gryffindor",
		description: "desc"
	},
	ESFJ: {
		crest: "./styles/assets/hufflepuffCrest.svg",
		house: "Hufflepuff",
		description: "desc"
	},
	ESFP: {
		crest: "./styles/assets/hufflepuffCrest.svg",
		house: "Hufflepuff",
		description: "desc"
	},
	ISFJ: {
		crest: "./styles/assets/hufflepuffCrest.svg",
		house: "Hufflepuff",
		description: "desc"
	},
	ISFP: {
		crest: "./styles/assets/hufflepuffCrest.svg",
		house: "Hufflepuff",
		description: "desc"
	},
	ISTP: {
		crest: "./styles/assets/slytherinCrest.svg",
		house: "Slytherin",
		description: "desc"
	},
	ENTJ: {
		crest: "./styles/assets/slytherinCrest.svg",
		house: "Slytherin",
		description: "desc"
	},
	ESTJ: {
		crest: "./styles/assets/slytherinCrest.svg",
		house: "Slytherin",
		description: "desc"
	},
	ISTJ: {
		crest: "./styles/assets/slytherinCrest.svg",
		house: "Slytherin",
		description: "desc"
	},
	INFJ: {
		crest: "./styles/assets/ravenclawCrest.svg",
		house: "Ravenclaw",
		description: "desc"
	},
	INFP: {
		crest: "./styles/assets/ravenclawCrest.svg",
		house: "Ravenclaw",
		description: "desc"
	},
	INTP: {
		crest: "./styles/assets/ravenclawCrest.svg",
		house: "Ravenclaw",
		description: "desc"
	},
	INTJ: {
		crest: "./styles/assets/ravenclawCrest.svg",
		house: "Ravenclaw",
		description: "desc"
	},
}

sortingHat.resultsArray = [];

const _shHouses = sortingHat.houses;
const _shResultsArray = sortingHat.resultsArray;

// Create my conditional logic to run upon page submit
function returnHouse() {
	// Take array and turn into a STR to compare to keys in .houses
	
	sortingHat.resultsString = sortingHat.resultsArray.join("");

	
	// Grab the related crest, house, description
	
	const _shUsersResults = sortingHat.houses[sortingHat.resultsString];
	
	let usersCrest = _shUsersResults["crest"];
	let usersHouse = _shUsersResults["house"];
	let usersDescription = _shUsersResults["description"];
	
	// Display to the DOM, bc witchcraft

	$(".imageContainer img").attr("src", usersCrest);
	$(".mbptResults").text(usersHouse);
	$(".mbptDescription").text(usersDescription);

	
};

// Create my gameplan to execute once page has loaded
sortingHat.init = function() {
	
	$("input").on("click", function (event) {
	
		const _val = $(this).val();
		
		if (_val) {
			sortingHat.mbptTraits[_val]++;
		};

		// add class .disabled attribute
	});

	// .one()
	// .select(), , if(has it already happened?)
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
	
		returnHouse();
	});
};

// Wait until html is full loaded to run jQuery
$(document).ready(function(){
	sortingHat.init();
});

//🐥🐥🐥🐥
	
// A BIG Thank you to Whitney Rosenberg from Noun Project for these amazing house crests!

// Hufflepuff crest 
// https://thenounproject.com/term/harry-potter/1704951/

// Slytherin crest 
// https://thenounproject.com/term/harry-potter/1704952/

// Gryffindor crest 
// https://thenounproject.com/term/harry-potter/1704953/

// Ravenclaw crest 
// https://thenounproject.com/term/harry-potter/1704954/
