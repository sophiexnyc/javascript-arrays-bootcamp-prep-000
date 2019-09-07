var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array, element) {
	array.unshift(element);
	return array;
	//return [element,...array];
}
addElementToBeginningOfArray([1], 'foo')

function destructivelyAddElementToBeginningOfArray(array, element) {
	array.unshift(element);
	return array;
}

function accessElementInArray(array, index) {
	return array [index];

}
