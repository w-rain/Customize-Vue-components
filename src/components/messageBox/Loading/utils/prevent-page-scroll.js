let preventPageScroll =e =>{
    return e.preventPageScroll();
};

export default{
    prevent(){
        document.addEventListener('touchmove', preventPageScroll, false);
    },
    recover(){
        document.addEventListener('touch',preventPageScroll,false);
    }
}