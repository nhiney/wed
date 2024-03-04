document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
});

function includeHTML(file, idSelector) {
  let xHTTP = new XMLHttpRequest();
  xHTTP.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById(idSelector).innerHTML = this.responseText;
    }
  };
  xHTTP.open("GET", file, true);
  xHTTP.send();
}


includeHTML("../public/components/menu2.html", "menu-section");
