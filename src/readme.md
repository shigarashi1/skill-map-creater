### backgrounds
- ここにはbackgroundで動かしたいコンポーネントをおく（描画しないやつ）

### components
- ここにはコンポーネントをおく

### configuration
- 設定を置く
- privateには機密情報を置く（.gitignoreに追加するのを忘れずに）

### containers
- `components`と`store`をconnectする
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
- ここにはrouterを制御するコンポーネントをおく
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
- APIとの通信を担う処理を書く

### models
- classを置く

### routers
- routerを置く

### services
- 副作用を伴う処理を書く

### store
- reduxのstateに関するものを書く

### styles
- cssファイルを置く

### types
- 型定義を書く

### views
- コンポーネントに