var apiList = document.querySelector(".api-lists");
var fetchButton = document.querySelector(".fetch-button");
var apiLink = "https://jsonplaceholder.typicode.com/posts";

var initial = 0;
var count = 6;
var apiLength = [];

var xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  var data = JSON.parse(this.response);
  for (var i = initial; i < count; i++) {
    apiList.innerHTML += `<li class="api-list-item">
                        <p class="data api-title">${data[i].title}</p>
                        <p class="data api-description">${data[i].body}</p>
                      </li>`;
  }
};
xhttp.open("get", apiLink, true);
xhttp.send();

function showData(initial, count) {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var data = JSON.parse(this.response);

    if (apiLength.indexOf(data.length) === -1) {
      apiLength.push(data.length);
    }

    for (var i = initial; i < count; i++) {
      if (count == apiLength[0]) {
        fetchButton.classList.add("display-none");
      }
      apiList.innerHTML += `<li class="api-list-item">
                              <p class="data api-title">${data[i].title}</p>
                              <p class="data api-description">${data[i].body}</p>
                            </li>`;
    }
  };
  xhttp.open("get", apiLink, true);
  xhttp.send();
}

fetchButton.addEventListener("click", function (e) {
  e.preventDefault();

  initial = count;
  count += 6;

  if (count > apiLength[0]) {
    count = apiLength[0];
  }

  showData(initial, count);
});