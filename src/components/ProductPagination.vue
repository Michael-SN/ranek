<template>
  <div v-if="totalPages > 1" class="pagination">
    <ul>
      <li v-for="page in pages" :key="page">
        <router-link :to="{ query: query(page) }">{{ page }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductPagination",
  props: {
    productsPerPage: {
      type: Number,
      default: 1
    },
    productsTotal: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pages() {
      const currentPage = Number(this.$route.query._page)
      const range = 9
      const offset = Math.ceil(range / 2)
      const total = this.totalPages
      const arrPages = []

      for (let i = 1; i <= total; i++) {
        arrPages.push(i)
      }

      arrPages.splice(0, currentPage - offset)
      arrPages.splice(range, total)
      return arrPages
    },
    totalPages() {
      const total = this.productsTotal / this.productsPerPage
      return (total !== Infinity) ? Math.ceil(total) : 0
    }
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  grid-column: 1 / -1;
  text-align: center;
}

li {
  display: inline-block;

  a {

    padding: rem(2) rem(8);
    border-radius: rem(2);
    margin: rem(4);

    &.router-link-exact-active,
    &:hover {
      background: map-get($color, _purple);
      color: #fff;

    }
  }
}
</style>
