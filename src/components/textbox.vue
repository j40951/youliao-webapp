<template>
  
  <yd-cell-group>
    <yd-cell-item>
    <yd-input slot="right" v-model="msg" ></yd-input>
    <yd-button type="primary" slot="right">Send</yd-button>
    </yd-cell-item>
  </yd-cell-group>
  
</template>

<script>
// import CHAT from '../api/client'
export default {
  data () {
    return {
      msg:''
    }
  },
  ready(){
    // CHAT.init()
     console.log(CHAT,'ww')
  },
  methods:{
    send(msg){
      // CHAT.submit(msg)
      this.msg=''
      console.log(CHAT)
    }
  }
}
</script>
