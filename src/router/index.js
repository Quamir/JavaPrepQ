import { createRouter, createWebHashHistory  } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import QuestionPage from '../pages/QuestionPage.vue';

const router = createRouter({
    history: createWebHashHistory (),
    routes: [
        { path: '/', component: HomePage },
        { path: '/question/:subject', component: QuestionPage}        
    ]
});

export default router;