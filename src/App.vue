<template>
  <v-app>
    <!-- HEADER -->
    <div class="header" id="header">
      <div class="headbg mx-auto"></div>
      <div class="wings mx-auto"></div>
    </div>

    <!-- BAR -->
    <div class="bar text-center">
      <div class="mainphoto">
        <div class="mainphoto-box">
          <v-img
            :aspect-ratio="1"
            lazy-src="./assets/logo.png"
            src="./assets/logo.png"
          ></v-img>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="content">
      <router-view/>
    </div>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.header {
  width:100%;
  height:250px;
  background:linear-gradient(to right, #93bdf7 40%, #b294ed 60%);
  position:relative;
  .headbg {
    width:100%;
    height:250px;
    position:absolute;
    z-index:1;
    background-image:url("./assets/headermatt-250.png");
    background-position: center 0px;
    background-repeat: repeat-y;
    background-size:1080px;
  }
  .wings {
    width:100%;
    height:250px;
    position:absolute;
    z-index:2;
    background-image:url("./assets/header250.png");
    background-position: top center;
    background-repeat: no-repeat;
  }
}
.bar {
  width:100%;
  height:40px;
  position:relative;
  z-index:3;
  background-color:#858ED1;
  background-image:url("./assets/flower.png");
  background-position: center left;
  background-repeat: repeat-x;
  background-size:46px 18px;
  .mainphoto {
    width:1px;
    height:1px;
    display:inline-block;
    position:absolute;
    margin:0px auto;
    .mainphoto-box {
      width:256px;
      height:256px;
      margin-top:-190px;
      margin-left:-128px;
      position:relative;
      border-radius:50%;
      overflow:hidden;
    }
  }
}
</style>
