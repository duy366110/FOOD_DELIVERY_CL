"use strict"

const serviceHttp = function() {

    let http = async (url = "", method= "", payload= null, cb) => {
        let res = await fetch(url, {
            method: method? method : 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            body: payload? JSON.stringify(payload) : null
        })

        if(!res.ok) throw new Error('Call api unsuccess');
        cb(await res.json());
    }

    return {
        http
    }
}

export default serviceHttp;