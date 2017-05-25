export default {
    inserted: function (el, bingding, vnode) {
        let offsetTop = el.offsetTop,
            navHeight = el.offsetHeight;
        el.parentNode.addEventListener("scroll", function () {
            let scrollTop = el.parentNode.scrollTop;
            if (scrollTop >= 40) {
                el.style.position = "fixed";
                el.style.top = 0;
                el.style.webkitTransition = "opacity 1s ease-in 1"
            } else {
                el.style.position = "static";
                el.style.top = 0;
                el.style.webkitTransition = "opacity 1s ease-in"
            }
        }, false)
    }
}