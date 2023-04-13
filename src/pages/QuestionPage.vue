<template>
    <section>
        <info-panel 
            class="info-panel"
            :answeredQuestions="answerdQuestions"
            :questionAmount="questionAmount"
            :correctAnswers="correctAnswers"
            @grade-test-clicked="gradeTest"
        >
        </info-panel>
        <div class="questions">
            <question-card 
                v-for="(question, index) in shuffledTestQuestions" :key="index"
                ref="questionCards"
                class="question" 
                :questionNumber="index + 1"
                :questionText="question.question"
                :answer="question.answer"
                @question-option-clicked="handleQuestionOptionClicked"
            ></question-card>
        </div>
    </section>
</template>

<script>
import QuestionCard from '../components/QuestionCard.vue';
import terminalQuestions from '../questions/Terminal';
import InfoPanel from '../components/InfoPanel.vue';
export default {
    components: { QuestionCard, InfoPanel },
    data() {
        return {
            terminalQuestions,
            answerdQuestions: 0,
            questionAmount : terminalQuestions.length,
            correctAnswers : 0
        };
    },
    computed: {
        shuffledTestQuestions(){
            let shuffledQuestions = [...this.terminalQuestions];
            for (let i = shuffledQuestions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
            }
            return shuffledQuestions;
        }
    },  
    methods: {
        handleQuestionOptionClicked(clickedOption){
            if(clickedOption.isClicked){
                this.answerdQuestions++;
            }else{
                this.answerdQuestions--;
            }
            console.log("numbered of answered questions: " + this.answerdQuestions);
        },
        gradeTest(){
            let correctAnswers = 0;
            this.$refs.questionCards.forEach((questionCard) => {
                correctAnswers += questionCard.gradeTest();
            });
            this.correctAnswers = correctAnswers;
            console.log(correctAnswers);
        }
    }
}
</script>

<style lang="scss" scoped>
section{
    display: flex;
    margin-top: 60px;
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