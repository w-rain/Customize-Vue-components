
<style lang="less" scoped>
/* mask 的样式*/
.ms-mask {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .4);
    z-index: 999998;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.ms-popup {
    position: fixed;
    z-index: 999999;
    top: 50%;
    left: 50%;
    overflow: hidden;
    width: 270px;
    transform: translate3d(-50%, -50%, 0) scale(1.185);
    text-align: center;
    color: #000;
    border-radius: 13px;
}
.ms-popup.ms-popup-in {
    display: block;
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 1;
}
.ms-popup.ms-popup-out {
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 0;
}
.ms-popup-inner {
    position: relative;
    padding: 15px;
    border-radius: 13px 13px 0 0;
    background: rgba(255, 255, 255, .95);
}
.ms-popup-inner:after {
    position: absolute;
    z-index: 15;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    content: '';
    transform: scaleY(.5);
    transform-origin: 50% 100%;
    background-color: rgba(0, 0, 0, .2);
}
.ms-popup-title {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
}
.ms-popup-title + .ms-popup-text {
    font-family: inherit;
    font-size: 14px;
    margin: 5px 0 0;
}
.ms-popup-buttons {
    position: relative;
    display: flex;
    height: 44px;
    justify-content: center;
}
.ms-popup-button {
    font-size: 17px;
    line-height: 44px;
    position: relative;
    display: block;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0 5px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #007aff;
    background: rgba(255, 255, 255, .95);
    letter-spacing: 0.5px;
    cursor: pointer;
}
.ms-popup-button:after {
    position: absolute;
    z-index: 15;
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    display: block;
    width: 1px;
    height: 100%;
    content: '';
    transform: scaleX(.5);
    transform-origin: 100% 50%;
    background-color: rgba(0, 0, 0, .2);
}
.ms-popup-button:first-child {
    border-radius: 0 0 0 13px;
}
.ms-popup-button:first-child:last-child {
    border-radius: 0 0 13px 13px;
}
.ms-popup-button:last-child {
    border-radius: 0 0 13px 0;
}
.ms-popup-button-bold {
    font-weight: 600;
}
.ms-popup-button:last-child:after {
    display: none;
}  
</style>
<template>
    <div class="ms-mask" v-wc-mask>
        <div class="ms-popup wc-popup-in" v-wc-popup>
            <div class="ms-popup-inner">
                <div class="ms-popup-title">{{w.title || "提示"}}</div>
                <div class="ms-popup-text">{{w.content}}</div>
            </div>
            <div class="ms-popup-buttons">
                <span class="ms-popup-button ms-popup-button-bold" :style="w.style" v-wc-then>
                   {{w.btnText || "确定"}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    import wcThen  from '../directives/ms-then'
    import wcCatch from '../directives/ms-catch'
    import wcMask  from '../directives/ms-mask'
    import wcPopup from '../directives/ms-popup'
	export default {
		props: ['w'],
        directives: {
            wcThen,
            wcCatch,
            wcMask,
            wcPopup
        }
	}
</script>