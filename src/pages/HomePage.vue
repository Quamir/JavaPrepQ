<template>
  <section>
    <div class="title">
      <h1 class="title__text">Java Practice Questions</h1>
      <span class="title__sub-text">V1.2</span>
    </div>
    <div class="pages">
      <base-link linkPath="topics/qnotes" class="pages__link">
          <p class="pages__text">Q's Notes</p>
      </base-link>
      <base-link linkPath="question/terminal" class="pages__link">
          <p class="pages__text">Q's Notes By Topic (AI Gen)</p>
      </base-link>
      <base-link linkPath="question/terminal" class="pages__link">
          <p class="pages__text">ATA Topics List (AI Gen)</p>
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

.pages{
    width: 50%;
    height: 250px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__link{
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
