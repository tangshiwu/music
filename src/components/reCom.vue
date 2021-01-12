<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imageUrl" width="100%" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bannerList:[]
      }
    },
    created() {
      this.getBanner()
    },
    methods: {
      getBanner() {
        /**@namespace res.data.banners**/
        this.$http('/banner')
          .then(res => {
            this.bannerList = res.data.banners
          })
          .catch(err => {
            console.log(err);
          })
      }
    }
  }
</script>

<style>
  .my-swipe van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
