<template>
    <div class="container">
        <p>Jump to question</p>
        <div class="missed-questions">
            <div class="missed-questions__question"
                v-for="(answer, index) in wrongAnswers"
                :key="index"
                @click="goToQuestion(answer.location)"
            >
                <p>Question {{ answer.questionNumber }}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        wrongAnswers:{
            type: Array,
            default: () => []
        }
    },
    methods:{
        goToQuestion(location){
            window.scrollTo({
                top: location,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    width: 300px;
    left: 1200px;
    height: max-content;
    min-height: 150px;
    margin-right: 50px;
    border-radius: 15px;
    background-color: $primary-color;

    & P{
        font-size: rem(25);
        color: #ffffff;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 15px;
    
    }
}

.missed-questions{
    &__question{
        width: 90%;
        height: 60px;
        background-color: $secondary-color;
        margin: auto;
        margin-bottom: 10px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;


        &:hover{
            cursor: pointer;
            background-color:#738ea9;
        }

        & p{
            font-size: rem(25);
            color: #ffffff;
            font-weight: bold;
        }
    }
}
</style>