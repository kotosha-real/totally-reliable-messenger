import { TYPE } from '../../../constants/index.js';
export const options = {
    type: TYPE.LOGIN,
    data: [
        {
            title: 'Login',
            value: '',
            type: 'text'
        },
        {
            title: 'Password',
            value: '',
            type: 'password'
        }
    ]
};
