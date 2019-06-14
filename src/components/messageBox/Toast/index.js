import Vue from "vue";
import ToastComponent from "./toast-tpl";

let merge = require( "lodash/merge");

let instance,
  globalConfig = {},
  showing = false;
let ToastConstructor = Vue.extend(ToastComponent);

let initInstance = () => {
  instance = new ToastConstructor({
    el: document.createElement("div")
  });
  document.body.appendChild(instance.$el);
};

let Toast = (content, options = {}) => {
  if (!showing) {
    showing = true;
    initInstance();
    instance.content = content;
    merge(instance.$data, globalConfig);
    merge(instance.$data, options);
    instance.show = true;

    setTimeout(()=>{
        showing = false;
        instance.show = false;
    },instance.duration);
  }
};

export default{
    install(Vue, config={}){
        globalConfig = config;
        Vue.prototype.$Toast = Toast;
    }
}
