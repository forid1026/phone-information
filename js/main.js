// const url = 'https://openapi.programming-hero.com/api/phones?search=iphone';

const searchPhone = () => {
  const inputText = document.getElementById("phone-input");
  const searchText = inputText.value;

  if (searchText == "") {
    const errorDisplay = document.getElementById("error-display");
    errorDisplay.innerHTML = `<h3 class="text-center text-danger">You have entire empty search</h3>`;
    document.getElementById("phone-wrapper").textContent = "";
    document.getElementById("phone-detail").textContent = "";
  } else {
    document.getElementById("error-display").textContent = "";
    inputText.value = "";
    document.getElementById("phone-wrapper").textContent = "";
    document.getElementById("phone-detail").textContent = "";
    searchPhoneResult(searchText);
  }
};

// phone search result
const searchPhoneResult = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  console.log("search phone", url);
  const res = await fetch(url);
  const data = await res.json();
  console.log("search phone", data);
  displayPhoneResult(data.data);
};

const displayPhoneResult = (phone) => {
  const phoneWrapper = document.getElementById("phone-wrapper");
  phone.map((phoneInfo) => {
    console.log("all search phone", phoneInfo);
    const singlePhoneDiv = document.createElement("div");
    singlePhoneDiv.classList.add("col-md-4", "mb-5");
    singlePhoneDiv.innerHTML = `
      <div class="card">
          <img src="${phoneInfo.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phoneInfo.phone_name}</h5>
            <p class="card-text">Brand : ${phoneInfo.brand}</p>
            <a href="#" class="btn btn-primary">Get Details</a>
          </div>
      </div>
    `;
    phoneWrapper.appendChild(singlePhoneDiv);
  });
};
