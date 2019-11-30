// ========================================
//  Sentryの設定を書く
// ========================================
const develop = {
  dns: '',
  environment: 'develop',
};

const staging = {
  dns: '',
  environment: 'staging',
};

const production = {
  dns: '',
  environment: 'production',
};

export const sentryConfig = {
  develop,
  staging,
  production,
};
