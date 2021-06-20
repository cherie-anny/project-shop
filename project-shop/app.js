let productsCountEl = document.getElementById('products-count');
console.log(productsCountEl);


let addToCartButtons = document.querySelectorAll('device-add-button');
console.log(addToCartButtons);

for(let i =0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
        let prevProductsCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProductsCount + 1;
    });
}
// modal
let modal = document.querySelector('.modal');
let moreDetailsButtons = document.querySelectorAll('.device-more-button');
let closeBtn = document.querySelector('.btn-close');

moreDetailsButtons.forEach(item => {
    item.addEventListener('click', function() {
        modal.classList.add('show');
    modal.classList.remove('hide');
    });
    
});

function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
}
closeBtn.addEventListener('click',closeModal);

modal.addEventListener('click', function(e) {
    if(e.target === modal) {
        closeModal();
    }
});

//показ модал.окна при прокрутки 50% страницы
function showModalByScroll () {
    console.log(window.pageYOffset);
    console.log(document.documentElement.scrollHeight);
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal();
    }
}
window.addEventListener("scroll", showModalByScroll);

//like
let likeButtons = document.querySelectorAll('.fav-icon');//знайшли елем.

//спочатку запуск. цикл
likeButtons.forEach(item => item.addEventListener("click",function() {
    // console.log("clicked");
    //считает клики

//щоб можна було лайк і дизлайк поставити
    //вариант-1
    // if(item.classList.contains('liked')) {
    // } else {
    // item.classList.add("liked")
    // }
    
    //вариант-2
    item.classList.toggle('liked');
}));

//Counter
//функ.конструктор Car() -це функ. яка дозвол створ. однотипні екземпляри(однотипні обьекти)
//функ. - назва функ. - параметри функ.
function Car(model,year,color) {
    this.model = model;
    this.year = year;
    this.color = color;
    console.log(this);
//this в серелдині функ.конструктор буде вказувати на новостворений екземпляр
//Car {model: "A4", year: 2015, color: "red"}

    //можемо прописати метод
    // this.hi = function() {
    //     return 'Hi' + this.model
    // }
}
// console.log(audi.hi()); //Hi A4

// виклик функ.конструктор. результат: створився обьект.
let audi = new Car('A4',2015,'red');
let audi1 = new Car('A5',2016,'blue');
console.log(audi);



//изменение колличетсва в корзине
let decrementButtons = document.querySelectorAll('.decrement-button')[0];
let incrementButtons = document.querySelectorAll('.increment-button')[0];
let quantityValue = document.querySelectorAll('.product-quanity input')[0];
console.log(decrementButtons);
console.log(incrementButtons);
console.log(quantityValue);
//чтобы работали кнопки.использ.функ.конструктор:
function Counter(incrementButton,decrementButton,inputField,minCount = 1,maxCount = 10) {
    //далі оголошуємо значення, тобто створюємо обект по цих значеннях
    //domRefs-обект,тобто це посилання на елем.які є на сторінці
    // обект в якому зберігаються ці данні
    // цей синтаксис -це shorthand(коротка форма запису властивостей)
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField,
    };

    //щоб кільк.товарів не йшла в мінус
    this.toggleButtonState = function() {
        const сount = this.domRefs.inputField.value;
        //блокуємо це значення:
        //відкл.чає кнопку тоді, коли поточне значення буде манше= 1.
        this.domRefs.decrementButton.disabled = count <= minCount;
        this.domRefs.incrementButton.disabled = count >= maxCount;
    };
    this.toggleButtonState();

    // щоб додавати і віднімати продукт:
    this.increment = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1; 
        this.toggleButtonState();
    };
    this.decrement = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1; 
        this.toggleButtonState();
    };
    // this.domRefs.incrementButton.addEventListener('click',this.increment);
    this.domRefs.incrementButton.addEventListener("click",this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click",this.decrement.bind(this));

    console.log(this);
}

let counter1 = new Counter(incrementButtons,decrementButtons,quantityValue);

//если функ.будет вызвана как метод обекта.то зис в середине этой функ будет указывать на обьект в кот. она вызывается
// let obj = {
//     name:'Ivan',
//     age:20,
//     hi: function() {

//         function test() {
//             console.log(this);
//         }
//         test();
//     }
// };
// obj.hi();

//можемо привязувати контекст виклику функцій
//потрібно прив'язати цю функю до об'єкту,
// щоб виводилися значення,які прописані в самому об'єкті
function hi(text) {
    console.log(this);
    console.log(text + ' | ' + this.name);
}
// об'єкт:
let ivan = {
    name:'Ivan'
};
let petro = {
    name:'Petro'
};
// для прив'язки контексту є 3 методи:
// call,apply,bind
//першим параметром прив'язуємо контекст.
// маємо сказати на якому об'єкті повинна викликатися дана функ.
hi.call(ivan, 'Hello'); //в call методі параметри передаємо як рядок
hi.call(petro, 'Hi');

hi.apply(ivan, ['bye']); //в apply передаємо все в масиві
hi.apply(petro, ['bye-bye']);

let test = hi.bind(ivan, 'bla-bla');
test();


//slick slider
$('.slider-block').slick({
    autoplay:true,
    dots:true,
});



