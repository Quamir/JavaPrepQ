<template>
  <section>
    <div class="title">
      <h1 class="title__text">Java Practice Questions</h1>
      <span class="title__sub-text">V 2.0</span>
    </div>
    <div class="title__question-number">
      <span>{{numOfQuestions}} questions and growing</span>
    </div>
    <div class="pages">
      <base-link linkPath="topics/qnotes" class="pages__link">
          <p class="pages__text">Q's Notes</p>
      </base-link>
    </div>
  </section>
</template>

<script>
import BaseLink from "../components/BaseLink.vue";

//test
import introJava from "@/questions/introJava";
import primitiveDataTypes from "@/questions/primitiveDataTypes";
import refernceDataTypes from "@/questions/referenceDataTypes";
import terminal from "@/questions/Terminal";
import versionControl from "@/questions/versionControl";
import stringHandling from "@/questions/stringHandling";
import VariableDecIntIns from "@/questions/variablesDecIntIns";
import arrays from "@/questions/Arrays";
import booleans from "@/questions/booleans";
import logicalAndComparison from "@/questions/logicalAndComparisonOperators";
import dotEqualsAndComments from "@/questions/dotEqualsAndComments";
import stricklyTyped from "@/questions/strictlyTyped";
import instantiatingAclass from "@/questions/instantiatingAclass";
import primitiveAndNonPrimitive from "@/questions/PrimitiveAndNonPrimitive";
import operators from "@/questions/operators";
import attributesAndInstanceVar from "@/questions/attributesAndInstanceVar";
import classesAndReferenceDataTypes from "@/questions/classesAndReferenceDataTypes";
import creatingObjects from "@/questions/creatingObjects";
import constructors from "@/questions/constructors";
import strings from "@/questions/strings";
import dotNotation from "@/questions/dotNotation";
import encapsulation from "@/questions/encapsulation";
import accessModifiers from "@/questions/accessModifiers";
import interfaceJava from "@/questions/interface";
import getters from "@/questions/getters";
import setters from "@/questions/setters";
import thisKeyword from "@/questions/thiskeyword";
import wrapperClasses from "@/questions/wrapperClasses";
import strings2 from "@/questions/strings2"

export default {
  components: { BaseLink },
  data(){
    return{
      numOfQuestions : 0
    }
  },
  methods: {
    questionAmount() {
      this.numOfQuestions = introJava.length + 
        primitiveDataTypes.length + 
        refernceDataTypes.length + 
        terminal.length + 
        versionControl.length + 
        stringHandling.length +
        VariableDecIntIns.length +
        arrays.length + 
        booleans.length +
        logicalAndComparison.length +
        dotEqualsAndComments.length + 
        stricklyTyped.length + 
        instantiatingAclass.length +
        primitiveAndNonPrimitive.length + 
        operators.length + 
        attributesAndInstanceVar.length + 
        classesAndReferenceDataTypes.length + 
        creatingObjects.length + 
        constructors.length +
        strings.length +
        dotNotation.length +
        encapsulation.length +
        accessModifiers.length +
        interfaceJava.length + 
        getters.length + 
        setters.length +
        thisKeyword.length +
        wrapperClasses.length +
        strings2.length

    }
  },
  created(){
    this.questionAmount();
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 84vh;
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
  &__question-number{
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: rem(20);
    font-weight: bold;
  }
}

.pages{
    width: 50%;
    height: 250px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__link{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__text{
      font-size: rem(40);
      font-weight: 600;
      height: 100%;
      padding-top: 8px;
    }
}
</style>
