$('.nav__list__menu__button').addEventListener("click", () => {
  $('.header__modal').classList.remove('d-none2')
  $('.header__modal').classList.add('d-block')
})
$('.header__modal__cloce').addEventListener(
  'click',
  () => {
  $('.header__modal').classList.add('d-none2')
  $('.header__modal').classList.remove('d-block')
  }
)
// console.log($("h1"));
// Modal window start
// let modal = document.getElementById('myModal')

// let btn = document.getElementById('myBtn')

// let span = document.getElementsByClassName('close')[0]

// btn.onclick = function () {
//   modal.style.display = 'block'
// }

// span.onclick = function () {
//   modal.style.display = 'none'
// }

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none'
//   }
// }
// Dark mode start
// const darkModeBtn = document.getElementById('dark-mode-btn')
// darkModeBtn.addEventListener('click', function () {
//     document.body.classList.toggle('dark-mode')

// })

// darkModeBtn.addEventListener('click', function () {
//   if (document.body.classList.contains('dark-mode')) {
//     localStorage.setItem('dark-mode', 'on')
//   } else {
//     localStorage.setItem('dark-mode', 'off')
//   }
// })

// if (localStorage.getItem('dark-mode') === 'on') {
//   document.body.classList.add('dark-mode')
//   darkModeBtn.innerHTML = 'Light Mode'
// }
let modal = document.getElementById('myModal')

let btn2 = document.getElementById('myBtn')
let span = document.getElementsByClassName('close')[0]

btn2.addEventListener("click", ()=>{

  modal.classList.add("block")
})
btn2.onclick = function () {
  modal.style.display = 'block'
}

span.onclick = function () {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
// Dark mode started
// Input validator function
// let form = document.querySelector('#formRegister')
// let elEmail = $('#email')
// let elNames = $('#names')
// function checkInput(input) {
//   return input.classList.add('input-valid')
// }
// function inputField(field) {
//   return field.classList.add('input-field')
// }
// elEmail.addEventListener('input', () => {
//   if (elEmail.value.length > 0) {
//     checkInput(elEmail)
//   } else {
//     inputField(elEmail)
//   }
// })
// elNames.addEventListener('input', () => {
//   if (elNames.value.length > 0) {
//     checkInput(elNames)
//   } else {
//     inputField(elNames)
//   }
// })
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   if (elEmail.value.length > 0) {
//     checkInput(elEmail)
//   } else {
//     inputField(elEmail)
//   }
//   if (elNames.value.length > 0) {
//     checkInput(elNames)
//   } else {
//     inputField(elNames)
//   }
//   if (elEmail.value.length > 0 && elNames.value.length > 0) {
//     localStorage.setItem('validation-email', elEmail.value)
//     localStorage.setItem('validation-name', elNames.value)
//     // alert('succsess full add ' + elNames.value)
//     elEmail.value = ''
//     elNames.value = ''
//     elEmail.classList.remove('input-valid')
//     elNames.classList.remove('input-valid')
//     elEmail.classList.remove('input-field')
//     elNames.classList.remove('input-field')
//   }
// })

// ochilmasin negadir ishlamayabdi.
// a.forEach((item) => {
//   console.log(item)
//   item.classList.add('spanDarkText')
// })
// $a('.h2DarkText').forEach((item) => {
//   item.classList.add('h2DarkText')
// })
// $a('.h3DarkText').forEach((item) => {
//   item.classList.add('h3DarkText')
// })
// $a('.pDarkText').forEach((item) => {
//   item.classList.add('pDarkText')
// })
// $a('.aDarkText').forEach((item) => {
//   item.classList.add('aDarkText')
// })
// if (!document.body.classList.contains('dark-mode')) {
//   $a('.spanDarkText').forEach((item) => {
//     item.classList.remove('spanDarkText')
//   })
//   $a('.h2DarkText').forEach((item) => {
//     item.classList.remove('h2DarkText')
//   })
//   $a('.h3DarkText').forEach((item) => {
//     item.classList.remove('h3DarkText')
//   })
//   $a('.pDarkText').forEach((item) => {
//     item.classList.remove('pDarkText')
//   })
//   $a('.aDarkText').forEach((item) => {
//     item.classList.remove('aDarkText')
//   })
// }

// =============================== Filter category title func ========================================================
let categorLinkWrapp = $(".categoryLinksWrapp-tab");
let allCat = [];
// console.log(categorLinkWrapp);
db.map((el, ind, arr) => {
  if (!allCat.find((e) => e == el.categoryTitle)) {
    allCat.push(el.categoryTitle);
  }
});
allCat.map((cat) => {
  let catTitle = crElement(
    "span",
    "catLink",
    `
    <button class="tablinks" onclick="openCity(event, "${cat}")">${cat}</button>

`
  );
  categorLinkWrapp.appendChild(catTitle);
});
$a(".tablinks")[0].classList.add("activeTab");

$a(".tablinks").forEach((el) => {
  el.addEventListener("click", (ev) => {
    $(".activeTab").classList.remove("activeTab");
    ev.target.classList.add("activeTab");
  });
});

$(".categoryLinksWrapp-tab").addEventListener("click", (e) => {
  $(".cardsWrapp").innerHTML = "";
  createCategoryCards(e.target.textContent);
});

function createCategoryCards(catName) {
  db.map((el) => {

    if (catName == el.categoryTitle) {
      let catCard = crElement(
        "div",
        "catCard",
        `
  
  <div class="catCard">
  <span class="cardInfoo">
    <h3 class="cardTitle">${el.categoryTitle}</h3>
    <button class="cardBtn2">Explore</button>

  </span>
  
</div>  
  `
      );
      // background-size: cover;
      // background-position: center;
      // background-repeat: no-repeat;
      catCard.style.backgroundImage = `url(${el.roomImg})`;
      catCard.style.backgroundSize = "cover";
      catCard.style.backgroundPosition = "canter";
      catCard.style.backgroundRepeat = "no-repeat";

      $(".cardsWrapp").appendChild(catCard);
    }
 
  });
}
createCategoryCards("Bedroom")

// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
