<template>
    <div class="option">
        <button class="option__button">
        </button>
        <div class="option__answer">
            When you run the ____ command in the terminal, 
            it prints the current working directory to the console.
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.option{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__button{
        width: 50px;
        height: 50px;
        margin-right: 30px;
    }

    &__answer{
        width: 80%;
        height: 100%;
        background-color: #ffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>