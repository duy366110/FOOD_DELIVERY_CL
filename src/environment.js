"use strict"
const environment = {
    dev: {
        api: {
            url: "http://localhost:8080/v1/api/",
            access: {
                signin: "common/access/signin",
                signout: "common/access/signout",
            }
        }
    },
    pro: {
        api: {
            url: "https://food-delivery-53se.onrender.com/v1/api/",
            access: {
                signin: "common/access/signin",
                signout: "common/access/signout",
            }
        }
    }
}

export default environment['pro']; // dev