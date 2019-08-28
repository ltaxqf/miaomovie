/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 15:12:28
 * @LastEditTime: 2019-08-27 15:15:47
 * @LastEditors: Please set LastEditors
 */
module.exports = {
   css: {
           loaderOptions: {
             css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 75
              })
               ]
             }
           }
       },
 }