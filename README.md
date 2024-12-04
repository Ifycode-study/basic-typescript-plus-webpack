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

## Helpful debugging resources:

Slack overflow comment: https://stackoverflow.com/a/72190722
