export default{
    bind(el){
        el.classList.add('ms-messagebox-mask');

        //init
        el.classList.add('ms-messagebox-mask-transition');
        el.classList.add('ms-messagebox-mask-diff');

        setTimeout(()=>{
            el.classList.remove('ms-messagebox-mask-diff');
        },50);
    }
}