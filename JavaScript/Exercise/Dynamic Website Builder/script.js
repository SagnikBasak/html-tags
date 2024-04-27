function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewsCalculated;

    if (views < 1000) {
        viewsCalculated = views;
    }
    else if (views < 1000000) {
        viewsCalculated = views / 1000 + "K";
    }
    else if (views > 1000000){
        viewsCalculated = views / 1000000 + "M";
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="Thumbnail">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} • ${viewsCalculated} views • ${monthsOld} months ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML += html;
    return html;
}

// let cardHTML = createCard("Introduction to Backend | Sagnik Basak #2", "Phantom 48 Studio", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
// document.querySelector(".container").innerHTML = cardHTML;


createCard("Introduction to Backend | Sagnik Basak #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
