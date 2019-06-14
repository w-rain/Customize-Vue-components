<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="button-container">
      <button type="button" class="btn-default" @click="toast">Toast Button</button>
      <button type="button" class="btn-default" @click="msToast">Toast ms-Button</button>
      <button type="button" class="btn-default" @click="msLoading">Loading ms-Button</button>
      <button type="button" class="btn-default" @click="msAlert">Alert ms-Button</button>
    </div>
    <!-- <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>-->
    <!-- <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>-->
    <!-- <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>-->
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    toast(){
      this.$toast('这是我的toast弹框！');
    },
    msToast(){
      this.$Toast('天生我才必有用', {
					location: 'bottom'
				});
    },
    msLoading(){
      this.$loading.show();
      setTimeout(()=>{
        this.$Toast('加载成功！');
        this.$loading.hide();
      },2000);

    },
    msAlert(){
      this.$alert('那年夏天');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button-container {
  display: flex;
  justify-content: center;
}
.btn-default {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  margin-right: 15px;
}
</style>
