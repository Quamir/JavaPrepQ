(function(){"use strict";var e={777:function(e,t,o){var n=o(9242),r=o(3396);function i(e,t,o,n,i,s){const a=(0,r.up)("vue-header"),c=(0,r.up)("router-view"),d=(0,r.up)("vue-footer");return(0,r.wg)(),(0,r.iD)("section",null,[(0,r.Wm)(a),(0,r.Wm)(c),(0,r.Wm)(d)])}var s=o.p+"img/vuelogo.29c30f35.png",a=o.p+"img/amazonlogo.a0afa863.png";const c=(0,r.uE)('<div class="header-left" data-v-2067c4ca><h2 class="header-left__title" data-v-2067c4ca>Enjoy the Vue</h2><img src="'+s+'" alt="" class="header-left__icon" data-v-2067c4ca></div><div class="header-right" data-v-2067c4ca><img src="'+a+'" alt="" class="header-right__icon" data-v-2067c4ca></div>',2),d=[c];function u(e,t){return(0,r.wg)(),(0,r.iD)("header",null,d)}var h=o(89);const m={},l=(0,h.Z)(m,[["render",u],["__scopeId","data-v-2067c4ca"]]);var _=l;const p=e=>((0,r.dD)("data-v-30e4ff34"),e=e(),(0,r.Cn)(),e),f=p((()=>(0,r._)("p",null,"Quamir Joyner",-1))),y=[f];function w(e,t){return(0,r.wg)(),(0,r.iD)("footer",null,y)}const g={},v=(0,h.Z)(g,[["render",w],["__scopeId","data-v-30e4ff34"]]);var q=v,b={components:{VueHeader:_,VueFooter:q}};const k=(0,h.Z)(b,[["render",i]]);var x=k,T=o(2483);const W=e=>((0,r.dD)("data-v-0a44b5db"),e=e(),(0,r.Cn)(),e),C=W((()=>(0,r._)("div",{class:"title"},[(0,r._)("h1",{class:"title__text"},"Java Practice Questions"),(0,r._)("span",{class:"title__sub-text"},"BETA")],-1))),I={class:"subjects"},O=W((()=>(0,r._)("p",{class:"subjects__text"},"Terminal",-1)));function A(e,t,o,n,i,s){const a=(0,r.up)("base-link");return(0,r.wg)(),(0,r.iD)("section",null,[C,(0,r._)("div",I,[(0,r.Wm)(a,{class:"subject__link"},{default:(0,r.w5)((()=>[O])),_:1})])])}const H={href:"#/question/terminal"},D={class:"base-link"};function j(e,t){return(0,r.wg)(),(0,r.iD)("a",H,[(0,r._)("div",D,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])])}const Q={},Z=(0,h.Z)(Q,[["render",j],["__scopeId","data-v-74bc47b7"]]);var S=Z,U={components:{BaseLink:S}};const $=(0,h.Z)(U,[["render",A],["__scopeId","data-v-0a44b5db"]]);var M=$;function N(e,t,o,n,i,s){const a=(0,r.up)("question-card");return(0,r.wg)(),(0,r.iD)("section",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.terminalQuestions,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"questions",key:t},[(0,r.Wm)(a,{class:"question",questionNumber:t+1,questionText:i.terminalQuestions[t].question,answer:i.terminalQuestions[t].answer},null,8,["questionNumber","questionText","answer"])])))),128))])}var z=o(7139);const E={class:"question__card-body"},P={class:"question__number"},J={class:"question__question"};function V(e,t,o,n,i,s){const a=(0,r.up)("question-option");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",E,[(0,r._)("div",P,[(0,r._)("p",null,"Question "+(0,z.zw)(o.questionNumber),1)]),(0,r._)("div",J,[(0,r._)("p",null,(0,z.zw)(o.questionText),1)]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.optionsArray,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"question__question-wrapper",key:t},[(0,r.Wm)(a,{ref_for:!0,ref:"questionOptions",class:"question__option",onOptionClicked:s.handleOptionClicked,onAnswerSelected:s.handleAnswerSelected,optionsArray:s.optionsArray,optionIndex:t},null,8,["onOptionClicked","onAnswerSelected","optionsArray","optionIndex"])])))),128))])])}o(7658);const Y={class:"option"},B={class:"option__answer"};function F(e,t,o,n,i,s){return(0,r.wg)(),(0,r.iD)("div",Y,[(0,r._)("button",{class:(0,z.C_)(["option__button",{"click-color":i.isClicked}]),onClick:t[0]||(t[0]=(...e)=>s.handleClick&&s.handleClick(...e))},null,2),(0,r._)("div",B,[(0,r._)("p",null,(0,z.zw)(o.optionsArray[o.optionIndex]),1)])])}var K={props:{optionsArray:{type:Array,required:!0},optionIndex:{type:Number,required:!0}},data(){return{isClicked:!1,randomIndex:0}},methods:{handleClick(){this.isClicked=!this.isClicked;const e=this.optionsArray[this.optionIndex]===this.$parent.answer;this.$emit("option-clicked",this),this.$emit("answer-selected",e)}},created(){this.randomIndex=Math.floor(Math.random()*this.optionsArray.length),console.log(this.optionsArray)}};const R=(0,h.Z)(K,[["render",F],["__scopeId","data-v-6f78ebd2"]]);var L=R;const G=[{question:"When you run the ____ command in the terminal, it prints the current working directory to the console.",answer:"What does pwd do in the terminal?"},{question:"The ____ command is a Unix-based command that prints text to the console.",answer:"What is the echo command?"},{question:"To print a string to the console using the ___ command, simply type ____ followed by the string you want to print.",answer:"How do you use the echo command to print a string to the console?"},{question:"The __ command is a Unix-based command that lists the contents of a directory.",answer:"What is the ls command?"},{question:"To list the contents of the current working directory using the ls command, simply type ____.",answer:"How do you use the ls command to list the contents of the current working directory?"},{question:"To list the contents of a specific directory using the ls command, type ____ followed by the path to the directory.",answer:"How do you use the ls command to list the contents of a specific directory?"},{question:"To list the contents of a directory in long format using the ls command, use the ____ option.",answer:"How do you use the ls command to list the contents of a directory in long format?"},{question:"When you use the single dot (.) in a terminal command, it refers to the ____.",answer:"What does the single dot (.) represent in a terminal command?"},{question:"You can use ____ to list the contents of the current directory, or ____ to move up one level in the directory hierarchy.",answer:"What are the commands to list the contents of the current directory and move up one level in the directory hierarchy?"},{question:"When you use two dots (..) in a terminal command, it refers to the ____.",answer:"What do two dots (..) represent in a terminal command?"},{question:"The ____ command is used to change the current working directory.",answer:"What is the purpose of the cd command?"},{question:"To change the current working directory to a directory in the current path using the cd command, type ____ followed by the name of the directory.",answer:"How do you use the cd command to change the current working directory to a directory in the current path?"},{question:"To change the current working directory to a directory specified by an absolute path using the cd command, type ____ followed by the absolute path to the directory.",answer:"How do you use the cd command to change the current working directory to a directory specified by an absolute path?"},{question:"To change the current working directory to the home directory using the cd command, simply type ____ without any arguments.",answer:"How do you use the cd command to change the current working directory to the home directory?"},{question:"To change the current working directory to the previous directory using the cd command, type ____.",answer:"How do you use the cd command to change the current working directory to the previous directory?"},{question:"The ____ command takes two arguments: the source file or directory and the destination file or directory.",answer:"Which command is used to move or rename files and directories?"},{question:"To rename a file with ____, specify the current name of the file as the source file and the desired new name of the file as the destination file.",answer:"How do you rename a file using the mv command?"},{question:"The ____ command is used to create a new directory.",answer:"What is the purpose of the mkdir command?"},{question:"The ____ command takes one argument, which is the name of the new directory you want to create.",answer:"Which command is used to create a new directory?"},{question:"The ____ command is used to remove a directory that is empty.",answer:"What is the purpose of the rmdir command?"},{question:"The ____ command takes one argument, which is the name of the directory you want to remove.",answer:"Which command is used to remove a directory?"},{question:"Here's an example of how you can use the ____ command: $ ____ my_directory.",answer:"How do you use the rmdir command?"},{question:"$ rm -r my_directory, -r option tells the rm command to remove the directory my_directory and all of its contents ____. ",answer:"What does the -r option do in the rm command?"},{question:"The ____ command is used to create a new file or update the timestamp of an existing file.",answer:"What is the purpose of the touch command?"},{question:"In this example, the ____ command creates a new file named myfile.txt in the current working directory. If the file already exists, the ____ command updates the timestamp of the file to the current time.",answer:"How do you use the touch command?"},{question:"The ____ command is used to copy files or directories from one location to another.",answer:"What is the purpose of the cp command?"},{question:"The ____ command takes two arguments: the source file or directory and the destination file or directory.",answer:"Which command is used to copy files or directories?"},{question:"In this example, the ____ command copies a file named file.txt to a different directory specified by the path /path/to/directory.",answer:"How do you use the cp command?"},{question:"The ____ command is used to display a brief one-line description of a Unix command.",answer:"What is the purpose of the whatis command?"},{question:"The ____ command takes one argument, which is the name of the command you want to look up.",answer:"Which command is used to display a brief one-line description of a Unix command?"},{question:"The ____ command is used to display the manual page for a Unix command or system function. The manual page provides detailed documentation about the command or function, including its purpose, usage, options, and examples.",answer:"What is the purpose of the man command?"}];var X=G,ee={components:{QuestionOption:L},props:{questionNumber:{type:Number,required:!0},questionText:{type:String,required:!0},answer:{type:String,required:!0}},data(){return{terminalQuestions:X}},computed:{optionsArray(){let e=[],t=this.terminalQuestions.filter((e=>e.answer!==this.answer));const o=this.getUniqueRandomIndexes(3,t.length-1);for(let n=0;n<o.length;n++)e.push(t[o[n]].answer);return e.push(this.answer),e.sort((()=>Math.random()-.5)),e}},created(){},methods:{handleOptionClicked(e){this.$refs.questionOptions.forEach((t=>{t!==e&&(t.isClicked=!1)}))},getUniqueRandomIndexes(e,t){const o=new Set;while(o.size<e){const e=Math.floor(Math.random()*(t+1));o.add(e)}return Array.from(o)},handleAnswerSelected(e){e?alert("Correct answer selected"):alert("Incorrect answer selected")}}};const te=(0,h.Z)(ee,[["render",V],["__scopeId","data-v-25a34f29"]]);var oe=te,ne={components:{QuestionCard:oe},data(){return{terminalQuestions:X}}};const re=(0,h.Z)(ne,[["render",N]]);var ie=re;const se=(0,T.p7)({history:(0,T.r5)(),routes:[{path:"/",component:M},{path:"/question/:subject",component:ie}]});var ae=se;const ce=(0,n.ri)(x);ce.use(ae),ce.mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="https://quamir.github.io/JavaPrepQ/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,s=n[0],a=n[1],c=n[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var u=c(o)}for(t&&t(n);d<s.length;d++)i=s[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self["webpackChunkjava_prep_q"]=self["webpackChunkjava_prep_q"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(777)}));n=o.O(n)})();
//# sourceMappingURL=app.41c53b5d.js.map