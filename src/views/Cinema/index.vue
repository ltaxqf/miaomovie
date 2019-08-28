<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 14:20:53
 * @LastEditTime: 2019-08-27 14:56:00
 * @LastEditors: Please set LastEditors
 -->

<template>
<div id="main">
    <Header />
    <Content></Content>
    <CaList></CaList>
    <TabBar />
</div>
</template>
<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Content from "./components/content/index"
import CaList from "./components/CaList/index"
export default {
 name:'Cinema',
 components:{
     Header,
     TabBar,
     Content,
     CaList
 }   
}
</script>
<style>

</style>