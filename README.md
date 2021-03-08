# About

React Tutorial + StoryBook + Storyshot + Puppeteer + Cypress  
https://ja.reactjs.org/tutorial/tutorial.html  
https://storybook.js.org/
https://storybook.js.org/docs/react/workflows/snapshot-testing
https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-puppeteer
https://www.cypress.io/

## E2E テストのメリットとデメリット

- メリット

  - 実際のユーザーが行う動作に近いテストができる
    - アプリケーション(フロント・バック・インフラ)が動作することの確認ができる
  - ブラウザに表示されている文言などもチェックすることができる

- デメリット
  - 遅い
  - 形骸化しやすい

## どのような基準で選ぶと良いでしょうか？

採用可能なら組み合わせて採用する

単体>統合>E2E
単体は単体はロジックを担保できるので優先する
統合は単体でテストできない範囲（フロントとバックのやりとりや、複数のユニットのやりとり）をカバーする  
https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests

## クイズ

### Cypress でテストが多く時間がかかっている場合、高速化するには何を検討すればよいでしょうか
<details> 
<summary>解答</summary>
並列化  
https://docs.cypress.io/guides/guides/parallelization.html#Overview

</details>

### Cypress で環境変数の使い方を3つあげてください
<details>
<summary>解答</summary>
1. cypress.jsonにenvキーを追加

```javascript
{
  "projectId": "128076ed-9868-4e98-9cef-98dd8b705d75",
  "env": {
    "login_url": "/login",
    "products_url": "/products",
  }
}
```

2. cypress.env.jsonを作成する

```javascript
{
    "login_url": "/login",
    "products_url": "/products"
}
```

3. コマンドラインから追加
https://docs.cypress.io/guides/guides/environment-variables.html#Setting

</details>

### Cypress で デフォルトのセレクタの優先度で一番高いのは何でしょうか

<details>
<summary>解答</summary>
data-cy
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

```

```
