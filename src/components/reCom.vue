<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item['imageUrl']" alt="" width="100%">
      </van-swipe-item>
    </van-swipe>
    <div class="songList-content">
      <div class="line">推荐歌单</div>
      <div v-for="(item,index) in songList"
           :key="index"
           class="songList"
           @click="goInfo(item.id)"
      >
        <img :src="item['picUrl']" width="80px" height="80px" alt="">
        <p class="song-title">{{item.name}}</p>
      </div>
    </div>
    <div>
      <div class="line">最新音乐</div>
      <div v-for="(item,index) in newSongList"
           :key="index"
            class="song-div">
        <p class="song-name">
          <router-link :to="'/play/'+item.id">{{item.name}}</router-link>
        </p>
        <p class="artist-name">
          <i class="sq"></i>
          <span
            v-for="(artist,idx) in item['song']['artists']"
            :key="'artist'+idx">{{artist.name}}
            <!--          歌手人数较多，加/-->
            <span v-if="item['song']['artists'].length>1 && idx !== item['song']['artists'].length - 1">/</span>
          </span>
          <i class="play"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bannerList: [],
        songList: [],
        newSongList:[]
      }
    },
    created() {
      if (localStorage.getItem('banner')) {
        this.bannerList = JSON.parse(localStorage.getItem('banner'))
      } else {
        this.getBanner()
      }
      this.getSongList()
      this.getNewSongList()
    },
    methods: {
      getBanner() {
        /**@namespace res.data.banners**/
        this.$http('/banner')
          .then(res => {
            this.bannerList = res.data.banners
            localStorage.setItem('banner', JSON.stringify((this.bannerList)))
          })
          .catch(err => {
            console.log(err);
          })
      },
      //获取歌单
      getSongList() {
        this.$http('/personalized?limit=6')
          .then(res => {
            this.songList = res.data.result
          })
          .catch(err => {
            console.log(err);
          })
      },
      getNewSongList(){
        this.$http('/personalized/newsong')
          .then(res => {
            this.newSongList = res.data.result
          })
          .catch(err => {
            console.log(err);
          })
      },
      goInfo(id){
        this.$router.push('/playlist/'+id)
      },
    }
  }
</script>

<style scoped>
  .my-swipe van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  .line {
    height: 20px;
    line-height: 20px;
    border-left: 2px solid #f00;
    font-size: 20px;
    margin-top: 10px;
    padding-left: 18px;
    text-align: left;
  }
  .songList-content{
    min-height: 330px;
  }
  .songList{
    float: left;
    width: 28%;
    margin: 10px 8px;
  }
  .song-div {
    border-bottom: 1px solid #f4f4f4;
    padding-left: 10px;
    text-align: left;
  }
  .song-title{
    margin: 0;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .song-name {
    font-size: 16px;

  }
  .artist-name {
    font-size: 12px;
    color: #666;
  }
  .sq {
    display: inline-block;
    width: 14px;
    height: 10px;
    background-image: url('../../static/img/index_icon_2x.png');
    background-size: 186px 109px;
    background-position: 0 0;
  }

</style>
