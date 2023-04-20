<template>
    <section>
        <info-panel class="info-panel" :answeredQuestions="answeredQuestions" :questionAmount="questionAmount"
            :correctAnswers="correctAnswers" @grade-test-clicked="gradeTest" @restart-test="restartTest">
        </info-panel>
        <div class="questions">
            <question-card v-for="(question, index) in shuffledTestQuestions" :key="index" ref="questionCards"
                class="question" :test-questions="questions" :questionNumber="index + 1" :questionText="question.question"
                :answer="question.answer" :explanation="question.explanation" :question-img="question.img"
                @question-option-clicked="handleQuestionOptionClicked"></question-card>
        </div>
        <jump-to-question class="jump-to-question" :wrong-answers="wrongAnswers"></jump-to-question>
    </section>
</template>

<script>
//components 
import QuestionCard from '../components/QuestionCard.vue';
import InfoPanel from '../components/InfoPanel.vue';
import jumpToQuestion from '../components/JumpToQuestion.vue';
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
import operators from '@/questions/operators';
import attributesAndInstanceVar from '@/questions/attributesAndInstanceVar';
import classesAndReferenceDataTypes from '@/questions/classesAndReferenceDataTypes';
import creatingObjects from '@/questions/creatingObjects';
import constructors from '@/questions/constructors';
import strings from '@/questions/strings';
import dotNotation from '@/questions/dotNotation';
import encapsulation from '@/questions/encapsulation';
import accessModifiers from '@/questions/accessModifiers';
import interfaceJava from '@/questions/interface';
import getters from '@/questions/getters';
import setters from '@/questions/setters';
import thisKeyword from '@/questions/thiskeyword';
import wrapperClasses from '@/questions/wrapperClasses';
import strings2 from '@/questions/strings2';

export default {
    components: { QuestionCard, InfoPanel, jumpToQuestion },
    data() {
        return {
            questions: [],
            answeredQuestions: 0,
            questionAmount: 0,
            correctAnswers: 0,
            wrongAnswers: [],
            selectedOptions: [],
            answeredQuestionsSet: new Set(),
            isTestGraded: false
        };
    },
    computed: {
        shuffledTestQuestions() {
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
        },
        gradeTest() {
            if (this.isTestGraded) {
                return
            } else {
                this.isTestGraded = true;
                let correctAnswers = 0;
                this.$refs.questionCards.forEach((questionCard) => {
                    correctAnswers += questionCard.getCorrectAnswers();
                    const wrongAnswerNumber = questionCard.getWrongAnswers();
                    if (wrongAnswerNumber !== undefined) {
                        this.wrongAnswers.push(wrongAnswerNumber);
                    }
                });
                this.correctAnswers = correctAnswers;
                console.log(this.wrongAnswers);
            }
        },

        restartTest() {
            this.isTestGraded = false;
            this.answerdQuestions = 0;
            this.correctAnswers = 0;
            this.$refs.questionCards.forEach((questionCard) => {
                questionCard.restartTest();
                this.answeredQuestions = 0;
                this.wrongAnswers = [];
                this.answeredQuestionsSet = new Set();
            });
        },
        getTestName() {
            let url = window.location.href;
            let testName = url.substring(url.lastIndexOf("/") + 1);
            return testName;
        },
        setTest() {
            let testName = this.getTestName();

            switch (testName) {
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
                case 'operators':
                    this.questions = operators;
                    break;
                case 'attributes-and-Instance-variables':
                    this.questions = attributesAndInstanceVar;
                    break;
                case 'classes-and-Reference-data-types':
                    this.questions = classesAndReferenceDataTypes;
                    break;
                case 'creating-objects':
                    this.questions = creatingObjects;
                    break;
                case 'constructors':
                    this.questions = constructors;
                    break;
                case 'strings':
                    this.questions = strings;
                    break;
                case 'dot-notation':
                    this.questions = dotNotation;
                    break;
                case 'encapsulation':
                    this.questions = encapsulation;
                    break;
                case 'access-modifiers':
                    this.questions = accessModifiers;
                    break;
                case 'interface':
                    this.questions = interfaceJava;
                    break;
                case 'getters':
                    this.questions = getters;
                    break;
                case 'setters':
                    this.questions = setters;
                    break;
                case 'this-keyword':
                    this.questions = thisKeyword;
                    break;
                case 'wrapper-classes':
                    this.questions = wrapperClasses;
                    break;
                case 'strings2':
                    this.questions = strings2;
                    break;
                default:
                    console.error('Invalid test name: ', testName);
                    break;
            }
            this.questionAmount = this.questions.length;
        }
    },
    created() {
        this.setTest();
        console.log(this.shuffledTestQuestions.answer);
    }
}
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
}

.question {
    width: 50%;
    margin: auto;
    margin-right: 400px;
    margin-bottom: 20px;
}

.info-panel,
.jump-to-question {
    position: fixed;
}
</style>