import { error } from './error';
import { warning } from './warn';
import { info } from './info';

export const Message = {
  ...error,
  ...warning,
  ...info,
};
