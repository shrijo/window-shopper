<script>
  const fn = t => [
    (r * Math.sin(t)).toFixed(2),
    (r * Math.cos(t)).toFixed(2)
  ]

  let count = 8;
	let r = 5;
	let coords = Array
		.from({length: count})
    .map((_,i) => fn(i))
    
</script>

{#each coords as [x, y]}
{x}px {y}px 0px #FFFFFF,<br>
{/each}