<template>
  <div class="one-disp">
    <img @click="lookIt" src="../assets/logo.png" alt="logo">
    <p>
    Welcome to ycjxc, and the number is {{theName}}.
    </p>
    <span class="closeBtn" @click="deleteBlock">X</span>
  </div>
</template>

<script>
export default {
  name: 'OneDisp',
  props:['theName'],
  data () {
    return {
      
    }
  },
  methods: {
    deleteBlock: function(){
      this.$emit("clickEvent");
    },
    lookIt: function(){
      this.$emit("lookItEvent");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height: 50px;
  cursor: pointer;
}
.one-disp{
  position: relative;
  display: inline-block;
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
}

.one-disp:hover .closeBtn{
  display: block;
}

.closeBtn{
  display:none;
  position: absolute;
  right: 3px;
  top: 3px;

  cursor: pointer;

  font-size: 20px;
}
</style>
