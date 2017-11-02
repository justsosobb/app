<template>
	<div class="top" href="javascript:void()">
      <div class="logo" @click="returnback">
        <img src="../../assets/image/logo.png">
      </div>
      <div class="slogan">
        <div class="slogan-title">属于的新闻</div>
      </div>
    </div>
</template>

<script>
	export default {
  methods: {
    returnback () {
      this.$router.back()
    }
  }
	}
</script>

<style scoped lang="stylus">
.top {
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 1000;
padding: 3px 18px;
font-size: 0;
background-color: #fff;
box-shadow: 0 2px 4px rgba(0,0,0,.1);
}
.top .logo {
    height: 42px;
    vertical-align: middle;
    display: inline-block;
}
.top .logo img {
    height: 100%;
}
.top .slogan {
    margin: 0 0 0 12px;
    font-size: 12px;
    color: #333;
    vertical-align: middle;
    display: inline-block;
}
.top .slogan .slogan-title {
    font-size: 16px;
    color: #333;
    line-height: 20px;
}
</style>