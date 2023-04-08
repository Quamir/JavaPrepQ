<template>
    <div class="option">
        <button class="option__button" :class="{ 'click-color': isClicked }" @click="handleClick">
        </button>
        <div class="option__answer">
            <p>{{ optionsArray[optionIndex] }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        optionsArray: {
            type: Array,
            required: true
        }, 
        optionIndex: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isClicked: false,
            randomIndex: 0
        };
    },
    methods: {
        handleClick() {
            this.isClicked = !this.isClicked;
            this.$emit('option-clicked', this);
        },
    },

    created() {
        this.randomIndex = Math.floor(Math.random() * this.optionsArray.length);
        console.log(this.optionsArray);
    }
}
</script>

<style lang="scss" scoped>
.option {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__button {
        width: 50px;
        height: 50px;
        margin-right: 30px;

        &:hover {
            cursor: pointer;
            background-color: $primary-color;
        }
    }

    &__answer {
        width: 80%;
        height: 100%;
        background-color: #ffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}


.click-color {
    background-color: $light-green;
}
</style>