
var nav = document.getElementsByClassName("list")[0];

function myScroll() {

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollClientHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollMath = Math.round((scrollTop / scrollClientHeight) * 100);

    document.getElementsByClassName("scroll")[0].style.width = scrollMath + "%";

}


// Menu Container
function myFunc() {
    var menu = document.querySelectorAll(".menu");
    menu.forEach(e => {
        e.classList.toggle("menuClick");
    });
    
    const list = document.querySelector(".list");
    list.classList.toggle("menuClick");

    const parent = document.getElementsByClassName("list-container")[0];
    parent.classList.toggle("menuClick");

    const txt = document.querySelectorAll(".menuTxt");
    for (const x of txt) {
        x.classList.toggle("menuClick");
    }

}

var naviButton = document.getElementsByClassName("option");
var borderBottom = document.getElementsByClassName("bb");
var fa = document.querySelectorAll(".bar");
var a;
var b;
var c;

borderBottom[0].classList.add("showBB");
fa[0].style.color = "#fff";
naviButton[0].style.backgroundColor = "#444";

function naviBtn(i) {
    for (c = 0; c < naviButton.length; c++) {
        for (a = 0; a < borderBottom.length; a++) {
            for (b = 0; b < fa.length; b++) {
                fa[b].style.color = "";
                borderBottom[a].classList.remove("showBB");
                naviButton[c].style.backgroundColor = "";
            }
        }
        borderBottom[i].classList.add("showBB");
        fa[i].style.color = "#fff";
        naviButton[i].style.backgroundColor = "#444";
    }
}

// accordian Text
let btns = document.querySelectorAll(".btns");
btns.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("active");
        var txt = e.nextElementSibling;
        var icon = e.childNodes[1];
        if (txt.style.height && icon.style.transform) {
            txt.style.height = null;
            icon.style.transform = null;
        }
        else {
            txt.style.height = `${txt.scrollHeight}px`;
            icon.style.transform = "translate(-100%, 80%) rotate(180deg)";
        }
    });
});

// vertical Tab Menu
var verBtns = document.getElementsByClassName("verBtn");
var verTxt = document.getElementsByClassName("verText");
var fBtn = document.getElementsByClassName("verBtn")[0];
var i;
var x;

fBtn.style.backgroundColor = "salmon";
fBtn.style.color = "white";

function verTabs(ind) {
    for (i = 0; i < verBtns.length; i++) {
        verBtns[i].style.backgroundColor = "";
        verBtns[i].style.color = "";
    }
    verBtns[ind].style.backgroundColor = "salmon";
    verBtns[ind].style.color = "white";
    
    for (x = 0; x < verTxt.length; x++) {
        verTxt[x].style.display = "none";
    }
    verTxt[ind].style.display = "block";
}


// Normal Tab Menu

var tabBtn = document.querySelectorAll(".tabBtn");
var fTabBtn = document.querySelectorAll(".tabBtn")[0];
var tabText = document.querySelectorAll(".tabText");
var tabImg = document.querySelectorAll(".tab-img");
var z;

fTabBtn.style.backgroundColor = "magenta";
fTabBtn.style.color = "white";

var x = tabImg[0];
x.style.display = "block"

var y = tabText[0];
y.style.backgroundColor = "magenta";

function myTabs(index, color) {
    for (z = 0; z < tabBtn.length; z++) {
        tabBtn[z].style.backgroundColor = "";
        tabBtn[z].style.color = "";
    }
    tabBtn[index].style.backgroundColor = color;
    tabBtn[index].style.color = "white";

    for (let x = 0; x < tabImg.length; x++) {
        tabImg[x].style.display = "none";
    }
    tabImg[index].style.display = "block";

    for (let y = 0; y < tabText.length; y++) {
        tabText[y].style.backgroundColor = "";
    }
    tabText[index].style.backgroundColor = color;
}

document.querySelector(".burger-menu").addEventListener("click", () => {
    var navbar = document.querySelector(".list");
    navbar.classList.toggle("slideDown");
});

var dropBtn = document.querySelectorAll(".dBtn");

for (let i = 0; i < dropBtn.length; i++) {
    dropBtn[i].addEventListener("click", () => {
        var txt = dropBtn[i].previousElementSibling;
        if (txt.style.height) {
            txt.style.height = null;
            dropBtn[i].style.backgroundColor = "";
            dropBtn[i].style.color = "";
        }
        else {
            txt.style.height = txt.scrollHeight+"px";
            dropBtn[i].style.backgroundColor = "royalblue";
            dropBtn[i].style.color = "#eee";
        }
    });
}

var signBtn = document.querySelectorAll(".sign");
signBtn.forEach(e => {
    e.addEventListener("click", () => {
        var pop = document.getElementsByClassName("pop-up")[0];
        pop.style.display = "block";
    });
});

var x = document.querySelector(".fa-xmark");
x.addEventListener("click", () => {
    var parent = document.getElementsByClassName("pop-up")[0];
    parent.style.display = "none";
});

function showPass() {
    var pass = document.getElementById("pass");
    if (pass.type === "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
}

function myFilter() {
    var input = document.getElementById("input");
    var a = document.getElementsByClassName("fList");
    var val = input.value.toLowerCase();
    for (const i of a) {
        var txt = i.innerHTML;
        if (txt.toLowerCase().indexOf(val) === 0) {
            i.style.display = ""
        }
        else {
            i.style.display = "none";
        }
    }
}

function myTable() {
    var input = document.getElementById("tInput");
    var tr = document.getElementsByClassName("ftable");
    var val = input.value.toUpperCase();

    for (let i = 0; i < tr.length; i++) {
        var name = tr[i].getElementsByTagName("td")[0];
        var txt = name.textContent;

        if (txt.toUpperCase().indexOf(val) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}


function filterBtn(e) {
    var allList = document.getElementsByClassName("listFilter");
    var data = e.currentTarget.dataset.id; // data / car / animal / people
    var i;
    for (i = 0; i < allList.length; i++) {
        if (allList[i].classList[2] === data) {
            allList[i].style.display = "block";
        }
        else {
            allList[i].style.display = "none";
        }
    }
    if (data === "all") {
        for (i = 0; i < allList.length; i++) {
            allList[i].style.display = "block";
        }
    }
}


var barParent = document.getElementsByClassName("bar-container")[0];
var bar = barParent.getElementsByClassName("bar")[0];

function myBar() {

    var width = 1;

    var int = setInterval(() => {
        if (width >= 100) {
            clearInterval(int);
        }
        else {
            width++;
            if (width < 30) {
                bar.style.backgroundColor = "red";
            }
            else if (width < 65) {
                bar.style.backgroundColor = "yellow";
            }
            else if (width < 100) {
                bar.style.backgroundColor = "mediumspringgreen";
            }
            document.getElementById("demoBar").innerHTML = width + "%";
            bar.style.width = width + "%";
        }
    }, 20);
}

function myBarReset() {
    bar.style.width = 0 + "%";
    document.getElementById("demoBar").innerHTML = 0 + "%";
}

//

function myButtons() {
    var input = document.getElementById("todoInput");
    var classParent = document.getElementsByClassName("todo-list-container")[0];
    var delBtn = document.getElementsByClassName("xList");
    var editBtn = document.getElementsByClassName("fa-pen-to-square");
    var saveBtn = document.getElementsByClassName("fa-bookmark");
    var checkBtn = document.getElementsByClassName("check");

    var val = input.value;
    
    if (val != "") {
        var parent = classParent.getElementsByTagName("ul")[0];
        parent.insertAdjacentHTML("beforeend", 
        `<div class="tList-container">
            <input type="text" readonly class="tList" value="${val}">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-bookmark"></i>
            <i class="fa-solid fa-xmark xList"></i>
            <input type="checkbox" class="check">
        </div>`
            );
        }
        
    else {
        alert("Please fill some List");
    }

    input.value = "";

    // X Button
    for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("click", e => {
            var btn = e.currentTarget;
            var parBtn = btn.parentElement;
            parBtn.style.display = "none";
        });
    }

    // Edit Button
    for (let x = 0; x < editBtn.length; x++) {
        editBtn[x].addEventListener("click", e => {
            var edit = e.currentTarget;
            edit.classList.add("saveBtn");
            var parEdit = edit.parentElement;
            // edit
            var parInput = parEdit.childNodes[1];
            parInput.removeAttribute("readonly");
            edit.style.display = "none"
            // save
            var saveButton = edit.nextElementSibling;
            saveButton.style.display = "block";
        });
    }

    // Save Button
    for (let y = 0; y < saveBtn.length; y++) {
        saveBtn[y].addEventListener("click", e => {
            var save = e.currentTarget;
            var parSave = save.parentElement;
            // readonly on save btn
            var parInput = parSave.childNodes[1];
            parInput.readOnly = true;
            // edit
            save.style.display = "none";
            var pSave = parSave.childNodes[3];
            pSave.style.display = "block";
        });
    }

    // Tick Button
    for (let z = 0; z < checkBtn.length; z++) {
        checkBtn[z].addEventListener("click", e => {
            var tar = e.target;
            var par = tar.parentElement;
            var chil = par.childNodes[1];
            if (tar.checked) {
                chil.style.textDecoration = "line-through";
            }
            else {
                chil.style.textDecoration = "none";
            }
        });
    }
}

function myChecked(e) {
    e.classList.toggle("td");
    if (e.classList[1] === "td") {
        e.style.backgroundColor = "rgb(58, 97, 216)";
    }
    else {
        e.style.backgroundColor = "";
    }
}


function snackBar() {
    var sB = document.getElementsByClassName("snackBar")[0];
    sB.classList.add("show");

    setTimeout(() => {
        sB.classList.remove("show");
    }, 5000);
}


var btnFooter = document.getElementById("footerBtn");
btnFooter.setAttribute("onclick", "myFooter()");

var i = 0;
var txt = document.getElementById("footer");
var insertTxt = "Made by Afiq from Malaysia";
var txtLen = insertTxt.length;

var x = 0;
var txt2 = document.getElementsByClassName("thanks")[0];
var insertTxt2 = `Thanks for Visit 😄`;
var txtLen1 = insertTxt2.length;


function myFooter() {
    if (txtLen > i) {
        txt.innerHTML += insertTxt.charAt(i);
        i++;
        setTimeout(myFooter, 80);
    }
    else if (x < txtLen1) {
        txt2.innerHTML += insertTxt2.charAt(x);
        x++;
        setTimeout(myFooter, 30);
    }
}


var quote = document.getElementsByClassName("slideTxt");
var dots = document.getElementsByClassName("sBtn");

var index = 1;
slideFunc(index);

function mySlide(i) {
    slideFunc(index += i);
}

function slideBtn(num) {
    slideFunc(index = num);
}

function slideFunc(i) {
    var a;

    if (i > quote.length) {
        index = 1;
    }
    else if (i < 1) {
        index = quote.length;
    }

    for (a = 0; a < quote.length; a++) {
        quote[a].style.display = "none";
    }
    quote[index - 1].style.display = "";

    for (a = 0; a < dots.length; a++) {
        dots[a].style.backgroundColor = "";
    }
    dots[index - 1].style.backgroundColor = "royalblue";
}