<script>
  export let value;
  export let label = 'Label Text';
  export let placeholder = 'Placeholder Text';
  let id = label.toLowerCase();
</script>

<label for={id}>{label}</label>
<textarea
  name={label}
  cols="30"
  rows="10"
  {placeholder}
  {id}
  bind:value
></textarea>