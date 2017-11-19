function goIn()
{
	var logins = document.getElementById('logins')
	var pas = document.getElementById('pas')
	
    if (logins.value == 'admin' && pas.value == '12345')
    document.location.href = 'adminmain.html';

    else if (logins.value == 'professor' && pas.value == '67890')
    document.location.href = 'professorclasses.html';
	
	
	else
		alert("Wrong log-in, Please try again!");		
}

function editstudent()
{
	document.getElementById('absent').disabled = false;	
	
	
	
	
}

function savestudent()
{
document.getElementById('absent').disabled = true;		
	
	
	
}