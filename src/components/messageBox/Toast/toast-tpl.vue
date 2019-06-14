<style scoped lang="less">
.ms-toast {
    position: fixed;
    z-index: 999999;
    line-height: 17px;
}
.ms-toast-default {
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 80px;	
}
.ms-toast-center {
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.ms-toast-top {
	top: 80px;
	left: 50%;
	transform: translate(-50%, -50%);
}
.ms-toast-message {
    font-size: 14px;
    padding: 12px 16px;
    text-align: center;
    color: #fff;
    border-radius: 6px;
    background: #323232;
    opacity: .9;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    img {
    	margin-bottom: 8px;
    }
}
.ms-fade-enter {
  opacity: 0
}
.ms-fade-enter-active, .ms-fade-leave-active {
  transition: opacity .4s
}
.ms-fade-leave-active {
	opacity: 0;
}
</style>
<template>
    <transition name="ms-fade">
        <div class="ms-toast" v-if="show" :class="{'ms-toast-center': location == 'center' || location =='','ms-toast-default': location == 'bottom', 'ms-toast-top': location == 'top'}">
            <div class="ms-toast-message" :style="toastStyle">
                <img :src="path" alt="" :style="imgStyle" v-if="path">
                <div class="ms-toast-text" :style="textStyle">{{content}}</div>
            </div>
        </div>
    </transition>
</template>
<script>
    import pageChange from '../mixins'

    export default{
        mixins:[pageChange],
        data(){
            return {
                show: false,
                content: '',
                duration: 2000,
                location: 'center',
                toastStyle: {},
                imgStyle: {},
                textStyle: {},
                path:''
            }
        }
    }
</script>
