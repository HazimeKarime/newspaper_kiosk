const newspapers = [
    "https://www.abc.com.py",
    "https://www.ultimahora.com",
    "https://www.hoy.com.py/",
    "https://www.bbc.com",
    "https://www.lanacion.com.py/"
];

let newsIndex = 0;

const newspaperFrame = doc.getElementById("newsFrame");

function loadNewspaper(k) {
    if (k < 0) {
        newsIndex = newspapers.length - 1;
    } else if (k >= newspapers.length) {
        newsIndex = 0;
    }

    newspaperFrame.src = newspapers[newsIndex];
}

function prev() {
    newsIndex--;
    loadNewspaper(newsIndex);
}

function next() {
    newsIndex++;
    loadNewspaper(newsIndex);
}
loadNewspaper(newsIndex);