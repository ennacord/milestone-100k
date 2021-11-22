<template>
  <div>
    <!-- HEADER -->
    <div class="header" id="header">
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
            lazy-src="https://pbs.twimg.com/media/FBrWlNTVgAQcJt2?format=jpg&name=medium"
            src="https://pbs.twimg.com/media/FBrWlNTVgAQcJt2?format=jpg&name=medium"
          ></v-img>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="content">
      <v-container class="content-grid pt-16">
        <iframe
          src="https://itch.io/embed-upload/4793666?color=858ED1"
          allowfullscreen=""
          width="100%" height="668"
          frameborder="0">
          <a href="https://wikidude.itch.io/flappy-enna">
            Play Flappy enna on itch.io
          </a>
        </iframe>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  methods: {
    //
  },
  mounted() {
    //
  },
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
    background-image:url("https://pbs.twimg.com/media/FDH-rZ-aUAA4sBx?format=jpg&name=large");
    background-position: center -150px;
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
  background-color:#C6CBEA;
  .content-grid {
    min-height:calc(100vh - 290px);
    background-color:#edeef8;
    position:relative;
  }
}
</style>
