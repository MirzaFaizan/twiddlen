import { UPDATE_CLIENT } from '../actions/client-action.js';

export default function adminReducer(state = '', { type, payload }) {
  // console.log(payload)
  switch (type) {
    case UPDATE_CLIENT:
      return payload;
    default:
      return state;
  }
}
