// APIとの通信やDBからのデータ取得などの内容を記載する
import { combineEpics } from 'redux-observable';
import { middlewareAuthEpics } from './auth';
import { middlewareUserEpics } from './user';

export const middlewareEpics = combineEpics(middlewareAuthEpics, middlewareUserEpics);

export { middlewareAuthActions } from './auth';
export { middlewareUserActions } from './user';
