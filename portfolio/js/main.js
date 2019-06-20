var toggleBtn = document.querySelector('#burgerBtn');
var menuList = document.querySelector('#burgerList');

console.log(toggleBtn);
console.log(menuList);

console.log(menuList.innerHTML);


toggleBtn.onclick = function () {
    menuList.classList.toggle('burgerList-active');
    toggleBtn.classList.toggle('burgerBtn-active');
}