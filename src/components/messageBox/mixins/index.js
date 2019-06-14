
export default{
    mounted(){
        let listener = ()=>{
            this.show = false;
        }
        window.addEventListener('haschange',listener);
        window.addEventListener('haschange',listener);
        window.addEventListener('haschange',listener);
    }
}