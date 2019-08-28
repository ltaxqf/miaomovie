<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 14:20:53
 * @LastEditTime: 2019-08-27 17:07:16
 * @LastEditors: Please set LastEditors
 -->
<template>
    <header id="header">
        <slot></slot> <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name : 'Header',
    props : {
        title : {
            type : String,
            default : '猫眼电影'
        }
    }
}
</script>

<style scoped>
#header{width:100%; height:100px; color: #fff; background: #e54847; border-bottom: 2px solid #e54847; position: relative;}
#header h1{ font-size: 40px; text-align: center; line-height: 100px; font-weight: normal; }
#header i{ position: absolute; left: 10px; top: 50%; margin-top: -26px; font-size: 52px;}
</style>
