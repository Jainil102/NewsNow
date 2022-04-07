console.log("Running");

var topic = 'general';
var apiKey = '4129cf0533b54a73a032d9eaf3c092e8';

var newsCard = document.getElementById('news-card');
var latNewsCard = document.getElementById('lat-news');
var trendNewsCard = document.getElementById('trend-news');
var seeMoreCard = document.getElementById('see-more-news')
var heading = document.getElementById('heading');
var newsCaraousel = document.getElementById('carousel-inner');
var loading = document.getElementById('loading');
var articles;

var about = function (e) {
    e.preventDefault;
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('rightbody').style.display = "none";
    document.getElementById('about').style.display = "block";
}

var seemore = function (e) {
    document.getElementById('container2').style.display = "block";
    document.getElementById('seemore').style.display = "none";

    e.preventDefault();

    console.log(articles)

    let newsList = articles.slice(18, 30);
    let newsHtml = ""
    newsList.forEach(function (element) {
        let news = `
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <a href="${element["url"]}" target="_blank">
                <div class="row see-more">
                    <div class="col-sm-4 grid-margin">
                        <div class="">
                            <img src="${element["urlToImage"]}">
                        </div>
                    </div>
                    <div class="col-sm-8 grid-margin">
                        <h2 class="mb-2 news-title">
                            ${element["title"]}
                        </h2>
                        <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">Source: </span>${element["source"]["name"]}
                        </p>
                        <p class="fs-15">
                        ${element["description"].substring(0, 100) + "..."}
                        </p>
                    </div>
                </div>
                <hr>
            </a>
            </div>`;
        newsHtml += news;
    });
    seeMoreCard.innerHTML = newsHtml;
}

var retrieve = function (topic) {
    window.scrollTo(0, 0)
    document.getElementById('sidebar').style.display = "block";
    document.getElementById('about').style.display = "none"
    document.getElementById('rightbody').style.display = "block";
    loading.style.display = "block";

    document.getElementById('carousel').style.display = "none";
    document.getElementById('container2').style.display = "none";
    document.getElementById('seemore').style.display = "block";

    let heading1 = topic

    if(topic == 'politics') topic = 'business';
    if(topic == 'international') topic = 'technology';
    if(topic == 'finance') topic = 'business';
    if(topic == 'climate') topic = 'health';
    if(topic == 'travel') topic = 'sports';
    if(topic == 'jobs') topic = 'business';
    if(topic == 'media') topic = 'technology';
    if(topic == 'culture') topic = 'health';
    if(topic == 'game') topic = 'sports';
    if(topic == 'art') topic = 'technology';
    if(topic == 'kids') topic = 'sports'; 
    if(topic == 'administration') topic = 'business';

    let url1 = ``;
    if (topic == 'trending') {
        url1 = `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`;
        document.getElementById('carousel').style.display = "block";
    }
    else {
        url1 = `https://saurav.tech/NewsAPI/top-headlines/category/${topic}/in.json`;
    }

    heading.innerHTML = heading1.toUpperCase();

    fetch(url1).then((res) => {
        return res.json()
    }).then((data) => {
        articles = data.articles;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i]["urlToImage"] == null || articles[i]["source"]["name"] === "Reuters" || articles[i]["description"] == null) {
                articles.splice(i, 1);
                i--;
            }

        }
        console.log(articles);
        loading.style.display = "none";

        let lat_news = articles.slice(0, 4);
        let LatNewsHtml = "";
        lat_news.forEach(function (element) {
            let LatNews = `
            <a href="${element["url"]}" target="_blank">
            <div class="row" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
            <div class="col-sm-12">
                <div class="border-bottom pb-4 pt-4">
                    <div class="row">
                        <div class="col-sm-8 lat-text">
                            <h5 class="font-weight-600 trend-title mb-1">
                                ${element["title"]}
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                                <span class="mr-2">Source: </span>${element["source"]["name"]}
                            </p>
                        </div>
                        <div class="col-sm-4">
                            <div class="">
                                <img src="${element["urlToImage"]}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </a>`;
            LatNewsHtml += LatNews;
        });
        latNewsCard.innerHTML = LatNewsHtml;

        let trend_news = articles.slice(4, 8);
        let TrendNewsHtml = "";
        trend_news.forEach(function (element) {
            let TrendNews = `
            <a href="${element["url"]}" target="_blank">
            <div class="mb-4" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                <div class="">
                    <img src="${element["urlToImage"]}">
                </div>
                <h3 class="mt-3 font-weight-600 trend-title">
                    ${element["title"]}
                </h3>
                <p class="fs-13 text-muted mb-0">
                    <span class="mr-2">Source: </span>${element["source"]["name"]}
                </p>
            </div>
            <hr>
            </a>`;
            TrendNewsHtml += TrendNews;
        });
        trendNewsCard.innerHTML = TrendNewsHtml;

        let newsList = articles.slice(8, 18);
        let newsHtml = ""
        newsList.forEach(function (element) {
            let news = `
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <a href="${element["url"]}" target="_blank">
                <div class="row">
                    <div class="col-sm-4 grid-margin">
                        <div class="">
                            <img src="${element["urlToImage"]}">
                        </div>
                    </div>
                    <div class="col-sm-8 grid-margin">
                        <h2 class="mb-2 news-title">
                            ${element["title"]}
                        </h2>
                        <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">Source: </span>${element["source"]["name"]}
                        </p>
                        <p class="fs-15">
                        ${element["description"].substring(0, 100) + "..."}
                        </p>
                    </div>
                </div>
                <hr>
            </a>
            </div>`;
            newsHtml += news;
        });
        newsCard.innerHTML = newsHtml;
    })
}

var search = function (e) {
    e.preventDefault()
    document.getElementById('sidebar').style.display = "block";
    document.getElementById('about').style.display = "none"
    document.getElementById('rightbody').style.display = "block";

    window.scrollTo(0, 0)
    loading.style.display = "block";

    document.getElementById('carousel').style.display = "none";
    document.getElementById('container2').style.display = "none";
    document.getElementById('seemore').style.display = "block";

    const input = document.querySelector('.input')
    let topic1 = input.value
    console.log(topic1)
    let url1 = `https://newsapi.org/v2/everything?q=${topic1}&pageSize=60&apiKey=${apiKey}`;

    heading.innerHTML = "Showing Results For: " + topic1;

    fetch(url1).then((res) => {
        return res.json()
    }).then((data) => {
        articles = data.articles;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i]["urlToImage"] == null || articles[i]["source"]["name"] === "Reuters" || articles[i]["description"] == null) {
                articles.splice(i, 1);
                i--;
            }
        }

        console.log(articles);
        loading.style.display = "none";

        let lat_news = articles.slice(0, 4);
        let LatNewsHtml = "";
        lat_news.forEach(function (element) {
            let LatNews = `
            <a href="${element["url"]}" target="_blank">
            <div class="row" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
            <div class="col-sm-12">
                <div class="border-bottom pb-4 pt-4">
                    <div class="row">
                        <div class="col-sm-8">
                            <h5 class="font-weight-600 trend-title mb-1">
                                ${element["title"]}
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                                <span class="mr-2">Source: </span>${element["source"]["name"]}
                            </p>
                        </div>
                        <div class="col-sm-4">
                            <div class="">
                                <img src="${element["urlToImage"]}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </a>`;
            LatNewsHtml += LatNews;
        });
        latNewsCard.innerHTML = LatNewsHtml;

        let trend_news = articles.slice(4, 8);
        let TrendNewsHtml = "";
        trend_news.forEach(function (element) {
            let TrendNews = `
            <a href="${element["url"]}" target="_blank">
            <div class="mb-4" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                <div class="">
                    <img src="${element["urlToImage"]}">
                </div>
                <h3 class="mt-3 font-weight-600 trend-title">
                    ${element["title"]}
                </h3>
                <p class="fs-13 text-muted mb-0">
                    <span class="mr-2">Source: </span>${element["source"]["name"]}
                </p>
            </div>
            </a>`;
            TrendNewsHtml += TrendNews;
        });
        trendNewsCard.innerHTML = TrendNewsHtml;

        let newsHtml = ""
        let newsList = articles.slice(8, 18);
        newsList.forEach(function (element) {
            let news = `
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <a href="${element["url"]}" target="_blank">
                <div class="row">
                    <div class="col-sm-4 grid-margin">
                        <div class="">
                            <img src="${element["urlToImage"]}">
                        </div>
                    </div>
                    <div class="col-sm-8 grid-margin">
                        <h2 class="mb-2 news-title">
                            ${element["title"]}
                        </h2>
                        <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">Source: </span>${element["source"]["name"]}
                        </p>
                        <p class="fs-15">
                        ${element["description"].substring(0, 100) + "..."}
                        </p>
                    </div>
                </div>
                <hr>
            </a>
            </div>`;
            newsHtml += news;
        });
        newsCard.innerHTML = newsHtml;
    })
}

document.getElementById('search').addEventListener("click", search)
document.getElementById('general').addEventListener("click", retrieve.bind(event, 'trending'))
document.getElementById('general1').addEventListener("click", retrieve.bind(event, 'trending'))
document.getElementById('business').addEventListener("click", retrieve.bind(event, 'business'))
document.getElementById('health').addEventListener("click", retrieve.bind(event, 'health'))
document.getElementById('science').addEventListener("click", retrieve.bind(event, 'science'))
document.getElementById('sports').addEventListener("click", retrieve.bind(event, 'sports'))
document.getElementById('technology').addEventListener("click", retrieve.bind(event, 'technology'))
document.getElementById('politics').addEventListener("click", retrieve.bind(event, 'politics'))
document.getElementById('international').addEventListener("click", retrieve.bind(event, 'international'))
document.getElementById('finance').addEventListener("click", retrieve.bind(event, 'finance'))
document.getElementById('climate').addEventListener("click", retrieve.bind(event, 'climate'))
document.getElementById('travel').addEventListener("click", retrieve.bind(event, 'travel'))
document.getElementById('jobs').addEventListener("click", retrieve.bind(event, 'jobs'))
document.getElementById('media').addEventListener("click", retrieve.bind(event, 'media'))
document.getElementById('administration').addEventListener("click", retrieve.bind(event, 'administration'))
document.getElementById('culture').addEventListener("click", retrieve.bind(event, 'culture'))
document.getElementById('game').addEventListener("click", retrieve.bind(event, 'game'))
document.getElementById('art').addEventListener("click", retrieve.bind(event, 'art'))
document.getElementById('kids').addEventListener("click", retrieve.bind(event, 'kids'))
// document.getElementById('trending').addEventListener("click", retrieve.bind(event, 'covid'))
document.getElementById('seemore').addEventListener("click", seemore)
document.getElementById('about-us').addEventListener("click", about)



const xhr = new XMLHttpRequest();
xhr.open('GET', `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`, true);

xhr.onload = function () {
    document.getElementById('sidebar').style.display = "block";
    document.getElementById('about').style.display = "none"
    document.getElementById('rightbody').style.display = "block";

    document.getElementById('carousel').style.display = "block";
    document.getElementById('sidebar').classList.add("animate__animated");
    document.getElementById('sidebar').classList.add("animate__slideInLeft");

    heading.innerHTML = "TRENDING"

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        articles = json.articles;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i]["urlToImage"] == null || articles[i]["source"]["name"] === "Reuters" || articles[i]["description"] == null) {
                articles.splice(i, 1);
                i--;
            }
        }
        console.log(articles);
        loading.style.display = "none";

        let top1 = articles.slice(0, 1);
        let top = articles.slice(1, 3);
        let topHtml = "";
        top1.forEach(function (element) {
            let news = `<div class="carousel-item active">
            <a href="${element["url"]}" target="_blank" target="_blank">
                <img src="${element["urlToImage"]}" class="d-block w-100">
            </a>
            <div class="carousel-caption">
                <a href="${element["url"]}" target="_blank" target="_blank">
                <p class="carousel-fonts">${element["title"]}</p>
                </a>
            </div>
            </div>`;
            topHtml += news;
        });
        top.forEach(function (element) {
            news = `<div class="carousel-item">
            <a href="${element["url"]}" target="_blank">
                <img src="${element["urlToImage"]}" class="d-block w-100">
            </a>
            <div class="carousel-caption">
                <a href="${element["url"]}" target="_blank">
                <p class="carousel-fonts">${element["title"]}</p>
                </a>
            </div>
            </div>`;
            topHtml += news;
        });
        newsCaraousel.innerHTML = topHtml;

        let lat_news = articles.slice(3, 6);
        let LatNewsHtml = "";
        lat_news.forEach(function (element) {
            let LatNews = `
            <a href="${element["url"]}" target="_blank">
            <div class="row" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
            <div class="col-sm-12">
                <div class="border-bottom pb-4 pt-4">
                    <div class="row">
                        <div class="col-sm-8">
                            <h5 class="font-weight-600 trend-title mb-1">
                                ${element["title"].substring(0, 40) + "..."}
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                                <span class="mr-2">Source: </span>${element["source"]["name"]}
                            </p>
                        </div>
                        <div class="col-sm-4">
                            <div class="">
                                <img src="${element["urlToImage"]}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </a>`;
            LatNewsHtml += LatNews;
        });
        latNewsCard.innerHTML = LatNewsHtml;

        let trend_news = articles.slice(6, 9);
        let TrendNewsHtml = "";
        trend_news.forEach(function (element) {
            let TrendNews = `
            <a href="${element["url"]}" target="_blank">
            <div class="mb-4" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                <div class="">
                    <img src="${element["urlToImage"]}">
                </div>
                <h3 class="mt-3 font-weight-600 trend-title">
                    ${element["title"]}
                </h3>
                <p class="fs-13 text-muted mb-0">
                    <span class="mr-2">Source: </span>${element["source"]["name"]}
                </p>
            </div>
            <hr>
            </a>`;
            TrendNewsHtml += TrendNews;
        });
        trendNewsCard.innerHTML = TrendNewsHtml;

        let newsList = articles.slice(9, 18);

        let newsHtml = "";
        newsList.forEach(function (element) {
            let news = `
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <a href="${element["url"]}" target="_blank">
                <div class="row">
                    <div class="col-sm-4 grid-margin">
                        <div class="">
                            <img src="${element["urlToImage"]}">
                        </div>
                    </div>
                    <div class="col-sm-8 grid-margin">
                        <h2 class="mb-2 news-title">
                            ${element["title"]}
                        </h2>
                        <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">Source: </span>${element["source"]["name"]}
                        </p>
                        <p class="fs-15">
                        ${element["description"].substring(0, 100) + "..."}
                        </p>
                    </div>
                </div>
                <hr>
            </a>
            </div>`;
            newsHtml += news;
        });
        newsCard.innerHTML = newsHtml;
    }
    else {
        console.log("Error")
    }
}
xhr.send()


// // Weather API
// // SELECT ELEMENTS
// const iconElement = document.querySelector(".weather-icon");
// const tempElement = document.querySelector(".temperature-value p");
// const descElement = document.querySelector(".temperature-description p");
// const locationElement = document.querySelector(".location p");
// const notificationElement = document.querySelector(".notification");

// // App data
// const weather = {};

// weather.temperature = {
//     unit: "celsius"
// }

// // APP CONSTS AND VARS
// const KELVIN = 273;
// // API KEY
// const key = "82005d27a116c2880c8f0fcb866998a0";

// // CHECK IF BROWSER SUPPORTS GEOLOCATION
// if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// } else {
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
// }

// // SET USER'S POSITION
// function setPosition(position) {
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;

//     getWeather(latitude, longitude);
// }

// // SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
// function showError(error) {
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = `<p> ${error.message} </p>`;
// }

// // GET WEATHER FROM API PROVIDER
// function getWeather(latitude, longitude) {
//     let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

//     fetch(api)
//         .then(function (response) {
//             let data = response.json();
//             return data;
//         })
//         .then(function (data) {
//             weather.temperature.value = Math.floor(data.main.temp - KELVIN);
//             weather.description = data.weather[0].description;
//             weather.iconId = data.weather[0].icon;
//             weather.city = data.name;
//             weather.country = data.sys.country;
//         })
//         .then(function () {
//             displayWeather();
//         });
// }

// // DISPLAY WEATHER TO UI
// function displayWeather() {
//     // iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
//     tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//     descElement.innerHTML = weather.description;
//     locationElement.innerHTML = `${weather.city}, ${weather.country}`;
// }

// // C to F conversion
// function celsiusToFahrenheit(temperature) {
//     return (temperature * 9 / 5) + 32;
// }

// // WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
// tempElement.addEventListener("click", function () {
//     if (weather.temperature.value === undefined) return;

//     if (weather.temperature.unit == "celsius") {
//         let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);

//         tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//     } else {
//         tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//         weather.temperature.unit = "celsius"
//     }
// });

// NewsLetterForm

const submit = document.querySelector('.submit');
const email = document.querySelector('.email');

submit.addEventListener("click", () => {
    
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "cc7189f1de01e2",
        Password: "d0d9dc4a1528af",
        To: "hellojainil007@gmail.com",
        From: email.value,
        Subject: "Subscribed to our Newsletter!!!",
        Body: "A new user has subscribed to our newsletter!"
    }).then(
        message => {
            if (message == 'OK') {
                let toastLiveExample = document.getElementById('liveToast')
                let text = document.getElementById('toast');
                text.innerHTML = "You have subscribed to our newsletter successfully";
                let toast = new bootstrap.Toast(toastLiveExample)
                toast.show()
            }
            else {
                console.log(message);
            }   
        });
})

// Contact Us Form

const contactName = document.querySelector('.contact-name');
const contactEmail = document.querySelector('.contact-email');
const contactSubject = document.querySelector('.contact-subject');
const contactMessage = document.querySelector('.contact-message');
const contactSubmit = document.querySelector('.contact-submit');

contactSubmit.addEventListener("click", () => {

    if (contactName.value.trim() == "") {
        alert("Name Field is Empty!");
    }
    if (contactMessage.value.trim() == "") {
        alert("Message Field is Empty!");
    }
    if (contactSubject.value.trim() == "") {
        alert("Subject Field is Empty!");
    }
    if (contactEmail.value.trim() == "") {
        alert("Subject Field is Empty!");
    }

    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "cc7189f1de01e2",
        Password: "d0d9dc4a1528af",
        To: "hellojainil007@gmail.com",
        From: contactEmail.value,
        Subject: contactSubject.value,
        Body: "Name: " + contactName.value + "<br><br>" + "Message: " + contactMessage.value
    }).then(message => {
        if (message == 'OK') {
            let toastLiveExample = document.getElementById('liveToast')
            let text = document.getElementById('toast');
                text.innerHTML = "Email Sent Successfully!!";
            let toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
        }
        else {
            console.log(message)
        }
    })
})

// Notification-Marquee
var marqueeNews = `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`;
fetch(marqueeNews).then((res) => {
    return res.json()
}).then((data) => {
    let a = data.articles;
    var newsticker = [];
    for (var i = 0; i < 4; i++) {
        newsticker.push(a[i]["title"]);
    }
    let tickerText = "";
    for (let i = 0; i < newsticker.length; i++) {
        tickerText += newsticker[i];
        tickerText += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
    }
    document.querySelector("#scroll").innerHTML = tickerText;
})