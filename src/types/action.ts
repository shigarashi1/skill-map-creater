import { Action } from 'typescript-fsa';
import { ApiError } from '../models/errors/ApiError';

export type WrapAction<T extends (...args: any[]) => any> = Action<Parameters<T>[0]>;
export type ResolvedType<T> = T extends Promise<infer R> ? R : never;
export type ExcludeApiError<T> = T extends ApiError ? never : T;
