<template>
  <div>
    <!-- HEADER -->
    <div class="header">
      <div class="headbg mx-auto"></div>
      <div class="wings mx-auto"></div>
    </div>

    <!-- BAR -->
    <div class="bar text-center">
      <div class="photoframe">
        <div class="photoframe-box">
          <img src="../assets/mainphoto.png" />
        </div>
      </div>
      <div class="mainphoto">
        <div class="mainphoto-box">
          <v-img
            :aspect-ratio="1"
            lazy-src="https://pbs.twimg.com/profile_images/1454531053922758662/nwTIgMxS_400x400.jpg"
            src="https://pbs.twimg.com/profile_images/1454531053922758662/nwTIgMxS_400x400.jpg"
          ></v-img>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="content">
      <v-container class="content-grid">
        <v-row no-gutters>
          <v-col class="pt-16">
            under construction
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
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
    background-image:url("https://pbs.twimg.com/profile_banners/1437963160544284675/1635368193");
    background-position: top center;
    background-repeat: no-repeat;
    background-size:1080px;
  }
  .wings {
    width:100%;
    height:250px;
    position:absolute;
    z-index:2;
    background-image:url("../assets/header250.png");
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
  background-image:url("../assets/flower.png");
  background-position: center left;
  background-repeat: repeat-x;
  background-size:46px 18px;
  .photoframe {
    width:1px;
    height:1px;
    display:inline-block;
    position:absolute;
    margin:0px auto;
    .photoframe-box {
      margin-top:-300px;
      margin-left:-300px;
      position:relative;
    }
  }
  .mainphoto {
    width:1px;
    height:1px;
    display:inline-block;
    position:absolute;
    margin:0px auto;
    .mainphoto-box {
      width:160px;
      height:160px;
      margin-top:-80px;
      margin-left:-80px;
      position:relative;
      border-radius:50%;
      overflow:hidden;
    }
  }

}
.content {
  min-height:calc(100vh - 290px);
  .content-grid {
    background-color:#C6CBEA;
    min-height:calc(100vh - 290px);
  }
}
</style>
