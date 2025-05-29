const sideEl = document.querySelector(".sidebar")
function sideBar(){
    sideEl.classList.toggle("active")
}
const microEl = document.querySelector(".micro__popup")
function microShow(){
    microEl.classList.toggle("active")
}
const createEl = document.querySelector(".stream")
function createShow(){
    createEl.classList.toggle("active")
}
const notificationsEL = document.querySelector(".notifications")
function notificationsShow(){
    notificationsEL.classList.toggle("active")
}
const profileEl = document.querySelector(".profile__detail")
function profileShow(){
    profileEl.classList.toggle("active")
}
const settingsEl = document.querySelector(".setting")
function settingsShow(){
    settingsEl.classList.toggle("active")
}
const shareEl = document.querySelector(".share-img")
function shareShow(){
    shareEl.classList.toggle("active")
}
const reportEl = document.querySelector(".reports")
function reportShow(){
    reportEl.classList.toggle("active")
}
