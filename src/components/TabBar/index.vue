<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 14:20:53
 * @LastEditTime: 2019-08-27 17:09:20
 * @LastEditors: Please set LastEditors
 -->
<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema">
                <i class="iconfont icon-yingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer{ width:100%; height:100px; background: white; border-top:4px #ebe8e3 solid; position: fixed; left: 0; bottom:0;}
#footer ul{ display: flex; text-align: center; height:100px; align-items:center;}
#footer ul li{ flex:1; height:80px;}
#footer ul li.active{ color: #f03d37;}
#footer ul li.router-link-active{ color: #f03d37;}
#footer ul i{ font-size: 40px;}
#footer ul p{ font-size: 24px; line-height: 36px;}
</style>
