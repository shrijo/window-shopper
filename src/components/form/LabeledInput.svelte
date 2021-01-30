<script>
  export let value;
  export let label = 'Label Text';
  export let placeholder = 'Placeholder Text';
  let id = label.toLowerCase();
</script>

<label for={id}>{label}</label>
<input
  type="text"
  {id}
  {placeholder}
  bind:value >