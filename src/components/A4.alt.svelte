<style>
  .A4 {
    box-sizing: border-box;
    flex-grow: 1;
    max-width: 210mm;
    max-height: 297mm;
    aspect-ratio: 0.707070;
    object-fit: contain;
    padding: 8mm;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

		background-color: #ffffff;
		-webkit-box-shadow: 0px 10px 53px -23px rgba(0,0,0,0.52);
		-moz-box-shadow: 0px 10px 53px -23px rgba(0,0,0,0.52);
		box-shadow: 0px 10px 53px -23px rgba(0,0,0,0.52);
  }
</style>

<div class="A4">
  <slot></slot>
</div>