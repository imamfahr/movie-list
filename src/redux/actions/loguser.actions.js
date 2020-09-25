export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export default function loginUser(){
    return {
        type: LOGIN,
    }
}

export default function logoutUser(){
    return {
        type:LOGOUT,
    }

}