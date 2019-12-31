import { VariantType } from 'notistack';
import partial from 'ramda/es/partial';

import { AUTO_HIDE_DURATION_CONFIG } from '../../lookups';

const getAutoHideDurationTime = (config: typeof AUTO_HIDE_DURATION_CONFIG, variant?: VariantType): number | undefined =>
  config.find(([variantType, _time]) => variantType === variant)?.[1];

export const getAutoHideDuration = partial(getAutoHideDurationTime, [AUTO_HIDE_DURATION_CONFIG]);
