<template>
  <!-- <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row> -->
  <div class="root">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
 data(){
  return { }
 }
}
</script>

<style lang="less">
html, body,h3,p{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
}
.root{
  padding: 0 200px 0 200px;
    background-color: #000;
}
</style>
