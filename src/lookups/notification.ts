import { VariantType } from 'notistack';

export const AUTO_HIDE_DURATION_CONFIG: Array<[VariantType, number | undefined]> = [
  ['default', 1000],
  ['info', 1000],
  ['success', 3000],
  ['warning', 5000],
  ['error', undefined],
];
