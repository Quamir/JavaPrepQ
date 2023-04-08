<template>
    <section>
        <div class="questions" v-for="(question, index) in terminalQuestions" :key="index">
            <question-card 
                class="question" 
                :questionNumber="index + 1"
                :questionText="terminalQuestions[index].question"
                :answer="terminalQuestions[index].answer"
                ></question-card>
        </div>
    </section>
</template>

<script>
import QuestionCard from '../components/QuestionCard.vue';
import terminalQuestions from '../questions/Terminal';
export default {
    components: { QuestionCard },
    data() {
        return {
            terminalQuestions
        };
    },
}
</script>

<style>
.questions {
    width: 80%;
    margin: auto;
    margin-top: 50px;
}

.question {
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
}
</style>