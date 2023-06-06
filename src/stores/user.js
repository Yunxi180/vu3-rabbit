
import {defineStore} from "pinia";
import {ref} from "vue";
import {loginAPI} from "@/apis/user";

export const useUserStore = defineStore('user',()=>{
    //1.定义管理用户数据的state
    const userInfo =ref({})
    //2.定义获取接口数据的action
    const getUserInfo =async ({account,password})=>{
       const res = await loginAPI({account,password})
        userInfo.value =res.result
    }
    return{
        userInfo,
        getUserInfo
    }
})