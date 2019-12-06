import { actionCreatorFactory } from 'typescript-fsa';
import { UserService } from '../../services/firebase';
import { ExcludeApiError, ResolvedType } from '../../types';

type TCreateParams = Parameters<typeof UserService.createUser>;
type TCreateResult = ExcludeApiError<ResolvedType<ReturnType<typeof UserService.createUser>>>;

type TReadParams = ExcludeApiError<ResolvedType<ReturnType<typeof UserService.readUser>>>;
type TReadResult = ExcludeApiError<ResolvedType<ReturnType<typeof UserService.readUser>>>;

type TUpdateParams = ExcludeApiError<ResolvedType<ReturnType<typeof UserService.updateUser>>>;
type TUpdateResult = ExcludeApiError<ResolvedType<ReturnType<typeof UserService.updateUser>>>;

type TDeleteParams = ExcludeApiError<ResolvedType<ReturnType<typeof UserService.deleteUser>>>;
type TDeleteResult = ExcludeApiError<ResolvedType<ReturnType<typeof UserService.deleteUser>>>;

// actions
const ac = actionCreatorFactory('[middlewares/user]');
const actions = {
  create: ac.async<TCreateParams, TCreateResult, {}>('create'),
  read: ac.async<TReadParams, TReadResult, {}>('read'),
  update: ac.async<TUpdateParams, TUpdateResult, {}>('update'),
  delete: ac.async<TDeleteParams, TDeleteResult, {}>('delete'),
};
export const middlewareUserActions = actions;
