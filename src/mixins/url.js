export default{
    methods: {
        getPageName() {
            let url = window.location.href;
            let pageName = url.substring(url.lastIndexOf("/") + 1);
            return pageName;
        },
    }
}