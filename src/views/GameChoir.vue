<template>
  <div class="content">
    <v-container class="content-grid pt-2 pb-16">
      <v-btn text class="purple--text darken-3" to="/">
        <v-avatar left size="40"><img src="../assets/gem.png" class="navimg"></v-avatar>
        <span class="pl-4 text-h6">Back to Home</span>
      </v-btn>
      <p class="text-h4 text-center mt-8 mb-2" id="game-title">Choir of Heaven</p>
      <p class="text-h6 text-center mb-4">by jetrico, Deemo Harlos, mattvent</p>
      <div id="game-container">
        <div id="game"></div>
      </div>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable no-use-before-define */

import Phaser from 'phaser';
import v01 from '../assets/choir/01.mp3';
import v02 from '../assets/choir/02.mp3';
import v03 from '../assets/choir/03.mp3';
import v04 from '../assets/choir/04.mp3';
import v05 from '../assets/choir/05.mp3';
import v06 from '../assets/choir/06.mp3';
import v07 from '../assets/choir/07.mp3';
import v08 from '../assets/choir/08.mp3';
import f01 from '../assets/choir/f01.mp4';
import f02 from '../assets/choir/f02.mp4';
import f03 from '../assets/choir/f03.mp4';
import f04 from '../assets/choir/f04.mp4';
import f05 from '../assets/choir/f05.mp4';
import f06 from '../assets/choir/f06.mp4';
import f07 from '../assets/choir/f07.mp4';
import f08 from '../assets/choir/f08.mp4';
import imgJsn from '../assets/choir/choir.json';
import imgPng from '../assets/choir/choir.png';

export default {
  data: () => ({
    game: null,
  }),
  methods: {
    //
  },
  mounted() {
    this.game = new Phaser.Game({
      type: Phaser.WEBGL,
      parent: 'game',
      banner: false,
      disableContextMenu: true,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 854,
        height: 480,
      },
      backgroundColor: Phaser.Display.Color.HexStringToColor('#000000').color,
      scene: {
        preload() {
          this.load.audio('v01', v01);
          this.load.audio('v02', v02);
          this.load.audio('v03', v03);
          this.load.audio('v04', v04);
          this.load.audio('v05', v05);
          this.load.audio('v06', v06);
          this.load.audio('v07', v07);
          this.load.audio('v08', v08);
          this.load.video('f01', f01);
          this.load.video('f02', f02);
          this.load.video('f03', f03);
          this.load.video('f04', f04);
          this.load.video('f05', f05);
          this.load.video('f06', f06);
          this.load.video('f07', f07);
          this.load.video('f08', f08);
          this.load.atlas('img', imgPng, imgJsn);
        },
        create() {
          this.sound.pauseOnBlur = false;
          let mode = 'random';
          let autoIndex = 0;
          const sing = [false, false, false, false, false, false, false, false];
          // const sing = [true, true, true, true, true, true, true, true];

          // Background Image
          this.add.sprite(0, 0, 'img', 'background')
            .setOrigin(0, 0).setDisplaySize(855, 481);

          // Create mask
          const maskShape = this.make.graphics();
          maskShape.fillStyle(0xffffff);
          maskShape.beginPath();

          // Create face icons and voices
          const voices = [];
          const faces = [];
          [
            { x: 17, y: 67 },
            { x: 77, y: 182 },
            { x: 172, y: 272 },
            { x: 307, y: 312 },
            { x: 447, y: 312 },
            { x: 582, y: 272 },
            { x: 677, y: 182 },
            { x: 737, y: 67 },
          ].forEach((coords, index) => {
            const video = this.add.video(coords.x, coords.y, `f0${index + 1}`);
            video
              .setInteractive()
              .on('pointerdown', () => {
                if (mode === 'manual') {
                  sing[index] = !sing[index];
                  refreshChoir();
                }
              });
            faces.push(video);
            voices.push(this.sound.add(`v0${index + 1}`));
            maskShape.fillCircle(coords.x + 50, coords.y + 50, 50);
          });

          // Mask the faces
          const maskObj = maskShape.createGeometryMask();
          faces.forEach((face) => {
            face.setOrigin(0, 0).setMask(maskObj);
          });

          const randomize = () => {
            voices.forEach((val, index) => {
              sing[index] = Math.random() < 0.4;
            });
            refreshChoir();
          };

          const btnRandom = this.add.sprite(357, 118, 'img', 'random')
            .setOrigin(0, 0)
            .setInteractive()
            .on('pointerdown', () => {
              mode = 'random';
              btnRandom.setAlpha(1);
              btnAuto.setAlpha(0.8);
              btnManual.setAlpha(0.8);
              randomize();
            });
          const btnAuto = this.add.sprite(357, 168, 'img', 'auto')
            .setOrigin(0, 0)
            .setInteractive()
            .on('pointerdown', () => {
              mode = 'auto';
              autoIndex = 0;
              btnRandom.setAlpha(0.8);
              btnAuto.setAlpha(1);
              btnManual.setAlpha(0.8);
            });
          const btnManual = this.add.sprite(357, 218, 'img', 'manual')
            .setOrigin(0, 0)
            .setInteractive()
            .on('pointerdown', () => {
              mode = 'manual';
              btnRandom.setAlpha(0.8);
              btnAuto.setAlpha(0.8);
              btnManual.setAlpha(1);
            });

          const refreshChoir = () => {
            const singerCount = sing.filter((v) => v).length;
            const volume = (30 + (70 / singerCount)) / 100;
            sing.forEach((val, index) => {
              if (val) {
                voices[index].setVolume(index < 4 ? 1 : volume);
                faces[index].setAlpha(1);
              } else {
                voices[index].setVolume(0);
                faces[index].setAlpha(0.01);
              }
            });
          };

          const playChoir = () => {
            // Modes
            if (mode === 'random') {
              randomize();
            } else if (mode === 'manual') {
              //
            } else if (mode === 'auto') {
              autoIndex += 1;
              if (autoIndex > 8) autoIndex = 1;
              sing.forEach((val, index) => {
                sing[index] = index < autoIndex;
              });
            }
            // Play
            voices.forEach((voice, index) => {
              voice.play({ loop: false });
              faces[index].play();
            });
            refreshChoir();
          };

          this.input.once('pointerdown', () => {
            playChoir();
            setInterval(() => {
              playChoir();
            }, 10000);
          });
        },
      },
    });

    this.$vuetify.goTo('#game-title', {
      duration: 1000,
      offset: 20,
      easing: 'easeInOutCubic',
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
#game-container {
  max-width:854px;
  margin:0px auto;
}
</style>
