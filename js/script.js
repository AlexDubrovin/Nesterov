let rightMenu = document.querySelector('.header__right-menu');
let menuBtn = document.querySelector('.header__menu');
let body = document.getElementsByTagName('body')[0];

menuBtn.addEventListener('click', function(){
   this.classList.toggle('menu-open');
   rightMenu.classList.toggle('_active');
   body.classList.toggle('lock');
});


const animItems = document.querySelectorAll('._anim-items'); //Задаем дежурный класс для анимации

if(animItems.length > 0){
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll(params){
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];//получаю в переменной animItem каждый элемент массива
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemPoint > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
            animItem.classList.add('_active');
         }else{
            //Убираем повторную анимацию при скролле назад
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   // == Задержка при вызове функции
   setTimeout(() => {
      animOnScroll();
   }, 300);
}

