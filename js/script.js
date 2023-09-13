/* ===== Strict mode ===== */
"use strict"

/* ===== Open menu ===== */
const sideBar = document.getElementById("sidebar")
const menuIcon = document.getElementById("menu-icon")

function openMenu() {
    sideBar.classList.toggle("open")
    menuIcon.classList.toggle("bi-x")
}
menuIcon.addEventListener("click", openMenu)

/* ===== Select links ===== */
const listItems = document.querySelectorAll(".list-item")

function selectLinks() {
    listItems.forEach((item) => {
        item.classList.remove("active")
    })
    this.classList.add("active")
}
listItems.forEach((item) => {
    item.addEventListener("click", selectLinks)
})