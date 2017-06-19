document.addEventListener('DOMContentLoaded', bindButtons);

var req = new XMLHttpRequest();
req.open('GET', 'http://52.39.88.179:3000/getall', true);
req.addEventListener('load', function(){
    if (req.status < 400){
        var data = JSON.parse(req.responseText);
        var tbl = document.body.appendChild(buildTable(data));
    } else {
        console.log("Error in network request: " + request.statusText);
    }
});
req.send(null);

function buildTable(data) {
  var tbl = document.createElement('table');
  var header_row = document.createElement('tr');
  tbl.appendChild(header_row);
  tbl.id = "mainTable";
  headers = ["Name", "Reps", "Weight", "Date", "ibs"];
  //Head
  for (var i = 0; i < headers.length; i++) {
    var heading = document.createElement('th');
    heading.textContent = headers[i];
    header_row.appendChild(heading);
  }
  //Body
  for (var i = 0; i < data.length; i++) {
      var row = document.createElement('tr');
      var id = data[i]["id"];
      fields = ['name', 'reps', 'weight', 'date', 'ibs'];
      for (var j = 0; j <= 4; j++) {
          var cell = document.createElement('td');
          cell.textContent = data[i][fields[j]];
          row.appendChild(cell);
      }

      var f = document.createElement('form');
      f.setAttribute('method',"post");
      var dlt = document.createElement('input');
      dlt.setAttribute('type', "button");
      dlt.setAttribute('name', "Delete");
      dlt.setAttribute('value', "Delete");
      dlt.setAttribute('onclick', 'deleteRow(this)')
      f.appendChild(dlt);

      var hidden = document.createElement('input');
      hidden.setAttribute('type', "hidden");
      hidden.setAttribute('name', "id");
      hidden.setAttribute('value', id);
      f.appendChild(hidden);

      var edit = document.createElement('input');
      edit.setAttribute('type', "button");
      edit.setAttribute('name', "Delete");
      edit.setAttribute('value', "Edit");
      edit.setAttribute('onclick', 'editRow(this)')
      f.appendChild(edit);

      row.appendChild(f);
      tbl.appendChild(row);
  }
  tbl.style.borderCollapse = "collase";
  tbl.setAttribute("align", "center");
  return tbl;
}

function deleteRow(dltButton) {
    var req = new XMLHttpRequest();
    var payload = {};
    payload.id = dltButton.nextElementSibling.value;
    req.open("POST", "http://52.39.88.179:3000/delete", true);
    req.setRequestHeader('Content-type', 'application/json');
    req.addEventListener('load', function(){
        if (req.status >= 200 && req.status < 400){
            var data = JSON.parse(req.responseText);
            var tbl = document.body.appendChild(buildTable(data));
            document.body.removeChild(document.getElementById("mainTable"));
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    req.send(JSON.stringify(payload));
    event.preventDefault(); //without refresh
};


function editRow(editButton) {
    var id = editButton.previousElementSibling.value;
    window.location="http://52.39.88.179:3000/edit?id=" + id;
}

function bindButtons(){
    document.getElementById('addExercise').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var payload = {};
        payload.date = document.getElementById('date').value;
        payload.name = document.getElementById('name').value;
        //if (payload.name == "") {
        //    alert("Please enter the exercise name and try again.");
        //    return;
        //}
        payload.weight = document.getElementById('weight').value;
        payload.reps = document.getElementById('reps').value;
        var radios  = document.getElementsByName('units');
        if (payload.name == "") {
           alert("Please enter all necessary info and try again.");
           return;
        }

        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                payload.units = Number(radios[i].value);
                break;
            }
        }
        req.open("POST", "http://52.39.88.179:3000/insert", true);
        req.setRequestHeader('Content-type', 'application/json');
        req.addEventListener('load', function(){
            if (req.status >= 200 && req.status < 400){
                var data = JSON.parse(req.responseText);
                var tbl = document.body.appendChild(buildTable(data));
                document.body.removeChild(document.getElementById("mainTable"));
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        req.send(JSON.stringify(payload));
        event.preventDefault();
    });
}

