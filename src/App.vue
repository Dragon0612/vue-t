
<template>
    <div class="app-container">
        <mt-header fixed title="Vue-黑马项目"></mt-header>



		<!-- 中间部分展示的组件 -->
		<transition>
		<router-view></router-view>
		</transition>

        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item" to="search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
        
    </div>
</template>

<script>

</script>

<style <style lang="scss" scoped>

.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
	// 消除滚动条的出现
  overflow-x: hidden;
}

// 这里进入和离开是控制两个组件吗？
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
//  离场也是向左滑
  transform: translateX(-100%); 
//   这个绝对定位很关键，可以消除组件由下在向上的效果
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>



