import { readEndpoint } from "observable-redux-json-api";

export const fetchUsers = (action$, store) =>
  action$
    .ofType("USERS/FETCH_USERS")
    .delay(1500)
    .mergeMap(() => store.dispatch(readEndpoint("users")))
    .mapTo({ type: "USERS/FETCH_USERS_DONE" });

export default fetchUsers;
