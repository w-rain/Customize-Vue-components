import Vue from 'vue'
import Toast from './Toast/index'
import Loading from './Loading/index'
import Alert from './Alert/index'

import msThen from './directives/ms-then'
import msCatch from './directives/ms-catch'
import msMask from './directives/ms-mask'
import msPopup from './directives/ms-popup'

import './transition.css'


export default{
    install (Vue){
        Vue.directive('msThen',msThen);
        Vue.directive('msCatch',msCatch);
        Vue.directive('msMask',msMask);
        Vue.directive('msPopup',msPopup);
    }
}

export{
    Toast,
    Loading,
    Alert
}