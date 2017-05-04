 ;(function(){
        MVC.controller.init("advice1","template1");
        MVC.controller.start();
        /****************************商品展示***************************/

        var swiper = new Swiper('.swiper-goods-container', {
        paginationClickable: true,
        slidesPerView:'auto',//代表按照slide宽度作为一屏的宽度，也可以设置具体值
        spaceBetween: 8,
        freeMode: true,
        // centeredSlides: true,//默认slide居左，设为true会居中
        autoplay: false,
        lazyLoading : true,
        autoplayDisableOnInteraction: false
        });
})()