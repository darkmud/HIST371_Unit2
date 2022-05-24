document.addEventListener('scroll',function(){
    var scroll = window.pageYOffset;
    document.querySelector('section:nth-of-type(1)').style.filter = 'blur('+ scroll/50 +'px)';

})