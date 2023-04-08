<template>
    <div>
        <div class="question__card-body">
            <div class="question__number">
                <p>Question 1</p>
            </div>
            <div class="question__question">
                <p>What does pwd do in the terminal?</p>
            </div>
            <div class="question__question-wrapper">
                <question-option class="question__option"></question-option>
                <question-option class="question__option"></question-option>
                <question-option class="question__option"></question-option>
                <question-option class="question__option"></question-option>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionOption from '../components/QuestionOption.vue';

export default {
    components: { QuestionOption }
}

</script>

<style lang="scss" scoped>

.question{
    &__card-body{
       
        background-color: #dbebfb;
        border: 5px solid $secondary-color;
        padding-bottom: 50px;
    }

    &__number{
        width: 100%;
        height: 50px;
        background-color: $primary-color;
        display: flex;
        justify-content: flex-start;

        & p{
            font-size: rem(24);
            font-weight: bold;
            margin-top: auto;
            margin-bottom: auto;
            padding-left: 15px;
        }
    }

    &__question{
        width: 100%;
        height: 150px;
        background-color: #ffff;
        display: flex;
        justify-content: center;
        align-items: center;

        & p{
            font-size: rem(24);
            font-weight: bold;
        }
    }

    &__question-wrapper{
        padding-top: 30px;
    }

    &__option{
        margin-bottom: 15px;
    }
}
</style>