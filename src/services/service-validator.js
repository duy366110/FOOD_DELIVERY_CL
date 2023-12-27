"use strict"

const valid = (key, value) => {
    // let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    // let regexPhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

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

    // if(key === 'email') {
    //     if(value.trim().toLowerCase().match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    //         return {
    //             status: true,
    //             message: ''
    //         }
    //     } else {
    //         return {
    //             status: false,
    //             message: 'Input must enter email'
    //         }
    //     }
    // }

    // if(key === 'password') {
    //     if(regexPassword.test(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)) {
    //         return {
    //             status: true,
    //             message: ''
    //         }
    //     } else {
    //         return {
    //             status: false,
    //             message: 'Enter password less 6 charter'
    //         }
    //     }
    // }

    // if(key === 'phone') {
    //     if(regexPhone.test(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/)) {
    //         return {
    //             status: true,
    //             message: ''
    //         }
    //     } else {
    //         return {
    //             status: false,
    //             message: 'Enter phone number'
    //         }
    //     }
    // }
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

    // const onBlur = (event) => {
    //     let { type } = event.target;

    //     if(type !== 'file') {
    //         dispatchValid({type: 'VALID', options, value: event.target.value});

    //     } else {
    //         dispatchValid({type: 'VALID', options, value: event.target.files[0]?.name? 'has file' : ''});
    //     }
    // }

    // const onChange = (event) => {
    //     let { type } = event.target;

    //     if(type !== 'file') {
    //         setValue(event.target.value);

    //     } else {
    //         let nameFile = event.target.files[0]?.name? event.target.files[0]?.name : '';
    //         setValue(nameFile);
    //     }
    // }

    // useEffect(() => {
    //     setValue(defaultVal);

    // }, [defaultVal])

    // // PHƯƠNG THỨC RESET VALUE INPUT
    // function resetValue() {
    //     setValue('');
    // }
}

export default serviceValidation;