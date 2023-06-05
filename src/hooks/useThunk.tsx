import { useDispatch } from "react-redux";
import { useState } from "react";

export const useThunk = (fetch) => {
    const dispatch = useDispatch();

    const doFetchUsers = () => {
        setIsLoadingUsers(true);
            // how to manage loading and error state
    // inside a component
    // when fetching data from an API
    // using redux toolkit unwrap utility
    // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-results
        
        //     /* 
    //       The promise returned by the dispatched thunk 
    //       has an unwrap property which can be called 
    //       to extract the payload of a fulfilled action 
    //       or to throw either the error 
    //     */
    dispatch(fetch()).unwrap()
        .catch((err) => {
            setLoadingUsersError(err.message);
        })
        .finally(() => {
            setIsLoadingUsers(false);
        })
    }

    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [loadingUsersError, setLoadingUsersError] = useState(null);

    return [
        doFetchUsers,
        isLoadingUsers,
        loadingUsersError,
    ]
}