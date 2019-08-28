<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 14:50:15
 * @LastEditTime: 2019-08-27 21:41:33
 * @LastEditors: Please set LastEditors
 -->
<template>
    <ul>
      <li>全城</li>
      <li>品牌</li>
      <li>特色</li>
    </ul>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
       ul{
           width: 100%;
           height: 80px;
           display: flex;
           line-height: 80px;
           border-bottom: 4px solid red;
           box-sizing: border-box;
          //  padding-bottom:20px;
           li{
             width:calc(100% / 3);
             text-align: center;
             font-size: 30px;
             font-weight: bold;
           }
       }
</style>