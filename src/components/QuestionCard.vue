<template>
    <div>
        <div class="question__card-body">
            <div class="question__number">
                <p>Question {{ questionNumber }}</p>
            </div>
            <div class="question__question">
                <p>{{ questionText }}</p>
            </div>
            <div class="question__question-wrapper" v-for="(question, index) in optionsArray" :key="index">
                <question-option ref="questionOptions" class="question__option" @option-clicked="handleOptionClicked"
                    :optionsArray="optionsArray"
                    :optionIndex="index"
                ></question-option>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionOption from '../components/QuestionOption.vue';
import terminalQuestions from '../questions/Terminal';

export default {
    components: { QuestionOption },
    props: {
        questionNumber: {
            type: Number,
            required: true
        },
        questionText: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            terminalQuestions,

        };
    },
    computed: {
        optionsArray() {
            let options = [];
            let tempTerminalQuestions = this.terminalQuestions.filter(q => q.answer !== this.answer);
            const uniqueRandomIndexes = this.getUniqueRandomIndexes(3, tempTerminalQuestions.length - 1);

            for (let i = 0; i < uniqueRandomIndexes.length; i++) {
                options.push(tempTerminalQuestions[uniqueRandomIndexes[i]].answer);
            }
            options.push(this.answer);

            // Shuffle the options
            options.sort(() => Math.random() - 0.5);

            return options;
        }
    },
    created() {
    },
    methods: {
        handleOptionClicked(clickedOption) {
            this.$refs.questionOptions.forEach((option) => {
                if (option !== clickedOption) {
                    option.isClicked = false;
                }
            });
        },
        getUniqueRandomIndexes(num, maxIndex) {
            const indexes = new Set();
            while (indexes.size < num) {
                const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
                indexes.add(randomIndex);
            }
            return Array.from(indexes);
        },
    },
};

</script>

<style lang="scss" scoped>
.question {
    &__card-body {

        background-color: #dbebfb;
        border: 5px solid $secondary-color;
        padding-bottom: 50px;
    }

    &__number {
        width: 100%;
        height: 50px;
        background-color: $primary-color;
        display: flex;
        justify-content: flex-start;

        & p {
            font-size: rem(24);
            font-weight: bold;
            margin-top: auto;
            margin-bottom: auto;
            padding-left: 15px;
        }
    }

    &__question {
        width: 100%;
        height: 150px;
        background-color: #ffff;
        display: flex;
        justify-content: center;
        align-items: center;

        & p {
            font-size: rem(24);
            font-weight: bold;
        }
    }

    &__question-wrapper {
        padding-top: 30px;
    }

    &__option {
        margin-bottom: 15px;
    }
}
</style>