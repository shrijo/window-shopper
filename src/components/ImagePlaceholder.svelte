<script>
  export let x = 9;
  export let y = 9;
  export let width = 9;
  export let height = 9;

  let strokeWidth = 0.01;
</script>

<svg
  {x}
  {y}
  {width}
  {height}
  viewBox="0 0 1 1"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <g fill="none" stroke="black" stroke-width={strokeWidth}>
    <path d="M0,0 L1,1 M0,1 L1,0" />
    <rect stroke-width={strokeWidth * 2} x="0" y="0" height="1" width="1" />
  </g>
</svg>
