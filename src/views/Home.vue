<template>
  <div class="content">
    <v-container class="content-grid pt-8">
      <div class="ribbon ribbon-left"></div>
      <div class="ribbon ribbon-right"></div>
      <!-- <p class="text-center mb-2">
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
      </p> -->
      <p class="text-center text-h5 mt-2 mb-4">
        Congratulations to
        <a href="https://www.youtube.com/channel/UCR6qhsLpn62WVxCBK1dkLow"
          target="_blank"
          class="font-weight-bold blue--text text-decoration-none">
          Enna Alouette</a>
        for reaching 100,000 subscribers on YouTube!
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
          <v-btn text class="purple--text darken-3" @click="scrollTo('#games')">
            <v-avatar left size="40"><img src="../assets/gem.png" class="navimg"></v-avatar>
            <span class="pl-4 text-h6">Games</span>
          </v-btn>
          <v-btn text class="purple--text darken-3" @click="scrollTo('#artworks')"
            v-if="tweets.length">
            <v-avatar left size="40"><img src="../assets/gem.png" class="navimg"></v-avatar>
            <span class="pl-4 text-h6">Artworks</span>
          </v-btn>
        </v-col>
      </v-row>

      <!-- MURAL -->
      <v-row no-gutters class="mb-2" id="mural">
        <v-col class="text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl">
          WALL FOR THE SONGBIRD
          <v-btn text class="float-right purple--text darken-3" @click="scrollTo('#header')">
            TOP
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters class="mb-8">
        <v-col class="mural" sm="10" offset-sm="1">
          <h2 class="text-center mb-4 purple--text darken-2">
            Aloupeeps worked together to draw their 100K congratulations on a single board!
          </h2>
          <div class="mural-container mx-auto">
            <inner-image-zoom
              :src="MuralImg"
              :zoomSrc="MuralImg" />
          </div>
        </v-col>
      </v-row>

      <!-- MESSAGES -->
      <v-row no-gutters class="mt-8 mb-4" id="messages">
        <v-col class="text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl">
          MESSAGES FOR THE SONGBIRD
          <v-btn text class="float-right purple--text darken-3" @click="scrollTo('#header')">
            TOP
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="cards px-4">
          <h2 class="text-center mb-8 purple--text darken-2">
            Aloupeeps from all over the world celebrate Enna's success!
          </h2>
          <div v-masonry transition-duration="0.3s" item-selector=".card">
            <div
              v-masonry-tile
              :class="[ 'card', read[item.name] ? 'card-read' : '' ]"
              v-for="(item, ix) in cards" :key="`card-${ix}`"
              @click="toggleRead(item.name)"
            >
              <div class="binder"></div>
              <div class="wings"><img src="../assets/wing.png" /></div>
              <div class="card-name text-h6 pr-12 py-2">{{item.name}}</div>
              <div class="card-text text-h6 pr-4 pb-2">{{item.message}}</div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- GAMES -->
      <v-row no-gutters class="mt-8 mb-4" id="games">
        <v-col class="text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl">
          GAMES and VIDEOS
          <v-btn text class="float-right purple--text darken-3" @click="scrollTo('#header')">
            TOP
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="mb-8 mx-14" id="games">
        <v-col cols="12" md="6">
          <router-link to="/flappy-enna" class="text-decoration-none" target="_blank">
            <div class="text-h6 text-center deep-purple lighten-2 white--text rounded-xl mb-2">
              Flight of this Songbird
            </div>
            <div class="px-4">
              <v-img
                :lazy-src="ThumbFlappy"
                :src="ThumbFlappy"
                to="/flappy-enna"
              ></v-img>
            </div>
          </router-link>
        </v-col>
        <v-col cols="12" md="6">
          <router-link to="/choir" class="text-decoration-none" target="_blank">
            <div class="text-h6 text-center deep-purple lighten-2 white--text rounded-xl mb-2">
              Choir of Heaven
            </div>
            <div class="px-4">
              <v-img
                :lazy-src="ThumbChoir"
                :src="ThumbChoir"
              ></v-img>
            </div>
          </router-link>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-h6 text-center deep-purple lighten-2 white--text rounded-xl mb-2">
            Hope in the Dark (Holiday Special) ver. 100K Aloupeeps ed.
          </div>
          <div class="px-4">
            <iframe
              width="100%" height="400"
              src="https://www.youtube.com/embed/gj4cVOgEGGM"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-h6 text-center deep-purple lighten-2 white--text rounded-xl mb-2">
            Christmas 2021 Video
          </div>
          <div class="px-4">
            <iframe
              width="100%" height="400"
              src="https://www.youtube.com/embed/4u1W8iCCPkA"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </v-col>
      </v-row>

      <!-- ARTWORKS -->
      <v-row no-gutters class="mt-8 mb-8" id="artworks" v-if="tweets.length">
        <v-col class="text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl">
          ARTWORKS
          <v-btn text class="float-right purple--text darken-3" @click="scrollTo('#header')">
            TOP
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="px-8" v-if="tweets.length">
        <v-col
          cols="12" sm="6" lg="4" xl="3"
          v-for="(item, ix) in tweets" :key="`tweet-${ix}`">
          <v-card  elevation="1" shaped>
            <Tweet :id="item"></Tweet>
          </v-card>
        </v-col>
      </v-row>

      <!-- CREDITS -->
      <v-row no-gutters class="mt-16 mb-4">
        <v-col class="text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl">
          CREDITS
          <v-btn text class="float-right purple--text darken-3" @click="scrollTo('#header')">
            TOP
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters class="px-16 mb-16">
        <v-col cols="12" class="mb-4">
          <p>
            We've at times done message boards like this before, to congratulate the one we support.
            However, Enna is the one we never want to miss.
            So I pitched this website idea to the other Aloupeeps,
            and this time we've decided to step it up, as Enna Alouette deserves.
            More than just a list of messages, we've added a collaborative drawing,
            two games, and a video to celebrate the occasion.
          </p>
          <p>
            I'm so proud to be with this community! Even off-stream, outside Enna's eyes,
            they're sincere and really do love her and want to support her.
            They really did step it up a notch! Even though they just gave her a Christmas present,
            their desire to give back to Enna is unfazed.
            And that's not even the end of it, prepare for more love to come! ;P
          </p>
          <p>
            Huge kudos to the people below, those who sent a message, who drew on the wall,
            artists still tweeting new fan arts, those in Ennacord,
            or even other Aloupeeps who love her just as much, for making this project come true!
            Each one of you make up the 100,000 Aloupeeps who celebrate with us!
          </p>
          <p>
            With this much people, we're not only able to act as wings,
            but serve as the wind that will journey with her in this fun ride!
            Enna, take us whereever you want!
            Looking forward to all the fun we'll have on the years ahead!
          </p>
          <p>
            Sorry for the wall of text - jetrico
          </p>
        </v-col>
        <v-col cols="12" lg="4">
          <h3 class="purple--text">Project</h3>
          <ul>
            <li><strong>jetrico</strong> - Website, Message Admin, Drawing Admin</li>
            <li>
              <strong>Domo Espresso</strong>
              - Project Management, Message Admin, Drawing Admin
            </li>
            <li><strong>wikidude</strong> - Message Admin, Drawing Admin</li>
            <li><strong>NegativeRainbow</strong> - Domain Name</li>
            <li><strong>MiikeMQ</strong> - Discord Server Admin</li>
          </ul>
        </v-col>
        <v-col cols="12" lg="4">
          <h3 class="purple--text">Artists and Creatives</h3>
          <ul>
            <li><strong>mattvent</strong> - Header Artwork, Choir Game Art</li>
            <li><strong>Elodie</strong> - Feature Art Piece</li>
            <li><strong>wikidude</strong> - Flappy Game</li>
            <li><strong>jetrico</strong> - Choir Game Programming</li>
            <li><strong>Deemo Harlos</strong> - Choir Game Audio</li>
            <li><strong>Domo Espresso</strong> - Holiday Special Video</li>
          </ul>
        </v-col>
        <v-col cols="12" lg="4">
          <h3 class="purple--text">Drawing Board</h3>
          jetrico, Domo Espresso, ERF, OrangeHenge, latte, Apple, verm, razecaida,
          Chronia, wikidude, Renju, Airi Granny, TheYeetiest, AllSoonNoDairy,
          nobu_okt, Smiley, Riacu, Ishidaru, wildestduck, Frank04, Altina, 碧,
          Yui-chan, Shie, Ryuji, Coro-chan,
          and other Anonymous Aloupeeps!
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import InnerImageZoom from 'vue-inner-image-zoom';
import { Tweet } from 'vue-tweet-embed';
import twemoji from 'twemoji';
import MuralImg from '../assets/mural.jpg';
import ThumbFlappy from '../assets/thumb-flappy.png';
import ThumbChoir from '../assets/thumb-choir.png';

export default {
  data: () => ({
    source: 'https://vtubertools.sfo3.digitaloceanspaces.com/tribute/enna100k.json',
    cards: [],
    tweets: [],
    MuralImg,
    ThumbFlappy,
    ThumbChoir,
    read: {},
  }),
  methods: {
    scrollTo(target) {
      this.$vuetify.goTo(target, {
        duration: 1000,
        offset: 20,
        easing: 'easeInOutCubic',
      });
    },
    toggleRead(key) {
      if (typeof this.read[key] === 'undefined') this.read[key] = false;
      this.read = { ...this.read, [key]: !this.read[key] };
      localStorage.setItem('read', JSON.stringify(this.read));
    },
  },
  mounted() {
    // Load data
    (async () => {
      if (!localStorage.getItem('read')) localStorage.setItem('read', '{}');
      this.read = JSON.parse(localStorage.getItem('read'));
      const fetchSource = await axios.get(this.source).catch(() => null);
      const data = fetchSource && fetchSource.data ? fetchSource.data : {};
      this.cards = Object.values(data.messages)
        .sort((a, b) => a.time - b.time);
      // .map((v) => ({ ...v, read: this.read(v.name) }));
      this.tweets = Object.values(data.tweets).map((tweet) => String(tweet.id));
      this.$nextTick(() => {
        twemoji.parse(document.body);
      });
    })();
  },
  components: {
    'inner-image-zoom': InnerImageZoom,
    Tweet,
  },
};
</script>

<style lang="scss" scoped>
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
        // max-width:calc(100vh - 80px);
      }
    }
    .cards {
      .card {
        background:#FFFFFF;
        position:relative;
        padding-left:20px;
        min-height:100px;
        margin-bottom:25px;
        border:2px solid #858ED1;
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
        .card-text {
          white-space: pre-line;
        }
        &.card-read {
          background:#343c75;
          color:#ffffff;
          .card-name {
            color:#ffffff;
          }
        }
      }
    }
  }
}

.card {
  width:32%;
  margin:10px 0.5%;
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

<style lang="scss">
.card-text {
  img {
    height:1.4rem;
  }
}
</style>
