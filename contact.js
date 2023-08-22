function insertInto() {

	// alert("The form was submitted");

	// Find a <table> element with id="myTable":
	var table = document.getElementById("myTable");

	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(-1);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var fname = row.insertCell(0);
	var lname = row.insertCell(1);
	var email = row.insertCell(2);
	var mobile = row.insertCell(3);
	var message = row.insertCell(4);

	// Add some text to the new cells:
	fname.innerHTML = document.getElementById('fname').value;
	lname.innerHTML = document.getElementById('lname').value;
	email.innerHTML = document.getElementById('email').value; 
	mobile.innerHTML = document.getElementById('mobile').value;
	message.innerHTML = document.getElementById('message').value;

}