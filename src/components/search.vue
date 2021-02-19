<template>
<div class="search">
  <div class="input-content">
    <i class="find"></i>
    <van-search
      v-model="keyword"
      show-action
      placeholder="请输入搜索关键词"
      shape="round"
      @search="goSearch(keyword)"
    >
      <template #action>
        <div @click="onCancel">取消</div>
      </template>
    </van-search>
<!--    <label>-->
<!--      <input-->
<!--        type="text"-->
<!--        class="input"-->
<!--        v-model="keyword"-->
<!--        placeholder="请输入关键字"-->
<!--      >-->
<!--    </label>-->
  </div>
  <div class="hot-content" v-if="isShow">
    <span
      v-for="(item,index) in hotList['hots']"
      :key="index"
      class="hotword"
    @click="goSearch(item.first)">
      {{item.first}}
    </span>
  </div>
  <div v-else>
    <div
      v-for="(item,idx) in searchList['songs']"
      :key="'search'+idx"
      class="search-result"
    >
      <div :class="['rank',{isRed:idx<3}]">
        {{idx+1>9?(idx+1):"0"+(idx+1)}}
      </div>
      <div class="content">
        <router-link :to="'/play/'+item.id">
          <p class="song_name">{{item.name}}</p>
          <i class="sq"></i>
          <span
            v-for="(artist, idx) in item['artists']"
            v-if="idx<3"
            :key="'artist'+idx"
            class="singer"
          >
            {{artist.name}}
            <!-- 歌手是多人时，添加分割线 -->
            <span v-if="item['artists'].length>1 && idx!== item['artists'].length-1">/</span>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      data(){
        return{
          keyword:'',
          hotList:[],
          isShow:true,
          searchList:[],
        }
      },
      created() {
        this.getHot()
      },
      methods:{
        getHot(){
          this.$http('/search/hot')
          .then(res=>{
            this.hotList = res.data.result
          })
          .catch(err=>{
            console.log(err);
          })
        },
        goSearch(word){
          this.keyword = word
          // this.$http('search/?keywords='+word)
          this.$http('search',{params: {keywords:word}})
          .then(res=>{
            this.isShow = false
            this.searchList = res.data.result
            console.log(res.data.result);
          })
          .catch(err=>{
            console.log(err);
          })
        },
        onCancel(){
          this.keyword = ''
          this.isShow = true
        }
      }
    }
</script>

<style scoped>
  .input-content{
    position: relative;
  }
  /*.input{*/
  /*  display: block;*/
  /*  width: 300px;*/
  /*  height: 36px;*/
  /*  margin: 0 auto;*/
  /*  background-color: #f4f4f4;*/
  /*  border: none;*/
  /*  outline: none;*/
  /*  border-radius: 20px;*/
  /*  padding-left: 40px;*/
  /*}*/
  .isRed{
    color: red;
  }
  /*.find{*/
  /*  display: inline-block;*/
  /*  width: 18px;*/
  /*  height: 18px;*/
  /*  background-image: url("../../static/img/search.png");*/
  /*  background-size: contain;*/
  /*  position: absolute;*/
  /*  left: 30px;*/
  /*  top: 10px;*/
  /*}*/
  .hot-content{
    margin: 0 10px;
  }
  .hotword{
    padding: 8px;
    border: 1px solid #888;
    border-radius: 20px;
    margin: 8px;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .search-result{
    width: 100vw;
    height: 60px;
    margin-top: 6px;
  }
  .singer{
    color: slateblue;
    font-size: 13px;
  }
  .rank{
    display: inline-block;
    width: 13px;
    height: 20px;
    float: left;
    text-align: center;
    padding: 20px;
  }
  .content{
    display: inline-block;
    height: 60px;
    width: 80vw;
    float: left;
    text-align: left;
    padding-left: 5px;
    border-bottom: #dbd7d7 1px solid;
  }
  .song_name{
    margin: 0;
    padding: 7px 0;
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
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
