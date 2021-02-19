<template>
  <div>
    <div>
      <div class="mask" :style="{backgroundImage: 'url('+playlistInfo['coverImgUrl']+')'}"></div>
      <div class="back_btn" @click="goBack"></div>
      <div class="pic">
        <img :src="playlistInfo['coverImgUrl']" width="160px" height="160px" alt="">
      </div>
    </div>
    <div class="song-list">
      <p class="title">歌曲列表</p>
      <div class="content" v-for="(item,index) in playlistInfo['tracks']" :key="index">
        <router-link :to="'/play/' + item.id">
          <div class="picU">
            <img :src="item['al']['picUrl']" width="80px" height="80px" alt="">
          </div>
          <div class="info">
            <p class="song_name">{{item['al']['name']}}</p>
            <p class="singer_name">{{item['ar']['0']['name']}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        playlistInfo:[],
      }
    },
    created() {
      this.getInfo()
    },
    methods:{
      getInfo(){
        let id = this.$route.params.id
        this.$http('/playlist/detail',{params:{id}})
        .then(res=>{
          this.playlistInfo = res.data.playlist
          console.log(res.data.playlist);
        })
        .catch(err=>{
          console.log(err);
        })
      },
      goBack(){
        this.$router.push('/reCom/')
      }
    }
  }
</script>

<style scoped>
  .back_btn{
    z-index: 2;
    width: 35px;
    height: 35px;
    position: absolute;
    background-image: url("../../static/img/back.png");
    background-size: cover;
    margin: 10px;
  }
  .mask {
    width: 100vw;
    height: 180px;
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 40%;
    filter: blur(15px);
    transform: scaleY(1.5);
    overflow: hidden;
  }
  .pic {
    z-index: 2;
    box-sizing: border-box;
    padding-top: 40px;
  }
  .song-list{
    padding-top: 50px;
  }
  .title{
    text-align: left;
    padding-left: 5px;
    font-size: 20px;
    margin:6px 0;
  }
  .content{
    width: 100vw;
    height: 80px;
    margin-bottom: 6px;
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
    width: 285px;
    float: left;
    text-align: left;
    padding-left: 5px;
  }
  .song_name{
    color: black;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .singer_name{
    font-size: 13px;
    color: #767373;
  }
</style>
