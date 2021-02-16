<template>
  <div>
    <div class="top">
      <span class="you-music">优音乐</span>
      <span class="download">下载APP</span>
    </div>
    <div class="nav">
      <router-link class="link" to="/reCom">推荐</router-link>
      <router-link class="link" to="/hot">热歌榜</router-link>
      <router-link class="link" to="/search">搜索</router-link>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .top{
    height: 80px;
    width: 100%;
    background-color: #ff4b00;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    font-size: 20px;
    color: white;
  }
  .you-music{
    position: relative;
    float: left;
    padding: 25px 10px;
  }
  .download{
    font-size: 18px;
    position: relative;
    float: right;
    width: 90px;
    margin: 25px 10px;
    background-color: white;
    border-radius: 20px;
    color: red;
  }
  .nav{
    width: 100%;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 6;
    background-color: white;
  }
  .nav .link{
    font-size: 20px;
    /*padding: 10px;*/
    color: black;
    display: inline-block;
    width: 32%;
    text-align: center;
    height: 46px;
    line-height: 46px;
  }
  /*当页面的url和router-link的to相同时，自动添加.router-link-active这个class*/
  .nav .link.router-link-active {
    color: red;
    text-decoration: underline;
  }
  .router-view{
    margin-top: 126px;
  }
</style>

