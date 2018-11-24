<template>
    <div>
        <mt-swipe :auto="4000">
        <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <!-- 这里规定死了src为item的一个img属性，所以要注意后台发送过来的数据，做一些处理 -->
            <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: cyan;
    }

    img {
      width: 100%;
      // height: 100%;
    }
  }
}//swiper
</style>


