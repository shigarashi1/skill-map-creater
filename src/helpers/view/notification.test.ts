import { getAutoHideDuration } from './notification';
import { AUTO_HIDE_DURATION_CONFIG } from '../../lookups';

describe('getAutoHideDuration', () => {
  it('引数として渡したレベルに応じた時間を返却する', () => {
    AUTO_HIDE_DURATION_CONFIG.forEach(([level, time]) => {
      expect(getAutoHideDuration(level)).toBe(time);
    });
  });
});
