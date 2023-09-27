<template>
  <div class="footer">

    <ul class="footer__socials">
      <li><a href="https://unsplash.com/@marzin_corentin"><svg-unsplash /></a></li>
      <li><a href="https://www.linkedin.com/in/corentin-marzin-4a4371107/"><svg-linkedin /></a></li>
    </ul>

    <p class="footer__thanks">
      <span>© {{ new Date().getFullYear() }} Corentin Marzin • Made with <a href="#">Tanso</a> </span>
      <svg class="footer__thanks-heart" width="8" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#a)">
          <path d="M5.9.457a1.908 1.908 0 0 0-1.124.37c-.337.243-.606.59-.776 1.002A2.28 2.28 0 0 0 3.025.682c-.43-.243-.92-.31-1.39-.19C1.168.614.75.915.453 1.345c-.298.43-.457.965-.452 1.513 0 2.514 4 5.829 4 5.829S8 5.37 8 2.857c0-.636-.221-1.247-.615-1.697C6.99.71 6.457.457 5.9.457Z" fill="#fff"/>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h8v9.143H0z"/>
          </clipPath>
        </defs>
      </svg>
    </p>

    <a class="footer__mail" href="mailto:corentinmarzin@free.com">corentinmarzin@free.com</a>
  </div>
</template>

<script>
  export default {

  }
</script>

<style src="./_style.scss" scoped lang="scss"></style>