"use strict"
const regexEmail = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
const regexPhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

const valid = (key, value) => {

    if(key === 'require') {
        if(value.trim().length) {
            return {
                status: true,
                message: ''
            }
        } else {
            return {
                status: false,
                message: 'Input must enter value'
            }
        }
    }

    if(key === 'email') {
        if(value.trim().toLowerCase().match(regexEmail)) {
            return {
                status: true,
                message: ''
            }
        } else {
            return {
                status: false,
                message: 'Input must enter email'
            }
        }
    }

    if(key === 'password') {
        if(regexPassword.test(value)) {
            return {
                status: true,
                message: ''
            }
        } else {
            return {
                status: false,
                message: 'Enter password less 6 charter'
            }
        }
    }

    if(key === 'phone') {
        if(regexPhone.test(value)) {
            return {
                status: true,
                message: ''
            }
        } else {
            return {
                status: false,
                message: 'Enter phone number'
            }
        }
    }
}

// Phương thức thự hiện kiểm tra giá trị người dùng nhập vào.
const validReducer = (value = "", options) => {
    // Dự vào danh sách nhập điều kiên lấy từng điều kiện kiểm tra. VD: ['require', 'email'].
    if(options.length) {
        for(let key of options) {
            let inforValid = valid(key, value);

            if(!inforValid.status) {
                return inforValid;
            }
        }
    }
    return {status: true, message: ''};
}

const serviceValidation = (value = "", options = []) => {
    return validReducer(value, options);
}

export default serviceValidation;