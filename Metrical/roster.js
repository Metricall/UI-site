//
function showSearch() {
	var x = document.getElementById("myDropdown").value;
	var y = document.getElementById("searchTarget").value;
	alert("Searching:\n" + "Field: " + x + "\nTarget: " + y + "\n**this will actually search database");
}

//displays the form to get info for new roster
function newRosForm() {
	var x = document.getElementById("newForm");
	x.style.display = 'block';
}

//handles input from new roster form
function submitNew() {
	var id = document.getElementById("id").value;
	var prof = document.getElementById("prof").value;
	var loc = document.getElementById("loc").value;
	alert("add to database: roster item\n Roster ID: " + id + "\nProfessor: " 
				+ prof + "\nLocation: " + loc);
	showTable();
}

//show table/list of search results
function showTable() {
	var myTable = document.getElementById("infoTable");
	myTable.style.display = 'block';
}