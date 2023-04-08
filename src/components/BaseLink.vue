<template>
    <div class="base-link">
        <p>
            <slot></slot>
        </p>
    </div>
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