<template>
	<div id="topic">
	    <div id="navbar">
	      <router-link to="/news/a">头条</router-link>
	      <router-link to="/news/b">教育</router-link>
	      <router-link to="/news/c">NBA</router-link>
	      <router-link to="/news/d">健康</router-link>
	      <router-link to="/news/e">军事</router-link>
	      <router-link to="/news/f">娱乐</router-link>
	    </div>
	    <div class="topicwrap">
	    	<div class=wrap v-for="(item, index) in newsList">
	    		<div class="content" v-if="item.pic === ''">
		    		<router-link id="routerlinka" :to="'/detail/' + item.category + '/' + index">{{ item.title }}</router-link>
		    		<p>
		    			<span> {{ item.src }} </span>
		    			<span> {{ item.time }} </span>
		    		</p>
		    	</div>
		    	<div class="contentpic" v-else>
		    		<div class="left">
		    			<router-link id="routerlinka" :to="'/detail/' + item.category + '/' + index">{{ item.title }}</router-link>
		    			<p>
		    				<span> {{ item.src }} </span>
		    				<span> {{ item.time }} </span>
		    			</p>
		    		</div>
		    		<div class="right">
		    			<img v-lazy="item.pic" alt="">
		    		</div>	
		    	</div>
	       </div>
	    </div>  
    </div>
</template>

<script>
	import { getNewsList } from '@/common/js/getData'
	let num = 1
	
	export default {
  data () {
    return {
      newsList: []
    }
  },
	  created () {
    this._getNewsList()
	  },
	  methods: {
    _getNewsList () {
      let paramstype
      switch (this.$route.params.type) {
        case 'a':
          paramstype = '头条'
          break
        case 'b':
          paramstype = '教育'
          break
        case 'c':
          paramstype = 'NBA'
          break
        case 'd':
          paramstype = '健康'
          break
        case 'e':
          paramstype = '军事'
          break
        case 'f':
          paramstype = '娱乐'
          break
      }
      let params = {
        channel: paramstype,
        num: num === 1 ? '20' : num * 10
      }
      getNewsList(params).then((res) => {
        console.log(res)
        if (res.status === 200 && res.data.result.result.list.length) {
          this.newsList = res.data.result.result.list
        }
      }).catch((err) => {
        console.log(err)
      })
    }
	  },
  watch: {
    $route: function () {
      this._getNewsList()
    }
  }
	}
</script>
<style lang="stylus" scoped>
*
 text-decoration none
 color #000
 a
  font-size 20px
#topic
  position relative
  #navbar
    width 100%
    height 38px
    background-color #fff
    display flex
    border 2px solid #f6f6f6
    align-items center
    justify-content space-around
    margin-top 42px
    position fixed
    top 0
    left 0
    z-index 999
    a
      flex-grow 1
      height 100%
      text-align center
      line-height 36px
      font-size 16px
      color #456C77
      text-decoration none
    .router-link-active
      background-color #456C77
      color #FFF
   .topicwrap
     position absolute
     top 85px
     left 0
     width 100%;
     .wrap
      width 100%;
      height auto
      border-bottom 1px solid #ccc;
      overflow hidden;
      .content
       width: 94%;
       height: 6rem;
       letter-spacing: 0.05rem;
       margin: 0 auto;
       padding-top: 0.8rem;
       p
        margin-top: 0.8rem;
	    font-size: 0.6rem;
	    color: #9E9E9E;
	    border-bottom: 0.5rem;
	    .right
	     width 375px
	     height 200px
	     border 1px solid #ff
	     img
	      width 100%
	      height 100%
	      display block  
</style>