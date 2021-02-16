<template>
    <div class="sont-list">
      <div class="banner">
        <div class="mask" :style="{backgroundImage: 'url('+playlistInfo['coverImgUrl']+')'}"></div>
        <div class="pic">
          <div>
            <img :src="playlistInfo['coverImgUrl']" width="160px" height="160px" alt="">
          </div>
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
      }
    }
  }
</script>

<style scoped>
  .sont-list{
    width: 100vw;
    height: 300px;
    position: fixed;
    top: 0;
  }
  .sont-list .banner {
    width: 100%;
    height: 180px;
    top: 0;
    overflow: hidden;
  }

  .sont-list .mask {
    width: 100%;
    height: 180px;
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
    z-index: 2;
    box-sizing: border-box;
  }
  .pic{
    padding-top: 30px;
  }
</style>
