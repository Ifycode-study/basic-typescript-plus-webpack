function greet(name: string): string {
  return `Hello, ${name}!`;
}

document.querySelector('#click-me')?.addEventListener('click', () => {
  const user: string = 'TypeScript Developer';
  alert(greet(user));
});
