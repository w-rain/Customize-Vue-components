import Vue from "vue";
import AlertContainer from "./alert-tpl";
import iosAlert from "../ios/Alert-tpl";

let merge = require("lodash/merge");

let globalConfig = {};
let AlertContructor = Vue.extend(AlertContainer);
let q = {};
let isShowing = false;
let Alert = options => {
  let instance;
  if (!isShowing) {
    instance = new AlertContructor({
      el: document.createElement("div")
    });
    document.body.appendChild(instance.$el);
  } else {
    q.push(options);
    return;
  }

  if (typeof options === "string") {
    options = {
      content: options
    };
  }

  merge(instance.$data.w, globalConfig);
  merge(instance.$data.w, options);

  return new Promise((resolve) => {
    instance.show = true;
    if (instance.$data.w.component) {
      instance.$options.components["userConfig"] = instance.$data.w.component;
      instance.activeView = "userConfig";
    } else {
      instance.$options.components["ios"] = iosAlert;
      instance.activeView = "ios";
    }

    let inputs = Array.prototype.slice.call(document.querySelectorAll("input"));
    inputs.forEach(input => {
      input.blur();
    });
    let success = instance.success;
    instance.success = () => {
      success();
      resolve("ok");
      isShowing = false;
      if (q.length > 0) {
        Alert(q.shift());
      }
    }
  })
}

export default{
    install(Vue, options = {}){
        globalConfig = options;
        Vue.prototype.$alert = Alert;
    }
}
