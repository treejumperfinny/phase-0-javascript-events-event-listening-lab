

 function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function(){
        alert('I was CLICKED!!!!!!!!!');
    })
}

//1. the name of the event to listen for, and
//2. a _callback function_ to "handle" the event