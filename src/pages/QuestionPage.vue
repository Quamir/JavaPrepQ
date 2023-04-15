<template>
    <section>
        <info-panel 
            class="info-panel"
            :answeredQuestions="answeredQuestions"
            :questionAmount="questionAmount"
            :correctAnswers="correctAnswers"
            @grade-test-clicked="gradeTest"
            @restart-test="restartTest"
        >
        </info-panel>
        <div class="questions">
            <question-card 
                v-for="(question, index) in shuffledTestQuestions" :key="index"
                ref="questionCards"
                class="question"
                :test-questions="questions" 
                :questionNumber="index + 1"
                :questionText="question.question"
                :answer="question.answer"
                :explanation="question.explanation"
                :question-img="question.img"
                @question-option-clicked="handleQuestionOptionClicked"
            ></question-card>
        </div>
    </section>
</template>

<script>
//components 
import QuestionCard from '../components/QuestionCard.vue';
import InfoPanel from '../components/InfoPanel.vue';
//test
import terminalQuestions from '@/questions/Terminal';
import versionControl from '@/questions/versionControl';
import introJava from '@/questions/introJava';
import primitiveDataTypes from '@/questions/primitiveDataTypes';
import referenceDataTypes from '@/questions/referenceDataTypes';
import stringHandling from '@/questions/stringHandling';
import VariableDecIntIns from '@/questions/variablesDecIntIns';
import arrays from '@/questions/Arrays';
import booleans from '@/questions/booleans';
import logicalAndComparison from '@/questions/logicalAndComparisonOperators';
import dotEqualsAndComments from '@/questions/dotEqualsAndComments';
import errors from '@/questions/errors';
import strictlyTyped from '@/questions/strictlyTyped';
import instantiatingAclass from '@/questions/instantiatingAclass';
import primitiveAndNonPrimitive from '@/questions/PrimitiveAndNonPrimitive';

export default {
    components: { QuestionCard, InfoPanel },
    data() {
        return {
            questions : [],
            answeredQuestions: 0,
            questionAmount : 0,
            correctAnswers : 0,
            selectedOptions: [],
            answeredQuestionsSet: new Set(),
        };
    },
    computed: {
        shuffledTestQuestions(){
            let shuffledQuestions = [...this.questions];
            for (let i = shuffledQuestions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
            }
            return shuffledQuestions;
        }
    },  
    methods: {
        handleQuestionOptionClicked(clickedOption) {
            // Get the index of the question for which the option was clicked
            const questionIndex = clickedOption.$parent.questionNumber - 1;

            // Check if the selected options array has already an option for this question
            if (this.selectedOptions[questionIndex]) {
                // Remove the previously selected option
                this.selectedOptions[questionIndex].isClicked = false;
            }

            // If the clicked option is not the same as the previously selected option, add it to the selected options array
            if (this.selectedOptions[questionIndex] !== clickedOption) {
                this.selectedOptions[questionIndex] = clickedOption;
                this.answeredQuestionsSet.add(questionIndex);
            } else {
                this.selectedOptions[questionIndex] = null;
                this.answeredQuestionsSet.delete(questionIndex);
            }

            this.answeredQuestions = this.answeredQuestionsSet.size;

            console.log("numbered of answered questions: " + this.answeredQuestions);
        },
        gradeTest(){
            let correctAnswers = 0;
            this.$refs.questionCards.forEach((questionCard) => {
                correctAnswers += questionCard.gradeTest();
            });
            this.correctAnswers = correctAnswers;
            console.log(correctAnswers);
        },
        restartTest(){
            this.answerdQuestions = 0;
            this.correctAnswers = 0;
            this.$refs.questionCards.forEach((questionCard) => {
                questionCard.restartTest();
            });
        },
        getTestName() {
            let url = window.location.href;
            let testName = url.substring(url.lastIndexOf("/") + 1);
            return testName;
        },
        setTest() {
            let testName = this.getTestName();

            switch(testName){
                case 'Terminal':
                    this.questions = terminalQuestions;
                    break;
                case 'versioncontrol':
                    this.questions = versionControl;
                    break;
                case 'introjava':
                    this.questions = introJava;
                    break;
                case 'primitive-data-types':
                    this.questions = primitiveDataTypes;
                    break;
                case 'reference-data-types':
                    this.questions = referenceDataTypes;
                    break;
                case 'string-handling':
                    this.questions = stringHandling;
                    break;
                case 'variable-declaration----':
                    this.questions = VariableDecIntIns;
                    break;
                case 'arrays':
                    this.questions = arrays;
                    break;
                case 'booleans':
                    this.questions = booleans;
                    break;
                case 'logical-and-comparison-op-':
                    this.questions = logicalAndComparison;
                    break;
                case '.equals()-and-comments':
                    this.questions = dotEqualsAndComments;
                    break;
                case 'errors':
                    this.questions = errors;
                    break;
                case 'strictly-typed':
                    this.questions = strictlyTyped;
                    break;
                case 'instantianting-a-class':
                    this.questions = instantiatingAclass;
                    break;
                case 'primitive-and-nonprimitive':
                    this.questions = primitiveAndNonPrimitive;
                    break;
                default: 
                    console.error('Invalid test name: ', testName);
                    break;
            }
            this.questionAmount = this.questions.length;
        }
    },
    created(){
        this.setTest();
        console.log(this.shuffledTestQuestions.answer);
    }
}
</script>

<style lang="scss" scoped>
section{
    display: flex;
    margin-top: 50px;
}
.questions {
    width: 80%;
    margin: auto;
}

.question {
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
}

.info-panel{
    position: fixed;
}
</style>