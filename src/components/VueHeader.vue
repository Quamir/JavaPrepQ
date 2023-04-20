<template>
  <header>
    <router-link to="/" class="header-left">
      <h2 class="header-left__title">Enjoy the Vue</h2>
      <img src="../assets/vuelogo.png" alt="" class="header-left__icon" />
    </router-link>
    <div class="header-right">
      <img src="../assets/amazonlogo.png" alt="" class="header-right__icon" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 8vh;
  display: flex;
  margin: 0;
  background-color: $primary-color;
  justify-content: space-between;

  &__left{
    display: flex;
  }

  &__vue-icon, &__amz-icon{
    width: 40px;
    height: 40px;
  }
}

.header-left__icon, .header-right__icon{
    width: 40px;
    height: 40px;
}

.header-left{
    background-color: #38FCA5;
    color: $secondary-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;

    &:hover{
      cursor: pointer;
    }

    &__title{
      padding-top: 15px;
      padding-left: 15px;
    }

    &__icon{
      padding-top: 5px;
      margin-right: 70px;
    }
    
    
}

.header-right__icon{
    padding-top: 5px;
    padding-right: 15px;
}

</style>
