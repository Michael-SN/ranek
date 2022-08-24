<template>
  <footer>
    <div class="container">
      <p>Ranek. Alguns direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
footer {
  background-color: map-get($color, _purple);
  padding: rem(25) 0;
  text-align: center;
  color: #fff;
  position: relative;

  p {
    font-size: rem(14);
  }
}
</style>