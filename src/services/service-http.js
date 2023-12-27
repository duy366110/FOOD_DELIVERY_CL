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

        if(!res.ok) {
            let infor = await res.json();
            cb({status: false, message: infor.message});
            
        } else {
            cb(await res.json());
        }
    }

    return {
        http
    }
}

export default serviceHttp;