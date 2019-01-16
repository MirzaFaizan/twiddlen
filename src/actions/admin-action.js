export const UPDATE_ADMIN = 'admins:updateAdmin';

export function updateAdmin(loggedIn){
    // console.log(loggedIn)
    return {
        type:UPDATE_ADMIN,
        payload:loggedIn
    }
}