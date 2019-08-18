const CURRENT = 0;
const FUTURE = 1;
var data;
function append(newElement, content, toElement) {
  var newElement = document.createElement(newElement);
  newElement.textContent = content;
  toElement.append(newElement);
  return newElement;
}
function deselect(buttons) {
  Array.from(buttons).forEach(e => {
    e.classList.remove("btn-select");
  });
}
function select(button) {
  button.classList.add("btn-select");
}
function filter(method) {
  console.log(method);
  switch (method) {
    case CURRENT:
      return data
        .filter(e => {
          var today = new Date();
          var start = new Date(e.starting_date);
          var finish = new Date(e.finish_date);
          return today <= finish && (today >= start || e.starting_date === "");
        })
        .sort((a, b) => new Date(b.starting_date) - new Date(a.starting_date));
    case FUTURE:
      return data
        .filter(e => {
          var today = new Date();
          var start = new Date(e.starting_date);
          return today < start;
        })
        .sort((a, b) => new Date(a.starting_date) - new Date(b.starting_date));
    default:
      return data;
  }
}
function buttonHandler(event) {
  var buttons = document.getElementsByClassName("fil-btn");
  deselect(buttons);
  select(event.target);
  console.log(event.target.num);
  var myData = filter(parseInt(event.target.num));
  console.log(myData.length);
  renderData(myData);
}
var buttons = document.getElementsByClassName("fil-btn");
console.log(buttons);
Array.from(buttons).forEach((e, index) => {
  e.addEventListener("click", buttonHandler);
  e.num = index;
});

var content = document.getElementById("content");
function displayData(e) {
  var div = document.createElement("div");
  div.className = "card";
  append("h2", `${e.activity_type} - ${e.tname}`, div);

  append("data", `Issued on: ${new Date(e.date_issued).toDateString()}`, div);

  append("p", e.details, div);

  var table = document.createElement("table");
  var arry = ["on", "duration"];
  arry.forEach((item, index) => {
    var tr = document.createElement("tr");
    append("td", `${item.charAt(0).toUpperCase() + item.slice(1)}:`, tr);
    append("td", e[item], tr);
    table.append(tr);
  });
  var tr = document.createElement("tr");
  append("td", `Start Date:`, tr);
  append("td", `${new Date(e.starting_date).toDateString()}`, tr);
  table.append(tr);
  tr = document.createElement("tr");
  append("td", `Finish Date:`, tr);
  append("td", `${new Date(e.finish_date).toDateString()}`, tr);
  table.append(tr);
  div.append(table);

  var button = append("button", `Show Map`, div);
  button.className = "my-button";
  button.addEventListener("click", event => {
    if (event.target.shown) {
      event.target.shown = false;
      event.target.textContent = `Show Map`;
      event.target.p.remove();
      event.target.cords.remove();
    } else {
      var p = append("div", `map will go here`, event.target.parentElement);
      p.id = "map";
      event.target.cords = append(
        "p",
        `${e.location.coordinates[0]} - ${e.location.coordinates[1]}`,
        div
      );

      map = new google.maps.Map(p, {
        center: {
          lat: parseFloat(e.location.coordinates[1]),
          lng: parseFloat(e.location.coordinates[0])
        },
        zoom: 15
      });
      p.className = "map";
      event.target.shown = true;
      event.target.textContent = `Hide Map`;
      event.target.p = p;
    }
  });

  content.append(div);
}
function renderData(dataToRender) {
  // remove all elements from content
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  // render data to content
  dataToRender.forEach(displayData);
}

fetch("https://raw.githubusercontent.com/MFOSSociety/MFOSSociety.github.io/master/wings/security/data/events.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data.length);
    var process = filter(2);

    process.forEach(displayData);
  });