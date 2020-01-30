import { Middleware, Action, AnyAction } from 'redux';
type MiddlewareExt = Middleware & {
    withExtraArgument: typeof createThunkMiddleware
}
export type ThunkAction<R, S, E, A extends Action> = (
    dispatch: ThunkDispatch<S, E, A>,
    getState: () => S,
    extraArgument: E
) => R;
export interface ThunkDispatch<S, E, A extends Action> {
    <T extends A>(action: T): T;
    <R>(asyncAction: ThunkAction<R, S, E, A>): R;
}
function createThunkMiddleware<S = {}, A extends Action = AnyAction, E = undefined>(extraArgument?: any): Middleware {
    let middleware: Middleware<ThunkDispatch<S, E, A>, S, ThunkDispatch<S, E, A>> = ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
        }

        return next(action);
    };
    return middleware;
}

const thunk: MiddlewareExt = createThunkMiddleware() as MiddlewareExt;
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;