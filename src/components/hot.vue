<template lang="html">
  <div class="hot">
    <div class="banner">
      <div class="mask"></div>
      <div class="pic">
        <div class="cloud"></div>
      </div>
      <p class="date">更新日期: {{updateMonth>9?updateMonth:"0"+ updateMonth}}月{{updateDate1}}日</p>
    </div>
    <div v-for="(item,index) in hotSongs" :key="index" class="hot_song">
      <div class="picU">
        <img :src="item['al']['picUrl']" width="80px" height="80px" alt="">
      </div>
      <div class="info">
        <p>{{item['al']['name']}}</p>
        <p class="singer_name">{{item['ar']['0']['name']}}</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        updataTime: '',
        updateMonth: '',
        updateDate1: '',
        hotSongs:[]
      }
    },
    created() {
      this.getHotSong()
    },
    methods: {
      getHotSong: function () {
        /**@namespace data.playlist.updateTime**/
        /**@namespace data.playlist.tracks**/
        this.$http('/top/list?idx=1')
          .then(res => {
            this.updataTime = res.data.playlist.updateTime
            let updateDate = new Date(this.updataTime)
            this.updateMonth = updateDate.getMonth() + 1
            this.updateDate1 = updateDate.getDate()
            this.hotSongs = res.data.playlist.tracks
            console.log(res.data.playlist.tracks);
          })
          .catch(err => {
            console.log(err);
          })
      }
    },
  }
</script>

<style scoped>
  .hot .banner {
    width: 100%;
    height: 180px;
    position: relative;
    overflow: hidden;
  }

  .hot .mask {
    width: 100%;
    height: 180px;
    background-image: url('http://p2.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg');
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 40%;
    filter: blur(15px);
    transform: scale(1.5);
  }

  .banner .pic {
    top: 25%;
    bottom: 0;
    z-index: 2;
    padding-left: 20px;
    box-sizing: border-box;
    position: relative;
  }

  .cloud {
    width: 168px;
    height: 78px;
    background-image: url('../../static/img/index_icon_2x.png');
    background-repeat: no-repeat;
    background-position: -28px -33px;
    background-size: 168px 112px;
  }

  .date {
    margin-top: 60px;
    margin-left: 20px;
    color: #fff;
    position: relative;
    float: left;
  }
  .hot_song{
    width: 100vw;
    height: 80px;
    margin-top: 6px;
    background-color: #f8f6f6;
  }
  .picU{
    display: inline-block;
    width: 80px;
    height: 80px;
    float: left;
    top: 0;
  }
  .info{
    display: inline-block;
    height: 80px;
    width: 100px;
    float: left;
    text-align: left;
    padding-left: 5px;
  }
  .singer_name{
    font-size: 13px;
    color: #767373;
  }
</style>
