import { ErrorBase } from './ErrorBase';
import { TError } from '../../types';
import { isMatchType } from '../../helpers';

/**
 * APIで生じたエラー
 */
export class ApiError extends ErrorBase<string> {
  constructor(error: TError | Error) {
    super(error);
    if (isMatchType<TError>(error)) {
      this._error = { ...error };
    }
  }
}
