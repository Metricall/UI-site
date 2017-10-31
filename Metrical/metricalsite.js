function goIn()
{
	var logins = document.getElementById('logins')
	var pas = document.getElementById('pas')
	
    if (logins.value == 'admin' && pas.value == '12345')
    document.location.href = 'adminmain.html';

    else if (logins.value == 'professor' && pas.value == '67890')
    document.location.href = 'professormain.html';
	
	
	else
		alert("Wrong log-in, Please try again!");		
}