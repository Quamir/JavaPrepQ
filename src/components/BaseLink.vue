<template>
    <a href="#/question/terminal"> 
        <div class="base-link">
            <slot></slot>
        </div>
    </a>
</template>

<style lang="scss" scoped>
    .base-link{
        height: 60px;
        background-color: $light-green;
        border-radius: 20px;
    }
    p{
        padding-top: 10px;
        font-size: rem(30);
    }
</style>