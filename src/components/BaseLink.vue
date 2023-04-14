<template>
    <a :href="'#/' + linkPath" class="base-link"> 
        <div>
            <slot></slot>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        linkPath: {
            type: String,
            required: true
        }
    }
}
</script>

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