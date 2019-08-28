<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 14:50:51
 * @LastEditTime: 2019-08-27 22:01:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="(item,index) in calist" class="infinite-list-item" :key="index" @click="getMain(index)">
        <span class="nm">{{item.nm}}  <em>{{item.sellPrice}}</em><i>元起</i></span>
        <span class="addr">{{item.addr}}  <em>{{item.distance}}</em></span>   
    </li>
  </ul>
</template>
<script>
import { getCalist } from "@/api";
export default {
  data() {
    return {
      calist: null
    };
  },
  methods: {
      getMain(index){
        console.log(index);
      }
  },
  mounted() {
   getCalist().then(({data})=>{
       this.calist= data.data.cinemas;
   })
  
  }
};
</script>
<style lang="less" scoped>
ul {
  li{
      width: 100%;
      height: 200px;
      position: relative;
      background: skyblue;
      border-bottom: 4px solid red;
      
      .nm{
          display: block;
          position:absolute;
          top: 40px;
          left:40px;
          font-size: 34px;
          em{
              font-style: normal;
              color: #ef8075;
              font-size: 36px;
          }
          i{
              font-style: normal;
              font-size: 24px;
          }
      }
      .addr{
          display: block;
          position: absolute;
          top: 100px;
          left: 40px;
          font-size: 30px;
          color: #727272;
      }
  }
}
</style>