const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
        console.log('login error');    
        return {
            ...state,   //update all the states
            authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
        console.log('Login Success');
        return {
            ...state,
            authError: null
        }
        case 'SIGNOUT_SUCCESS':
        console.log('signout success');
            return state;
        default:
            return state;
    }
}
export default authReducer