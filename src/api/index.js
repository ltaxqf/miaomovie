/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 20:07:41
 * @LastEditTime: 2019-08-27 20:09:31
 * @LastEditors: Please set LastEditors
 */
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:3000/api"
export function getCalist(){
    return axios.get("getCalist");
}