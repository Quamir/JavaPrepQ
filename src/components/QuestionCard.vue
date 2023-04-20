<template>
    <div>
        <div class="question__card-body">
            <div class="question__number">
                <p>Question {{ questionNumber }}</p>
            </div>
            <div class="question__question" :class="{ 'wraning': answerWarning, 'answer-correct': answerCorrect }">
                <p>{{ questionText }}</p>
            </div>
            <img v-if="questionImg != ''" :src="questionImg" alt="image for question">
            <div class="question__question-wrapper" v-for="(question, index) in optionsArray" :key="index">
                <question-option ref="questionOptions" class="question__option" @option-clicked="handleOptionClicked"
                    :optionsArray="optionsArray" :questionNumber="questionNumber" :optionIndex="index"
                    :test-graded="testGraded"></question-option>
            </div>
            <div class="question__explanation" :class="{ 'question__explanation--graded': answerCorrect || answerWarning }">
                <span>Explanation</span>
                <p> {{ explanation }} </p>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionOption from '../components/QuestionOption.vue';

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
        },
        explanation: {
            type: String,
            required: true
        },
        testQuestions: {
            type: Array,
            required: true
        },
        questionImg: {
            type: String,
            requuired: true
        }
    },
    data() {
        return {
            questions: this.testQuestions,
            answerWarning: false,
            answerCorrect: false,
            testGraded: false,
        };
    },
    computed: {
        optionsArray() {
            let options = [];
            let tempquestions = this.questions.filter(q => q.answer !== this.answer);
            const uniqueRandomIndexes = this.getUniqueRandomIndexes(3, tempquestions.length - 1);

            for (let i = 0; i < uniqueRandomIndexes.length; i++) {
                options.push(tempquestions[uniqueRandomIndexes[i]].answer);
            }

            // Check if the answer is already in the options array.
            if (!options.includes(this.answer)) {
                options.push(this.answer);
            }

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
                } else {
                    this.$emit('question-option-clicked', clickedOption);
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
        getCorrectAnswers() {
            let correctAnswers = 0;
            this.$refs.questionOptions.forEach((option) => {
                if (option.isCorrect && option.isClicked) {
                    correctAnswers++;
                    this.answerCorrect = true;
                }
            });
            this.testGraded = true;
            return correctAnswers;
        },
        getWrongAnswers() {
            const wrongAnswerFound = this.$refs.questionOptions.some((option) => {
                if (!option.isCorrect && option.isClicked) {
                    this.answerWarning = true;
                    return true;
                }
            });

            if (wrongAnswerFound) {
                return {
                    questionNumber : this.questionNumber,
                    location : this.$el.offsetTop
                };
            } else {
                return undefined;
            }
        },
        restartTest() {
            this.$refs.questionOptions.forEach((option) => {
                this.answerCorrect = false;
                this.answerWarning = false;
                this.testGraded = false;
                option.testRestart(true);
            });
        }
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

    &__explanation {
        visibility: hidden;

        &--graded {
            visibility: visible;
            display: flex;
            font-size: rem(20);
            font-weight: bold;
            flex-direction: column;
            margin: auto auto auto 100px;
            width: 80%;
            min-height: 150px;
            background-color: $light-green;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    img {
        width: 100%;
        height: 600px;
    }
}

.wraning {
    background-color: red;
}

.answer-correct {
    background-color: $light-green;
}
</style>