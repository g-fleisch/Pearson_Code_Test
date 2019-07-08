function transformTheNums() {
	var customInput = document.getElementById("customTransform").value.split(',');
	//change the number strings into ints
	for (n in customInput) {
	    customInput[n] = parseInt(customInput[n]);
	}
	document.getElementById("transformOutput").value = transformNums(customInput).toString();
}

//TAKEN FROM THE INTERNET
// this is so when we sort the array of ints we will compare by value not alphabetically
function sortNumber(a, b) {
  return a - b;
}

function transformNums(numberArray) {
	//sort the given array and assign it to three parts for the finished output
	var startArray = numberArray.sort(sortNumber);
	var middleArray = startArray.slice();
	var endArray = startArray.slice();
	//reverse the middle array
	middleArray.reverse();
	//Concat the 3 arrays together
	//using this batch method for concating two arrays as if they are really big (10,000+) javascript could throw an error
	for (var n = 0, to_add = middleArray.concat(endArray); n < to_add.length; n+=300) {
	    startArray.push.apply(startArray, to_add.slice(n, n+300));
	}
	return startArray;
}

/**
 * TAKEN FROM THE INTERNET TO SHUFFLE AN ARRAY SINCE WE NEED AN UNORDERED ARRAY
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//Makes an unordered array of integers then assigns the proper string to them based on divisability
function makeList(n){
	//create an array with number 1 to N
	var unorderedList = Array.apply(null, {length: n}).map(Number.call, Number);
	shuffleArray(unorderedList);

	for (i = 0; i < n; i++) {

		var contructedString = "";
		var item = unorderedList[i];

		if(item % 2 == 0){
			contructedString += "EVEN";
		} else {
			contructedString += "ODD";
		}
		if(item % 3 == 0){
			contructedString += " 3 MULTIPLE";
		}
		if(item % 5 == 0){
			contructedString += " 5 MULTIPLE";
		}
		var newItem = {
			"number": item,
			"string": contructedString
		}
		unorderedList[i] = newItem;
	}
	return unorderedList;
}

function displayNewItems(){
	//clear the table
	document.getElementById("itemsTableBody").innerHTML = "";

	var N = 0
	if (isNaN(parseInt(document.getElementById("newItemValue").value))){
		console.log("give a number not a string for number of items");
		return;
	} else {
		N = parseInt(document.getElementById("newItemValue").value);
	}

	//make the items and the strings
	var itemArray = makeList(N);

	for (i = 0; i<itemArray.length; i++) {
		var tableRef = document.getElementById('itemsTableBody');
		var newRow   = tableRef.insertRow(tableRef.rows.length);

		var stringCell  = newRow.insertCell(0);
		var itemStringText  = document.createTextNode(itemArray[i].string)
		stringCell.appendChild(itemStringText);

		var itemCell  = newRow.insertCell(0);
		var itemNumberText  = document.createTextNode(itemArray[i].number)
		itemCell.appendChild(itemNumberText);
	}
	return;
}

/* PART I HTML */

//populate the dropdown
var stateDropdown = document.getElementById("accountStateDropdown"); 
var stateOptions = [
    "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho",
    "Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri",
    "Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma",
    "Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington",
    "West Virginia","Wisconsin","Wyoming"]

for(i = 0; i < stateOptions.length; i++) {
    var el = document.createElement("option");
    el.textContent = stateOptions[i];
    el.value = stateOptions[i];
    stateDropdown.appendChild(el);
}

//handle the form submission
window.onload=function() {
	document.getElementById("accountSubmitResponse").innerHTML = " Please input the aboce info ";
    document.getElementById("accountInfoForm").onsubmit=function() {
    // Should be triggered on form submit

    var accountName = document.getElementById("accountUserName").value;
    var accountState = document.getElementById("accountStateDropdown").value;

    document.getElementById("accountSubmitResponse").innerHTML = "Account <b>" + accountName + "</b> has been created. Nice to see you are from <b>" + accountState + "</b>";
    return false;
  }
}

/* PART IV TRAIN CRASH */

function calculateTrainCrash(){
	var trainASpeed = parseInt(document.getElementById("trainASpeed").value);
	var trainBSpeed = parseInt(document.getElementById("trainBSpeed").value);
	var distance = parseInt(document.getElementById("trainDistance").value);
	var trainBDelay = parseInt(document.getElementById("trainBDelay").value);

	var trainResultSpace = document.getElementById("trainResultText");
	var trainResultVisual = document.getElementById("trainAVisual");

	//check to make sure we get a number
	if(isNaN(trainASpeed) || isNaN(trainBSpeed) || isNaN(distance) || isNaN(trainBDelay)){
		trainResultSpace.innerHTML = "Please ensure that all input values are numbers";
		return;
	}
	//check to make sure we get a positive number for all
	if(trainASpeed < 0 || trainBSpeed < 0 || distance < 0 || trainBDelay < 0){
		trainResultSpace.innerHTML = "Please ensure that all input values are not negative";
		return;
	}
	//check to make sure we get a reasonable number train speeds otherwise it could take a really really long time before they crash
	if((trainASpeed + trainBSpeed) < 1){
		trainResultSpace.innerHTML = "Please ensure that the trains have a combined speed of at least 1 mph";
		return;
	}
	//check to make sure we dont get numbers too big
	if(trainASpeed > 9000 || trainBSpeed > 9000 || distance > 9000 || trainBDelay > 9000){
		trainResultSpace.innerHTML = "Please, no numbers greater than 9000 :)";
		return;
	}
	var ct = 0;
	var cd = 0;
	var fd = 0;
	var distanceTogether = 0;
	var travelTimeTogether = 0;
	var crashDistance = 0;
	var trainATotalTimeMinutes = 0;
	
	//deal with trainB being delayed
	var trainBDelayInHours = (trainBDelay/60);
	var trainAloneTravelDistance = trainASpeed * trainBDelayInHours;
	if(trainAloneTravelDistance >= distance){
		//train A gona crash into train B without it moving
		crashDistance = distance;
		trainATotalTimeMinutes = (distance / trainASpeed) * 60;
	} else {
		//the trains move  towards one another
		distanceTogether = distance - trainAloneTravelDistance;
		travelTimeTogether = distanceTogether / (trainBSpeed + trainASpeed);
		crashDistance = trainAloneTravelDistance + (trainASpeed * travelTimeTogether);
		trainATotalTimeMinutes = (trainBDelayInHours + travelTimeTogether) * 60;
	}

	trainResultSpace.innerHTML = "Train A collides with Train B at "+ (Math.round(crashDistance * 100) / 100)  +" miles from Maryland, "+ (Math.round(trainATotalTimeMinutes * 100) / 100) +" minutes after it left";

	//console.log(" | " + trainASpeed + " | " + trainBSpeed + " | " + distance + " | " + trainBDelay + " | ")
	//console.log(" | " + trainAloneTravelDistance + " | " + distanceTogether + " | " + travelTimeTogether + " | " + combinedSpeed + " | ")
}

/*

Dynamically generate an unordered list of 100 items in the HTML page you just built.
The list items should contain the string EVEN in even entries and ODD in odd entries.
If the item is a multiple of 3, it should contain 3 MULTIPLE. If the item is a multiple of 5, it should contain 5 MULTIPLE.
If it's divisible by both, the item should contain both phrases. For example, the number 15 would output ODD 3 MULTIPLE 5 MULTIPLE

*/