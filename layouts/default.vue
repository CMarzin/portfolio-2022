<template>
  <div class="default-layout">
    <navigation-header />

    <div class="default-layout__container" style="background-image: url(https://images.unsplash.com/photo-1648208567941-fa4e054501a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTc5MzczNA&ixlib=rb-1.2.1&q=80&w=1080)">

      <main class="default-layout__main-container">
        <Nuxt />
      </main>

      <aside>
        <div class="default-layout__aside">
            <div class="default-layout__aside-box default-layout__aside-part-1 div1"> </div>
            <div class="default-layout__aside-box default-layout__aside-part-2 div2"> </div>
            <div class="default-layout__aside-box default-layout__aside-part-3 div3"> </div>
            <div class="default-layout__aside-box default-layout__aside-part-4 div4"> </div>
            <div class="default-layout__aside-box default-layout__aside-part-5 div5"> </div>
            <footer class="default-layout__aside-box default-layout__aside-part-6 div6">
              <footer-component />
            </footer>
        </div>
      </aside>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style src="@/layouts/_default.scss" scoped lang="scss"></style>