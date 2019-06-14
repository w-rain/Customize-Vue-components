export default{
    bind(el){
        el.classList.add('ms-messagebox-popup');

        //init
        el.classList.add('ms-messagebox-popup-transition');
        el.classList.add('ms-messagebox-popup-diff');

        setTimeout(()=>{
            el.classList.remove('ms-messagebox-popup-diff');
        },50);
    }
}