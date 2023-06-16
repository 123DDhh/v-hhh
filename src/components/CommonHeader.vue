<template>
  <div class="header-container">
    <div class="l-content">
        <div class="l-content-user" @click="dropdownClick">
            <img class="user" src="@/assets/images/header/download.png" />
            <div class="user-dre" v-if="isDropdown">
                <img src="https://h5mp.yiche.com/cheji/zeekr_001/img/login.8bb6fbcf.png"/>
            </div>
        </div>
        <div class="l-content-battery">
            <img src="@/assets/images/header/电量.png"/>
        </div>
        <div class="l-content-battery">
            <img src="@/assets/images/header/气温.png"/>
        </div>
        <div class="l-content-camera">
            <img src="@/assets/images/header/相机.png"/>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "commonHeader",
  data() {
    return {
        isDropdown:false
    }
  },
  methods: {
    // handleMunu() {
    //   this.$store.commit('collapseMenu')
    // }
    dropdownClick(){
        if (this.isDropdown===false) {
            this.isDropdown = true
        } else {
            this.isDropdown = false
        }
    } 
  }
}
</script>
<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #000;
  height: 60px;
}
.l-content {
  display: flex;

}
.l-content-user .user{
    width: 90px;
    height: 100%;
    object-fit: cover;
}
.l-content-user .user-dre{
    z-index: 100000;
    position: absolute;
    left: 200px;
    top: 39px;
    transform: translateZ(0.0116rem);
}
.l-content-user .user-dre img{
    object-fit: cover;
    width: 180px;
    height: 200px;
}
.l-content-battery img{
    width: 90px;
    height: 100%;
    object-fit: cover;
}
.l-content-camera img{
    width: 50px;
    height: 100%;
    object-fit: cover;

}
</style>