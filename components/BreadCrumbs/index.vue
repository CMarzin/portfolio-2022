<template>
  <ol class="breadcrumb">
    <li class="item">
      <nuxt-link :to="'/'" class="title">
        {{ $t(Home) }}
      </nuxt-link>
    </li>
    <li v-for="(item, i) in crumbs" :key="i" class="item">
      <nuxt-link :to="item.to" class="title">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ol>
</template>

<script>

export default {
  name: 'Breadcrumbs',
  computed: {
    crumbs () {
      const pathArray = this.$route.path.split('/')
      pathArray.shift()
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          to: breadcrumbArray[idx - 1]
            ? '/' + breadcrumbArray[idx - 1].path + '/' + path
            : '/' + path,
          title: path
        })
        return breadcrumbArray
      }, [])
      return breadcrumbs
    }
  }
}
</script>