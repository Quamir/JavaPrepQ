<template>
    <section>
      <div class="title">
        <h1 class="title__text">Topics Page</h1>
        <span class="title__sub-text">V 2.0</span>
      </div>
      <div class="topics">
          <base-link 
            :linkPath="'questions/' + topic"
            class="topics__link"
            v-for="(topic, index) in topicsArray"
            :key="index"
            >
              <p class="topics__text">{{ topic }}</p>
          </base-link>
      </div>
    </section>
</template>

<script>
import BaseLink from "../components/BaseLink.vue";
import url from "../mixins/url"

import qnotes from '../topicArrays/qnotes';
import codingQuestions from '../topicArrays/codingQuestions';
export default {
  components: { BaseLink },
  mixins: [url],
  data(){
    return{
      topicsArray : []
    }
  },
  methods : {
    renderTopics(){
      let pageName = this.getPageName();
      if(pageName == 'qnotes'){
          this.topicsArray = qnotes;
          return pageName;
      }
      if(pageName == 'codingquestions'){
        this.topicsArray = codingQuestions;
        return pageName;
      }
    },
  },
  created(){
    this.renderTopics();
    console.log('hello');
   }
};
</script>

<style lang="scss" scoped>
section {
    padding-bottom: 50px;
    min-height: 84vh;
}
.title {
  display: flex;
  justify-content: center;
  &__text {
    font-size: rem(40);
  }
  &__sub-text {
    width: 10%;
    margin-top: auto;
    margin-bottom: auto;
    font-size: rem(40);
    color: #f8b160;
  }
}

.topics{
    width: 98%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 10px;

    &__link{
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      margin-right: 15px;
    }

    &__text{
      font-size: rem(25);
      font-weight: 600;
      height: 100%;
      padding-top: 8px;
    }
}
</style>
