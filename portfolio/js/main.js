var toggleBtnBurger = document.querySelector('#burgerBtn');
var menuList = document.querySelector('#burgerList');

var toggleBtnOurSkills = document.querySelectorAll('.ourSkills__itemBtn');

var logoBtn = document.querySelectorAll('.logoBtn');


toggleBtnBurger.onclick = function() {
  menuList.classList.toggle('burgerList-active');
  toggleBtnBurger.classList.toggle('burgerBtn-active');
}

for (var i = 0; i < toggleBtnOurSkills.length; i++) {
  toggleBtnOurSkills[i].onclick = function() {
    ourSkillsActive(this);
  }
}

for (var i = 0; i < logoBtn.length; i++) {
  logoBtn[i].onclick = function(){
    logoBtnActive(this);
  }
}


function ourSkillsActive(Element) {
  Element.classList.toggle('btn-active');
  Element.parentElement.querySelector('.ourSkills__item-text').classList.toggle('text-active');
}

function logoBtnActive(obj) {
  obj.classList.add('hinge');
}
