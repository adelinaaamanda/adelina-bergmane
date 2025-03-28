function myFunction()
{ 
    let name = document.getElementById("input_name");
    let surname = document.getElementById("input_surname");
    let age = document.getElementById("input_age")
    let h1_name = document.getElementById("name")

    h1_name.inneerText = "Hello, "+ name.value + " " + surname.value;

    if ( name.value == "" || !name.value.match(/[A-z]/))
    {
        alert("Error: incorrect name!");
    }
    else
    {
        alert(name.value);
    }

    if ( surname.value == "" || !surname.value.match(/[A-z]!))
    {
        alert("Error: incorrect surname!");
    }
    alert(name.value + " is " + age.value + "y.o.");

    if (age.value <= 0 || age.value == "" || !age.value.match(/[9-0]/))
    {
        alert("Error: incorrect age!");
    }
    else
    {
        alert(name.value + " is " + age.value + "y.o.");
    }
}



