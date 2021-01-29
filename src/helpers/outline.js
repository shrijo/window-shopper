export default () => {
  let n = 10;
  let r = 5;

  let shadows = Array.from({ length: n }, (_, x) => [
    (r * Math.sin(x)).toFixed(2),
    (r * Math.cos(x)).toFixed(2)
  ])
    .map(([x, y]) => `${x}px ${y}px white`)
    .join(',')
  return `--outline: ${shadows};`
} 