<template>
    <!-- 定义容器类样式 -->
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <!-- maxlength ="120" -->
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click='getdata'>发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
                                                                                  <!-- 这里可能报错，可能同一时间有多个评论 -->
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
            <!-- 三元表达式 -->
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, // 默认展示第一页数据
      comments: [], // 所有的评论数据
      msg:'',
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      // 获取评论
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex) //使用变量
        .then(result => {
          if (result.body.status === 0) {
            console.log(result.body)
            // this.comments = result.body.message;
            // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据 concat
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("获取评论失败！");
          }
        });
    },
    getMore() {
      // 加载更多
      this.pageIndex++;
      this.getComments();
    },
    getdata(){
      // 检测文本框内容是否为空
      if(this.msg.trim().length===0){
       return  Toast('请输入文本内容');
        
      } 

      // 这里要注意路径 不要在api前面加 /
      this.$http.post('api/postcomment/'+this.$route.params.id,{
        content:this.msg.trim()
      }).then(function(result){
        if(result.body.status===0){
          // 为什么这里不能重新发送ajax刷新页面
          // this.getComments();
          let newpost={
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
          };
          this.comments.unshift(newpost);
          this.msg = "";
        }
      })


      
    },
  },
  // 为什么要传过来，而不直接获取？
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
