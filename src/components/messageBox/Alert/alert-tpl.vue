import pageChange from '../mixins'
import s from '../utils/selector'
import preventPageScroll from '../utils/prevent-page-scroll'

<<template>
    <component :is="activeView" v-if="show" :w="w"></component>
</template>

export default{
    mixins: [pageChange],
    data(){
        return {
            activeView: '',
            show: false,
            w:{}
        }
    },
    components: {},
    mounted:(){
        preventPageScroll.prevent();
        setTimeout(()=>{
            s('.ms-messagebox-btn-then') && s('.ms-messagebox-btn-then').addEventListener('click',this.success, false);
            s('.ms-messagebox-btn-catch') && s('.ms-messagebox-btn-catch').addEventListener('click',this.fail, false);
        },401);
    },
    methods: {
        success(){
            preventPageScroll.recover();
            s('.ms-messagebox-mask').classList.add('ms-messagebox-mask-diff');
            s('.ms-messagebox-popup').classList.add('ms-messagebox-mask-diff');

            s('ms-messagebox-popup').addEventListener('transitionend',()=>{
                this.show = false;
            },false);
        }
    }
}