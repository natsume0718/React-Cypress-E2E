# About

React Tutorial + StoryBook
https://ja.reactjs.org/tutorial/tutorial.html  
https://storybook.js.org/

## Merit

 - アプリケーションから独立した環境でUIコンポーネントを構築・管理しUIコンポーネント自体を共有できるので、アプリケーション側はImportするだけでUIを実装できる
 - UI コンポーネントをカタログから探せるので 再利用が捗る
 - デザイナーとの共同作業がしやすくなる

## Demerit

 - 追加されたデザインパーツは都度 Storybookへの反映がいるため工数が増える
 - デザイナーが扱えるように環境整備が必要
 - 機能が多く学習コストがかかる

## Quiz

### StoryBookで使用できるmdx構文はどのような特徴があるでしょうか

<details>
<summary>解答</summary>
Markdownドキュメントとストーリーを1つのファイルにキャプチャするために使用します。
</details>

### StoryBookで環境変数を使用したい場合はどのようにすればよいでしょうか

<details>
<summary>解答</summary>
.envにSTORYBOOK_接頭辞が付いた変数で指定する  
または、実行時にコマンドから渡す
</details>

### StoryBookで機能を拡張したい場合何を用いるでしょうか

<details>
<summary>解答</summary>
Storybookコアチームによって開発された「公式」アドオンだけでなく、多くのサードパーティアドオンがあります。
</details>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
