(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
const menuPanel = document.querySelector("#menu-panel");
const menuStatus = document.getElementById("menu-status");
const newsList = document.getElementById("news-list");
const copyright = document.getElementById("copyright");
if (menuPanel && menuStatus) {
    const links = menuPanel.querySelectorAll("a");
    for (const link of links) {
        link.addEventListener("click", function () {
            menuStatus.click();
        });
    }
}
if (newsList) {
    function createNewsBlock(d = "", t = "") {
        const newsRow = document.createElement("div");
        newsRow.className = "news-row";
        const date = document.createElement("p");
        date.className = "news-date";
        date.innerText = d;
        const title = document.createElement("p");
        title.className = "news-title";
        title.innerText = t;
        newsRow.appendChild(date);
        newsRow.appendChild(title);
        newsList === null || newsList === void 0 ? void 0 : newsList.appendChild(newsRow);
    }
    const API_KEY = "DisJBaqWHwK80I55fDec7EgYSOmSAHmdZNvR";
    fetch("https://rena-intern.microcms.io/api/v1/news", {
        headers: {
            "X-MICROCMS-API-KEY": API_KEY,
        },
    })
        .then((data) => data.json())
        .then((json) => {
        const contents = json.contents;
        for (const content of contents) {
            const date = new Date(content.date);
            createNewsBlock(`${date.getFullYear()}.${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`, content.title);
        }
    });
}
if (copyright) {
    const year = new Date().getFullYear();
    copyright.innerText = `© ${year} `;
}

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
