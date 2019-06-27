var toggleBtnBurger = document.querySelector('#burgerBtn');
var menuList = document.querySelector('#burgerList');

var toggleBtnOurSkills = document.querySelectorAll('.ourSkills__item-btn');


toggleBtnBurger.onclick = function() {
  menuList.classList.toggle('burgerList-active');
  toggleBtnBurger.classList.toggle('burgerBtn-active');
}

for (var i = 0; i < toggleBtnOurSkills.length; i++) {
  toggleBtnOurSkills[i].onclick = function() {
    ourSkillsActive(this);
  }
}

function ourSkillsActive(Element) {
Element.classList.toggle('btn-active');
Element.querySelector('.ourSkills__item-text').classList.toggle('text-active');
}
