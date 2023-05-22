function myFunction() {
    document.getElementById("output").value = "Brand:";
}

function copyText() {
  var Text = document.getElementById("yourUTM");
  Text.select();
  navigator.clipboard.writeText(Text.value);
}

