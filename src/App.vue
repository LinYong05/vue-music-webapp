<template>
  <div id="app">
    <m-header></m-header>
    <Tab></Tab>
    <keep-alive>
  		<router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
export default {
  components:{
  	MHeader,
  	Tab,
    Player
  },
  created() {
    //设置title
    let OriginTitile = document.title,
      titleTime;
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        document.title = '死鬼去哪里了！';
        clearTimeout(titleTime);
      } else {
        document.title = '(つェ⊂)咦!又好了!';
        titleTime = setTimeout(function() {
          document.title = OriginTitile;
        }, 2000);
      }
    });
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
