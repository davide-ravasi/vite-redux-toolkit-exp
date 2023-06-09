import { useDispatch } from "react-redux";
import { SetStateAction, useCallback, useState } from "react";

export type IUseThunkReturn = [(arg?: unknown) => void, boolean, null | string];

export const useThunk = (thunk): IUseThunkReturn => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const runThunk = useCallback((arg: unknown) => {
    setIsLoading(true);
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
    dispatch(thunk(arg))
      .unwrap()
      .catch((err: { message: SetStateAction<null>; }) => {
        setLoadingError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, thunk]);

  return [runThunk, isLoading, loadingError];
};
