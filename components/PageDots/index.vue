<template>
  <ul class="dots">
    <li
      v-for="dot in pagination"
      :key="dot"
      :class="[dot === 1 ? 'select' : 'dot']"
      @mouseleave="cancelAnimationFrame"
      @mouseover="gooeyeHover">
    </li>
  </ul>
</template>

<script>
import { gsap, Back } from 'gsap'
  export default {
    data() {
      return {
        pagination: [1,2,3,4,5],
        lastPosition: null,
        animationframeDots: null
      }
    },
    mounted () {
      this.lastPosition = document.querySelector('.select').offsetLeft
    },
    methods: {
      gooeyeHover (event) {
        const target = event.target
        const destination = target.offsetLeft
        const timeline = 0.6
        gsap.to(document.querySelector('.select'), { duration: timeline, x: destination, ease: Back.easeOut})
      },
      updateScale () {
        const pos = document.querySelector('.select').offsetLeft
        const speed = Math.abs(pos - this.lastPosition)
        const d = 4
        const offset =- 4
        const hd = d / 2
        let scale = (offset + pos ) % d

        if(scale > hd) scale = hd - (scale - hd)

        scale = 1 - (( scale / hd ) * 0.35)

        gsap.to(document.querySelector('.select'), { duration: 0.1, scaleY: scale, scaleX: 1 + (speed * 0.06) })

        this.lastPosition = pos
        this.animationframeDots = requestAnimationFrame(this.updateScale)
      },
      cancelAnimationFrame () {
        window.cancelAnimationFrame(this.animationframeDots)
      }
    },
  }
</script>

<style scoped src="./_style.scss" lang="scss"></style>