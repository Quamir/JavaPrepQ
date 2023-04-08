<template>
    <section>
        <div class="questions">
            <question-card class="question"></question-card>
            <question-card class="question"></question-card>
        </div>
    </section>
</template>

<script>
import QuestionCard from '../components/QuestionCard.vue';
export default {
    components: { QuestionCard }
}
</script>

<style>

.questions{
    width: 80%;
    margin: auto;
    margin-top: 50px;
}

.question{
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
}

</style>