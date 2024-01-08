"use strict"

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const observe = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log("Load dish cua category");
            console.log(entry.target.id);
            observer.unobserve(entry.target);
        }
    })

}, options);

const serviceLoadlazy = () => {
    const intersection = (elements) => {
        for(let view of elements) {
            observe.observe(view);
        }
    }

    return { intersection }
}

export default serviceLoadlazy;