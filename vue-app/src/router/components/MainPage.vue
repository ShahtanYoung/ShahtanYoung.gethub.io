<template>
  <div class="el_son">
    <div class="item_list green_line">
      <div>
        <span class="id">ID</span>
        <span class="name">课程名称</span>
        <span class="ctime">创建时间</span>
        <span class="utime">更新时间</span>
      </div>
    </div>
    <div
      v-for="item in tableData"
      :key="item.id"
      class="item_list"
      @click="course(item.id, item)"
    >
      <div>
        <span class="id">{{ item.id }}</span>
        <span class="name">{{ item.name }}</span>
        <span class="ctime">{{ item.create_time }}</span>
        <span class="utime">{{ item.update_time }}</span>
      </div>
      <div>
        <div class="course_List" v-for="data in item.value">
          <div>
            <span>{{ data.id }}</span>
            <span>{{ data.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import lesson from "../../js/lesson/lesson";
import lesson_get from "../../js/lesson/lesson_get";
import lessonCourse from "../../js/course/course";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    course(id) {
      lessonCourse(id);
      let res = localStorage.getItem("course");
      let index = 0;
      var time = null;
      clearInterval(time);
      time = setInterval(function () {
        let Res = localStorage.getItem("course");
        if (res != Res) {
          clearInterval(time);
          let newRes = JSON.parse(Res).data;
          if (newRes.length == 0) {
            newRes[0] = { name: "当前课程暂无章节信息" };
          }
          a(newRes, id);
        } else if (index > 20) {
          clearInterval(time);
        }
        res = Res;
      }, 50);
      let a = this.toolIs;
    },
    toolIs(res, id) {
      this.tableData.forEach(function (value) {
        if (value.id == id) {
          value.value = res;
        }
        console.log();
        return value;
      }, console.log(this.tableData));
    },
  },
  mounted() {
    lesson();
    let newdata = lesson_get();
    this.tableData = newdata;
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
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
.el_son{
  width: 100%;
  height: 100%;
}
</style>
