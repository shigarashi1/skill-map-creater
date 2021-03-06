export enum EPath {
  /** トップ画面 */
  Top = '/',
  /** ログイン画面 */
  SignIn = '/login',
  /** 登録画面 */
  SignUp = '/sign_up',
  /** ホーム画面 */
  Home = '/home',

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
  SkillInput = '/skill_input',
  /** スキルマップ表示画面 */
  SkillMap = '/skill_map',

  /** サンプル画面 */
  Sample = '/sample',
  SampleAtoms = '/sample/atoms',
  SampleMolecules = '/sample/molecules',
  SampleOrganisms = '/sample/organisms',

  /** マニュアル画面 */
  Manual = '/manual',
  /** 技術画面 */
  Technology = '/technology',
  /** 403画面 */
  Forbidden = '/forbidden',
  /** 404画面 */
  NotFound = '/not_found',
  /** passwordリセット画面 */
  PasswordReset = '/password_reset',
}
