import { createRouter, createWebHashHistory  } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import QuestionPage from '../pages/QuestionPage.vue';
import TopicPage from '../pages/TopicPage.vue';

const router = createRouter({
    history: createWebHashHistory (),
    routes: [
        { path: '/', component: HomePage },
        { path: '/questions/:subject', component: QuestionPage},
        { path: '/topics/:page', component: TopicPage},
        { path: '/topics/codingquestions', component: TopicPage}
    ]
});

export default router;