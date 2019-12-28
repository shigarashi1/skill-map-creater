### backgrounds

- ここには background で動かしたいコンポーネントをおく（描画しないやつ）

### components

- ここにはコンポーネントをおく

### configuration

- 設定を置く
- private には機密情報を置く（.gitignore に追加するのを忘れずに）

### containers

- `components`と`store`を connect する

```
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../store';

const mapStateToProps = (state: AppState) => {
  return {};
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
}

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(SamplePage);
```

### guards

- ここには router を制御するコンポーネントをおく
- ログインしていないと表示できないページの管理とか

### helpers

- 共通関数を置く（イミュータブルなやつ）

### i18n

- 言語変換に関するものを置く

### lib

- ライブラリ的な奴を書く

### lookups

- 定数を置く

### middlewares

- API との通信を担う処理を書く

### models

- class を置く

### routers

- router を置く

### services

- 副作用を伴う処理を書く

### store

- redux の state に関するものを書く

### styles

- css ファイルを置く

### types

- 型定義を書く

### views

- コンポーネントに
