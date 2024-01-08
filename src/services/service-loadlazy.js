"use strict"
import environment from "@/environment";
const worker = new Worker(`${window.location.origin}/js/worker.js`);
let kind = "";

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const observe = new IntersectionObserver((entries, observer) => {

    if(kind === "menu") {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                worker.postMessage({
                    type: "get-category-dish",
                    payload: {
                        id: entry.target.id,
                        url: `${environment.api.url}${environment.api.dish.dishByCategoryId}`
                    }
                });
                observer.unobserve(entry.target);
            }
        })
    }

}, options);

const serviceLoadlazy = () => {
    const intersection = (type = "", elements, cb) => {
        if(type === "menu") {
            kind = "menu";
            for(let view of elements) {
                observe.observe(view);
            }

            worker.onmessage = (event) => {
                cb(event.data);
            }
        }
    }

    return { intersection }
}

export default serviceLoadlazy;