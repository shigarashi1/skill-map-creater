import { TError, TLangCode } from '../../types';

export class ErrorBase<T> extends Error {
  protected _error: TError;

  get error() {
    return this._error;
  }

  constructor(error: T | any, params: string[] = [], langCode: TLangCode = 'jp') {
    super();
    if (typeof error === 'string') {
      this._error = { code: '', message: error };
      return;
    }
    const errorMessage = error.message || '';
    this._error = { code: 'unknown', message: `An unknown error has occurred. ${errorMessage}` };
  }
}
