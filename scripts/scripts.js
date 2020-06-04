

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
	extrovert: 0,
	introvert: 0,
	sensing: 0,
	intuitive: 0,
	thinking: 0,
	feeling: 0,
	judging: 0,
	perceptive: 0,
};

// Boom! All the data in one spot to parse easily
sortingHat.houses = {
	ENFJ: {
		crest: "./styles/assets/gryffindorCrest.svg",
		house: "Gryffindor",
		description: "Warm, empathetic, responsive, and responsible. Highly attuned to the emotions, needs, and motivations of others. Find potential in everyone, want to help others fulfill their potential. May act as catalysts for individual and group growth. Loyal, responsive to praise and criticism. Sociable, facilitate others in a group, and provide inspiring leadership."
	},
	ENFP: {
		crest: "./styles/assets/gryffindorCrest.svg",
		house: "Gryffindor",
		description: "Warmly enthusiastic and imaginative. See life as full of possibilities. Make connections between events and information very quickly, and confidently proceed based on the patterns they see. Want a lot of affirmation from others, and readily give appreciation and support. Spontaneous and flexible, often rely on their ability to improvise and their verbal fluency."
	},
	ENTP: {
		crest: "./styles/assets/gryffindorCrest.svg",
		house: "Gryffindor",
		description: "Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems. Adept at generating conceptual possibilities and then analyzing them strategically.Good at reading other people. Bored by routine, will seldom do the same thing the same way, apt to turn to one new interest after another."
	},
	ESTP: {
		crest: "./styles/assets/gryffindorCrest.svg",
		house: "Gryffindor",
		description: "Flexible and tolerant, they take a pragmatic approach focused on immediate results. Theories and conceptual explanations bore them - they want to act energetically to solve the problem. Focus on the here-and-now, spontaneous, enjoy each moment that they can be active with others. Enjoy material comforts and style. Learn best through doing."
	},
	ESFJ: {
		crest: "./styles/assets/hufflepuffCrest.svg",
		house: "Hufflepuff",
		description: "Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-by-day lives and try to provide it. Want to be appreciated for who they are and for what they contribute."
	},
	ESFP: {
		crest: "./styles/assets/hufflepuffCrest.svg",
		house: "Hufflepuff",
		description: "Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts. Enjoy working with others to make things happen. Bring common sense and a realistic approach to their work, and make work fun. Flexible and spontaneous, adapt readily to new people and environments. Learn best by trying a new skill with other people. "
	},
	ISFJ: {
		crest: "./styles/assets/hufflepuffCrest.svg",
		house: "Hufflepuff",
		description: "Quiet, friendly, responsible, and conscientious. Committed and steady in meeting their obligations. Thorough, painstaking, and accurate. Loyal, considerate, notice and remember specifics about people who are important to them, concerned with how others feel. Strive to create an orderly and harmonious environment at work and at home."
	},
	ISFP: {
		crest: "./styles/assets/hufflepuffCrest.svg",
		house: "Hufflepuff",
		description: "Quiet, friendly, sensitive, and kind. Enjoy the present moment, what's going on around them. Like to have their own space and to work within their own time frame. Loyal and committed to their values and to people who are important to them. Dislike disagreements and conflicts, do not force their opinions or values on others."
	},
	ISTP: {
		crest: "./styles/assets/slytherinCrest.svg",
		house: "Slytherin",
		description: "Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions. Analyze what makes things work and readily get through large amounts of data to isolate the core of practical problems. Interested in cause and effect, organize facts using logical principles, value efficiency."
	},
	ENTJ: {
		crest: "./styles/assets/slytherinCrest.svg",
		house: "Slytherin",
		description: "Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems. Enjoy long-term planning and goal setting. Usually well informed, well read, enjoy expanding their knowledge and passing it on to others. Forceful in presenting their ideas."
	},
	ESTJ: {
		crest: "./styles/assets/slytherinCrest.svg",
		house: "Slytherin",
		description: "Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions. Organize projects and people to get things done, focus on getting results in the most efficient way possible. Take care of routine details. Have a clear set of logical standards, systematically follow them and want others to also. Forceful in implementing their plans."
	},
	ISTJ: {
		crest: "./styles/assets/slytherinCrest.svg",
		house: "Slytherin",
		description: "Quiet, serious, earn success by thoroughness and dependability. Practical, matter-of-fact, realistic, and responsible. Decide logically what should be done and work toward it steadily, regardless of distractions. Take pleasure in making everything orderly and organized - their work, their home, their life. Value traditions and loyalty."
	},
	INFJ: {
		crest: "./styles/assets/ravenclawCrest.svg",
		house: "Ravenclaw",
		description: "Seek meaning and connection in ideas, relationships, and material possessions. Want to understand what motivates people and are insightful about others. Conscientious and committed to their firm values. Develop a clear vision about how best to serve the common good. Organized and decisive in implementing their vision."
	},
	INFP: {
		crest: "./styles/assets/ravenclawCrest.svg",
		house: "Ravenclaw",
		description: "Idealistic, loyal to their values and to people who are important to them. Want an external life that is congruent with their values. Curious, quick to see possibilities, can be catalysts for implementing ideas. Seek to understand people and to help them fulfill their potential. Adaptable, flexible, and accepting unless a value is threatened."
	},
	INTP: {
		crest: "./styles/assets/ravenclawCrest.svg",
		house: "Ravenclaw",
		description: "Seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction. Quiet, contained, flexible, and adaptable. Have unusual ability to focus in depth to solve problems in their area of interest. Skeptical, sometimes critical, always analytical."
	},
	INTJ: {
		crest: "./styles/assets/ravenclawCrest.svg",
		house: "Ravenclaw",
		description: "Have original minds and great drive for implementing their ideas and achieving their goals. Quickly see patterns in external events and develop long-range explanatory perspectives. When committed, organize a job and carry it through. Skeptical and independent, have high standards of competence and performance - for themselves and others."
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
