<template>
    <div class="info">
        <div class="info__question-counter">
            <p> {{ answeredQuestions }} / {{ questionAmount }} </p>
        </div>
        <div class="info__test-name">
            <p> {{ testName }}</p>
        </div>
        <div class="info__grade-test" @click="$emit('grade-test-clicked')">
            <p>Grade Test</p>
        </div>
        <div class="info__correct-answers">
            <p> {{ correctAnswers }} (correct) / {{ questionAmount }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        answeredQuestions: {
            type: Number,
            required: true
        },

        questionAmount: {
            type: Number,
            required: true
        },

        correctAnswers: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            testName: null
        }
    },
    methods: {
        getUrlName() {
            let url = window.location.href;
            let testName = url.substring(url.lastIndexOf("/") + 1);
            this.testName = testName;
        }
    },
    created() {
        this.getUrlName();
    }
}
</script>

<style lang="scss" scoped>
.info {
    width: 200px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 50px;

    &__question-counter,
    &__test-name,
    &__grade-test,
    &__correct-answers {
        width: 200px;
        height: 70px;
        border-radius: 20px;
        background-color: $primary-color;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: rem(25);
        color: #ffffff;
        font-weight: bold;
    }

    &__grade-test{
        background-color: $secondary-color;
        &:hover{
            cursor: pointer;
        }
    }
}
</style>