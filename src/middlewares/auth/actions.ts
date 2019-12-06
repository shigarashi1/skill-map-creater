import { actionCreatorFactory } from 'typescript-fsa';
import { AuthenticationService } from '../../services/firebase';
import { ExcludeApiError, ResolvedType } from '../../types';
import { ApiError } from '../../models/errors/ApiError';

type TSignInParams = Parameters<typeof AuthenticationService.signIn>;
type TSignInResult = ExcludeApiError<ResolvedType<ReturnType<typeof AuthenticationService.signIn>>>;

type TSignUpParams = Parameters<typeof AuthenticationService.signUp>;
type TSignUpResult = ExcludeApiError<ResolvedType<ReturnType<typeof AuthenticationService.signUp>>>;

// actions
const ac = actionCreatorFactory('[middlewares/auth]');
const actions = {
  signIn: ac.async<TSignInParams, TSignInResult, ApiError>('signIn'),
  signUp: ac.async<TSignUpParams, TSignUpResult, ApiError>('signUp'),
  signOut: ac.async<void, void, ApiError>('signOut'),
};
export const middlewareAuthActions = actions;
