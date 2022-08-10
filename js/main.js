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
  });
};


