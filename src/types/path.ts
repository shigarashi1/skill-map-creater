export enum EPath {
  /** ログイン画面 */
  SignIn = '/signIn',
  /** 登録画面 */
  SignUp = '/signUp',
  /** ホーム画面 */
  Home = '/',

  /** 設定親画面 */
  Setting = '/setting',
  /** ユーザー設定画面 */
  SettingUser = '/setting/user',
  /** グループ設定画面 */
  SettingGroup = '/setting/group',
  /** プロジェクト設定画面 */
  SettingProject = '/setting/project',
  /** スキル設定画面 */
  SettingSkill = '/setting/skill',
  /** 権限設定画面 */
  SettingAuth = '/setting/authorization',

  /** スキル入力画面 */
  SkillInput = '/skill-input',
  /** スキルマップ表示画面 */
  SkillMap = '/skill-map',

  /** サンプル親画面 */
  Sample = '/sample',
  SampleAtoms = '/sample/atoms',
  SampleMolecules = '/sample/molecules',
  SampleOrganisms = '/sample/organisms',

  /** マニュアル画面 */
  Manual = '/manual',
}
