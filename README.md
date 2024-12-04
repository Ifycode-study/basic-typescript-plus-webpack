# Basic Typescript & Webpack (with html)

Learnt from "TypeScript and Webpack: A Step-by-Step Guide" article: https://codedamn.com/news/typescript/typescript-webpack-step-by-step-guide

## How to run project

Build files:

```
npm run build
```

Start project:

```
npm run start
```

## Slight change in my index.html and index.ts files

index.html file, added inside body tag:

```
<button id="click-me">Click me!</button>
```

index.ts file, use of:

```
document.querySelector('#click-me')?.addEventListener('click', () => {
  const user: string = 'TypeScript Developer';
  alert(greet(user));
});
```

Instead of:

```
console.log(greet(user));
```

## Other things I added
Based on settings applied from [some other tutorial](https://github.com/Ifycode-study/cool-react-with-typescript-lib), I added these too in this learning project:
- .vscode folder: Containing vscode settings useful for prettier
- .prettierrc config file: prettier code cleanup settings

## Error and helpful debugging resource

Error upon running `npm start` script command:
````
[webpack-cli] Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
 - options has an unknown property 'contentBase'. These properties are valid:
   object { allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, ipc?, liveReload?, onListening?, open?, port?, proxy?, server?, app?, setupExitSignals?, setupMiddlewares?, static?, watchFiles?, webSocketServer? }
````

Solution: Use `static` property instead of `contentBase`, in webpack config's `devServer` object.

Slack overflow comment: https://stackoverflow.com/a/72190722
