import Vue from "vue";
import Loading from "./loading-tpl";
import preventPageScroll from "./utils/prevent-page-scroll";

/* build instance */
let instance;
/* build constructor functio */
let loadingConstructor = Vue.extend(Loading);

/* init instance */
let initInstance = () => {
  instance = new loadingConstructor({
    el: document.createElement("div")
  });
  document.body.appendChild(instance.$el);
};

let isShowing = false;

let show = text => {
  if (!isShowing) {
    isShowing = true;
    initInstance();
    instance.show = true;
    instance.text = text ? text : "正在加载";

    /*  prevent page scroll */
    preventPageScroll.prevent();
  }
};

let hide = () => {
  instance.show = false;
  isShowing = false;

  /* recover page scroll */
  preventPageScroll.recover();
};

export default {
  install(Vue) {
    Vue.prototype.$loading = {
      show,
      hide
    };
  }
};
