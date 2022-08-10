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
          <img src="${phoneInfo.image}" class="card-img-top img-fluid img-thumbnail" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phoneInfo.phone_name}</h5>
            <p class="card-text">Brand : ${phoneInfo.brand}</p>
            <a href="#" class="btn btn-primary" onclick=loadPhoneDetail('${phoneInfo.slug}')>Get Details</a>
          </div>
      </div>
    `;
    phoneWrapper.appendChild(singlePhoneDiv);
  });
};

// phone details data load
const loadPhoneDetail = async (phoneSlug) => {
  console.log(phoneSlug);
  const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;
  const res = await fetch(url);
  const phoneResult = await res.json();
  displayPhoneDetails(phoneResult.data);
  console.log(phoneResult.data);
};

// display phone details result
const displayPhoneDetails = (phoneDetail) => {
  console.log("phone details", phoneDetail);
  const phoneDetailDiv = document.getElementById("phone-detail");
  const singleDetailDiv = document.createElement("div");
  singleDetailDiv.classList.add("col-md-6", "mb-5", "mx-auto", "d-block");
  singleDetailDiv.innerHTML = `
  
       <div class="card">
          <img src="${phoneDetail.image}" class="card-img-top img-fluid img-thumbnail" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phoneDetail.name}</h5>
            <p class="card-text">Brand : ${phoneDetail.brand}</p>
            <p class="card-text">Main Features :</p>
            <ul>
              <li>Chip Set: ${phoneDetail.mainFeatures.chipSet}</li>
              <li>Display Size: ${phoneDetail.mainFeatures.displaySize}</li>
              <li>Memory: ${phoneDetail.mainFeatures.memory}</li>
            </ul>
            <p class="card-text">Others Features : </p>
            <ul>
              <li>Bluetooth: ${phoneDetail.others.Bluetooth}</li>
              <li>GPS: ${phoneDetail.others.GPS}</li>
              <li>NFC: ${phoneDetail.others.NFC}</li>
              <li>Radio: ${phoneDetail.others.Radio}</li>
              <li>USB: ${phoneDetail.others.USB}</li>
              <li>WLAN: ${phoneDetail.others.USB}</li>
              <li>${phoneDetail.others.WLAN}</li>
            </ul>  
            <p class="card-text">Release Date : ${phoneDetail.releaseDate}</p>
           </div>
      </div>
  `;
  phoneDetailDiv.appendChild(singleDetailDiv);
};
