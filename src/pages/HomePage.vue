<template>
  <section>
    <div class="title">
      <h1 class="title__text">Java Practice Questions</h1>
      <span class="title__sub-text">BETA</span>
    </div>
    <div class="subjects">
        <base-link class="subject__link">
            <p class="subjects__text">Terminal</p>
        </base-link>
    </div>
  </section>
</template>

<script>
import BaseLink from "../components/BaseLink.vue";
export default {
  components: { BaseLink },
};
</script>

<style lang="scss" scoped>
section {
  height: 84vh;
}
.title {
  display: flex;
  justify-content: center;
  &__text {
    font-size: rem(40);
  }
  &__sub-text {
    width: 10%;
    margin-top: auto;
    margin-bottom: auto;
    font-size: rem(40);
    color: #f8b160;
  }
}

.subjects{
    width: 50%;
    margin: auto;

    &__link{
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
    }

    &__text{
        font-size: rem(40);
        font-weight: 600;
        height: 100%;
        padding-top: 8px;
    }
}
</style>
