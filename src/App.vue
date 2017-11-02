<template>
  <div id="app">
	  <keep-alive>
	    <router-view></router-view>
	  </keep-alive>
    <lists></lists>
  </div>
</template>

<script>
	import Lists from '@/components/lists/lists'
	export default {
	  components: {
	    Lists
	  },
  created () {
	  }
}
</script>

<style scoped lang="stylus">

</style>
