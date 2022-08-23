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



      console.log("lalalal", currentPage)

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

<style scoped>
.pagination {
  grid-column: 1 / -1;
  text-align: center;
}

li {
  display: inline-block;
}

li a {
  padding: 0.125rem .5rem;
  border-radius: 2px;
  margin: 0.25rem;
}

li a.router-link-exact-active,
li a:hover {
  background: var(--bg-purple);
  color: #fff;
}
</style>
