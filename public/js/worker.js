"use strict"

const process = async (url = "", token = "",  method = "", payload = null) => {
    try {

        let res = await fetch(url, {
            method: method? method : 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token? token: ""
            },
            body: payload? payload : null
        })

        return await res.json();

    } catch (error) {
        return {
            status: false,
            message: error.message
        };
    }
}

onmessage = async (event) => {
    let { type, payload } = event.data;

    switch(type) {

        case "get-category-dish":
        default:
            let url = `${payload.url}/${payload.id}`;
            postMessage({category: payload.id, menu: await process(url)});
            break
    }
}