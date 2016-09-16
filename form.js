<script>
function validateForm() {// nu permite trimiterea formularului fara un nume
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}