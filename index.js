let button = document.querySelector(".search");

getData = () => {
  var inputValue = document.querySelector(".search_input").value;

  console.log(inputValue);

  fetch("http://www.omdbapi.com/?apikey=77779f17&s=games&page=2")
    .then((response) => response.json())
    .then((res) => {
      addElement(res);
    })
    .catch((err) => console.log(err));
};

addElement = (data) => {
  console.log(data.Search.length, data.Search[0].Poster);
  var addCard = document.querySelector(".card_container");
  console.log(addCard);
  for (let i = 0; i < data.Search.length; i++) {
    const card = `
        <div class="card">
                <div class="card_box">
                  <div class="img_box">
                    <img src=${data.Search[i].Poster} alt="" />
                  </div>
                  <div class="card_heading">Hello boys</div>
                </div>
              </div>
        `;
    addCard.insertAdjacentHTML("beforeend", card);
  }
};

button.addEventListener("click", getData);

// http://www.omdbapi.com/?apikey=77779f17&s=games&page=2
