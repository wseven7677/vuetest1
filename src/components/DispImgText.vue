<template>
  <div class="dispIT">
    <p>
      the block function is {{blockName}}. the deleted block is {{deletedName}}.
    </p>
    <OneDisp 
      v-for="item in collections" 
      :theName="item" 
      @clickEvent="clickEventFun(item)"
      @lookItEvent="lookItEventFun(item)"
    />
    <LookIt 
      :theData="theLookedItem" 
      v-if="showIt"
      @lookItEvent="lookItEventFun" />
  </div>
</template>

<script>
import OneDisp from './OneDisp'
import LookIt from './LookIt'

export default {
  name: 'DispImgText',
  props: ["blockName"],
  components: {
    OneDisp,LookIt
  },
  data () {
    return {
      deletedName: 'none',
      collections: ['小赵','小王','小李','小孙','小刘'],
      theLookedItem: 'none',
      showIt: false
    }
  },
  methods: {
    clickEventFun: function(item){
      if(!confirm("确定删除"+item+"?")){
        return;
      }
      this.deletedName = item;

      var foundItem = this.collections.indexOf(item);
      this.collections.splice(foundItem,1);
    },
    lookItEventFun (item) {
      this.showIt = !(this.showIt);
      if(!item){
        return;
      }
      this.theLookedItem = item;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dispIT {
  padding: 10px;
  margin: 10px; 
  border: 3px solid blue;
  border-radius: 10px;
}
</style>
