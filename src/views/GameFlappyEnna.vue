<template>
  <div class="content">
    <v-container class="content-grid pt-2">
      <!-- <v-btn text class="purple--text darken-3" to="/">
        <v-avatar left size="40"><img src="../assets/gem.png" class="navimg"></v-avatar>
        <span class="pl-4 text-h6">Back to Home</span>
      </v-btn> -->
      <p class="text-h4 text-center mt-8 mb-2" id="game-title">Flappy Enna</p>
      <p class="text-h6 text-center mb-4">by wikidude</p>
      <iframe
        src="https://itch.io/embed-upload/4820860?color=858ED1"
        allowfullscreen=""
        width="100%" height="750"
        frameborder="0">
        <a href="https://wikidude.itch.io/flappy-enna">
          Play Flappy enna on itch.io
        </a>
      </iframe>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$vuetify.goTo('#game-title', {
        duration: 1000,
        offset: 20,
        easing: 'easeInOutCubic',
      });
    });
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
  }
}
</style>
