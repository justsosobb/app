<template>
  	<div id="topic-detail">
	    <div id="header">
	        <div id="back" @click="returnback">
	          <img :src="require('@/assets/image/back.png')" alt="" />
	        </div>
	        <div id="des">详情</div>
	        <div style="width:34px"></div>
	      </div>
	      <div class="content" v-for="item in newsList">
		      <h3> {{ item.title }} </h3>
		      <div class="newsContent" v-html="item.content">
		        {{ item.content }}
		      </div>
	        <img class="imgpic" :src="item.pic" alt="">
	      </div>
	    </div>
</template>

<script>
import { getNewsList } from '@/common/js/getData'
export default {
  data () {
    return {
      newsList: [],
      arr: []
    }
  },
  created () {
      // console.log(this.$parent.$route.path)
    let str = this.$parent.$route.path
    this.arr = str.split('/')
//  console.log(this.arr)
    this._getNewsList()
//  console.log(this.newsList)
  },
  methods: {
    returnback () {
      this.$router.back()
    },
    _getNewsList () {
      let paramstype
      switch (this.arr[2]) {
        case 'finance':
          paramstype = '头条'
          break
        case 'edu':
          paramstype = '教育'
          break
        case 'sports':
          paramstype = 'NBA'
          break
        case 'health':
          paramstype = '健康'
          break
        case 'mil':
          paramstype = '军事'
          break
        case 'ent':
          paramstype = '娱乐'
          break
      }
      let params = {
        channel: paramstype,
        num: 1,
        start: this.arr[3]
      }
      getNewsList(params).then((res) => {
        if (res.status === 200 && res.data.result.result.list.length) {
            // console.log(res.data.result.result.list[0].content)
//        console.log(res.data.result.result.list)
          this.newsList = res.data.result.result.list
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  #topic-detail
    width 100%
    height 100%
    margin-bottom 40px
    position absolute
    left 0
    top 0
    #header
      display flex
      height 38px
      background #456C77
      color #FFF
      align-items center
      margin-top 40px
      #back
        width 30px
        height 30px
        display flex
        align-items center
        margin-left 4px
        img
          display block
          width 24px
          height 24px
      #des
        font-size 16px
        flex-grow 1
        text-align center
    .content{
    width: 100%;
    padding-bottom: 5rem;
  }
  .content h3{
    width: 95%;
    margin: 0 auto;
    margin-top 10px
    font-size: 1.3rem;
    line-height: 1.5rem;
    letter-spacing:0.1rem;
  }
  .newsContent{
    width: 95%;
    margin: 0 auto;
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 2rem;
  }
  .imgpic{
    width: 90%;
    margin: 0 auto;
    display: block;
  }
</style>