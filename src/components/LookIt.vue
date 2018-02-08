<template>
  <div class="look-it">
    <img src="../assets/logo.png" alt="">
    <div>{{theData}}</div>
    <span class="closeBtn" @click="closeLootIt">X</span>
  </div>
</template>

<script>
export default {
  name: 'LookIt',
  props:['theData'],
  data () {
    return {
      
    }
  },
  methods: {
    closeLootIt () {
      this.$emit("lookItEvent");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.look-it{
  position: absolute;
  top: 25%;
  left: 25%;
  padding: 20px;

  background: #eee;
  border: 1px solid black;
  border-radius: 5px;
}
.closeBtn{
  position: absolute;
  right: 3px;
  top: 3px;

  cursor: pointer;

  font-size: 20px;
}
</style>
