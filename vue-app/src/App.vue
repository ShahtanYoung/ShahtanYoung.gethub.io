<template>
    <div>
        <div class="fake_body">
            <el-container>
                <div class="infor"></div>
                <el-header>
                    <h1>课程管理系统</h1>
                    <button class="new_manager" @click="Register()">&#10010</button>
                    <div class="head_img">
                        <img :src="circleUrl" /><i @click="myInfor()" class="get_infor"></i>
                    </div>
                    <!-- <router-view></router-view> -->
                </el-header>
                <el-container class="main_place">
                    <el-aside>
                        <template slot="home"><i class="el-icon-message"></i>首页</template>
                        <template slot="leeesons"><i class="el-icon-menu"></i>课程</template>
                        <template slot="video"><i class="el-icon-setting"></i>视频</template>
                    </el-aside>
                    <el-container class="right_place">
                        <el-main>
                            <router-view></router-view>
                        </el-main>
                        <el-footer>
                            <router-link to="/LoginPage">LoginPage</router-link>
                        </el-footer>
                    </el-container>
                </el-container>
            </el-container>
        </div>
    </div>
</template>
<script>
import LoginPage from "./router/components/LoginPage.vue";
import landing from "./js/landing";
landing()
export default {
    name: "App",
    data() {
        return {
            circleUrl:
                "https://img1.baidu.com/it/u=2487775524,2945614485&fm=253&fmt=auto&app=138&f=JPEG?w=687&h=500",
            "name": "name",
            sizeList: ["large", "medium", "small"]
        }
    },
    created() {
        console.log('App.vue created');
    },
    

    methods: {
        Register() {
            
        },
        myInfor() {
            console.log(document.querySelector(".infor").style.display)
        },
        mounted() {
            this.circleUrl = `https://www.chengzier.cn:8000/${localStorage.getItem("avator")} `
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
}

.fake_body {
    position: relative;
}

h1 {
    font-size: 3vw;
    line-height: 8vw;
    height: 8vw;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.the_mask {
    display: none;
}

.el-header,
.el-footer {
    position: relative;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 8vh;
    height: 12vh !important;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 12vh;
    width: 20% !important; 
    height:88vh ;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 5vw;
    height: 76vh !important;
    overflow: scroll;
}

.main_place {
    display: flex;
    height: 88vh !important;
}

.main_place>.el-container {
    width: 84% !important;

}

.head_img {
    top: 1.5vmin;
    right: 1.5vmin;
    width: 8vmin;
    height: 8vmin;
    border-radius: 3vw;
    position: absolute;
    overflow: hidden;
}

.head_img>img {
    position: absolute;
    top: 0;
    left: 0;
}

.item_list {
    width: 90%;
    margin: 0 5%;
    border-bottom: #3333 1px solid;
}

.item_list>span {
    display: inline-block;
    text-align: left;
    font-size: 2vw;
    padding: 0 1%;
}

.id {
    width: 8%;
    display: inline-block;
}

.name {
    width: 20%;
    display: inline-block;
}

.ctime,
.utime {
    width: 30%;
    display: inline-block;
}

.new_manager {
    position: absolute;
    right: 5vw;
    top: 5vw;
    width: 3vw;
    height: 3vw;
    border: 0;
    font-size: 3vw;
    background-color: #0000;
}

.create_account {
    display: block;
    position: absolute;
    /* display: none; */
}

.get_infor {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
}

.infor {
    display: block;
}

.a {
    width: 100%;
    height: 10px;
}

.green_line {
    background-color: #0c0;
}

.course_list {
    display: block;
}
</style>
