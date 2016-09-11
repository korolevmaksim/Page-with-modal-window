/**
 * Created by korol on 9/10/2016.
 */




// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var code = document.getElementById("code");

var textInModal = document.getElementById("text-in-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    textInModal.innerText = code.innerText;

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    function message(mess) {

        modal.style.display = "block";
        // textInModal.innerText = code.innerText;
        textInModal.innerText = JSON.stringify(document, null, "  ");

    }

