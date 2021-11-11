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
        <div class="ribbon ribbon-left"></div>
        <div class="ribbon ribbon-right"></div>
        <p class="text-center mb-2">
          <v-btn text
            color="red" elevation="0" class="mr-4"
            href="https://www.youtube.com/channel/UCR6qhsLpn62WVxCBK1dkLow"
            target="_blank">
            <v-icon left>mdi-youtube</v-icon> YouTube
          </v-btn>
          <v-btn text
            color="blue lighten-2" elevation="0" class="mr-4"
            href="https://twitter.com/EnnaAlouette"
            target="_blank">
            <v-icon left>mdi-twitter</v-icon> Twitter
          </v-btn>
        </p>
        <p class="text-center text-h6 mb-2">
          Congratulations to Enna Alouette for reaching 100,000 subscribers on YouTube!
        </p>

        <!-- NAVIGATION -->
        <v-row no-gutters class="cards px-4 mb-8">
          <v-col class="text-center">
            <v-btn text class="purple--text darken-3" @click="scrollTo('#mural')">
              <v-avatar left size="40"><img src="../assets/gem.png" class="navimg"></v-avatar>
              <span class="pl-4 text-h6">Mural</span>
            </v-btn>
            <v-btn text class="purple--text darken-3" @click="scrollTo('#messages')">
              <v-avatar left size="40"><img src="../assets/gem.png" class="navimg"></v-avatar>
              <span class="pl-4 text-h6">Messages</span>
            </v-btn>
            <v-btn text class="purple--text darken-3" @click="scrollTo('#artworks')">
              <v-avatar left size="40"><img src="../assets/gem.png" class="navimg"></v-avatar>
              <span class="pl-4 text-h6">Artworks</span>
            </v-btn>
            <v-btn text class="purple--text darken-3" @click="scrollTo('#games')">
              <v-avatar left size="40"><img src="../assets/gem.png" class="navimg"></v-avatar>
              <span class="pl-4 text-h6">Games</span>
            </v-btn>
          </v-col>
        </v-row>

        <!-- MURAL -->
        <v-row no-gutters class="mb-2" id="mural">
          <v-col class="text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl">
            MURAL
            <v-btn text class="float-right purple--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters class="mb-8">
          <v-col class="mural" sm="10" offset-sm="1">
            <div class="mural-container mx-auto">
              <inner-image-zoom
                :src="MuralImg"
                :zoomSrc="MuralImg" />
            </div>
          </v-col>
        </v-row>

        <!-- MESSAGES -->
        <v-row no-gutters class="mt-8 mb-8" id="messages">
          <v-col class="text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl">
            MESSAGES
            <v-btn text class="float-right purple--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="cards px-4">
            <div v-masonry transition-duration="0.3s" item-selector=".card">
              <div v-masonry-tile class="card" v-for="(item, ix) in cards" :key="`card-${ix}`">
                <div class="binder"></div>
                <div class="wings"><img src="../assets/wing.png" /></div>
                <div class="card-name text-subtitle-2 pr-12 py-2">{{item.name}}</div>
                <div class="card-text text-body-2 pr-4 pb-2">{{item.text}}</div>
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- ARTWORKS -->
        <v-row no-gutters class="mt-8 mb-8" id="artworks">
          <v-col class="text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl">
            ARTWORKS
            <v-btn text class="float-right purple--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="cards px-4">
            artworks
          </v-col>
        </v-row>

        <!-- GAMES -->
        <v-row no-gutters class="mt-8 mb-8" id="games">
          <v-col class="text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl">
            GAMES
            <v-btn text class="float-right purple--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters class="mb-8">
          <v-col class="cards px-4">
            games
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import InnerImageZoom from 'vue-inner-image-zoom';

const LOREM_IPSUM = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse viverra, eros vel venenatis pharetra,
  nisi neque porta enim, vitae tincidunt turpis metus a tellus.
  Quisque dictum fringilla felis eu ornare.
  Nulla non urna vitae neque pretium pharetra id eget elit.
  Aenean blandit magna quis augue dignissim, eu tincidunt dolor iaculis.
  Nunc scelerisque nibh et varius imperdiet.
  Phasellus sagittis, nunc et pharetra viverra, libero purus sodales ex,
  ut mattis enim lectus auctor felis. Donec ut lobortis leo.
  `.split(/\s/g).filter((v) => !!v).map((v) => v.replace(/[\W_]+/g, ''));

export default {
  data: () => ({
    cards: [],
    MuralImg: 'https://cdn.discordapp.com/attachments/880074875006484551/896932818096115752/magicaldraw_20211011_031915.png',
  }),
  methods: {
    randomName() {
      return LOREM_IPSUM[Math.floor(Math.random() * LOREM_IPSUM.length)];
    },
    randomMessage() {
      const length = 10 + Math.floor(Math.random() * (LOREM_IPSUM.length - 10));
      const start = Math.floor(Math.random() * (LOREM_IPSUM.length - length));
      return LOREM_IPSUM.slice(start, start + length).join(' ');
    },
    scrollTo(target) {
      this.$vuetify.goTo(target, {
        duration: 1000,
        offset: 20,
        easing: 'easeInOutCubic',
      });
    },
  },
  mounted() {
    this.cards = [...new Array(50)].map(() => ({
      name: this.randomName(),
      text: this.randomMessage(),
    }));
  },
  components: {
    'inner-image-zoom': InnerImageZoom,
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
    .ribbon {
      position:absolute;
      top:0px;
      width:30px;
      height:100%;
      background-image: url('../assets/ribbon.png');
      background-repeat: repeat-y;
      &.ribbon-left {
        left:-15px;
      }
      &.ribbon-right {
        right:-15px;
      }
    }
    .navimg {
      margin-top:-10px;
    }
    .mural {
      .mural-container {
        max-width:calc(100vh - 80px);
      }
    }
    .cards {
      .card {
        background:#FFFFFF;
        position:relative;
        padding-left:15px;
        min-height:100px;
        margin-bottom:10px;
        border:1px solid #858ED1;
        .binder {
          background:#858ED1;
          position:absolute;
          top:0px;
          left:0px;
          width:10px;
          height:100%;
        }
        .wings {
          position:absolute;
          top:-30px; right:-20px;
          img {
            width:70px;
            height:70px;
          }
        }
        .card-name {
          color:#343c75;
        }
      }
    }
  }
}

.card {
  width:24%;
  margin:5px 0.5%;
}

@media only screen and (max-width: 1264px) {
  .card {
    width:32%;
    margin:10px 0.5%;
  }
}
@media only screen and (max-width: 900px) {
  .card {
    width:48%;
    margin:10px 1%;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    width:96%;
    margin:10px 2%;
  }
}
</style>
