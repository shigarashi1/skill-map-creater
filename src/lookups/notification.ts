import { VariantType } from 'notistack';

export const AUTO_HIDE_DURATION_CONFIG: Array<[VariantType, number | undefined]> = [
  ['default', 1000],
  ['info', 1000],
  ['success', 2000],
  ['warning', 3000],
  ['error', undefined],
];
