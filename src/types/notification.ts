import { OptionsObject } from 'notistack';

export type TNotification = {
  message: string;
  hasDismissed?: boolean;
  options: OptionsObject;
};
