export const UPDATE_CLIENT = 'clients:updateClient';

export function updateClient(loggedIn) {
  // console.log(loggedIn)
  return {
    type: UPDATE_CLIENT,
    payload: loggedIn
  };
}
