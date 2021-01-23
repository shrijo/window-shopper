<svelte:head>
  <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
</svelte:head>

<script>
import { onMount } from "svelte";


  // import { afterUpdate, onMount } from 'svelte';
	
	export let codeValue;
  export let squareSize;
  onMount(() => {
    qrcode = new QRCode("qrcode", {
      text: codeValue,
      width: squareSize,
      height: squareSize,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });		
  })
	
  // let qrcode;
			
	// onMount(() => {

	// 	let script = document.createElement('script');
  //   script.src = "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
  //   document.head.append(script);
	
	// 	script.onload = function() {

	// 		qrcode = new QRCode("qrcode", {
	// 			text: codeValue,
	// 	  	width: squareSize,
  //       height: squareSize,
  //       colorDark : "#000000",
  //       colorLight : "#ffffff",
  //       correctLevel : QRCode.CorrectLevel.H
	// 		});		
			
	// 	};				
	  
  // });
  
  // afterUpdate(() => {
  //   qrcode = new QRCode("qrcode", {
  //     text: codeValue,
  //     width: squareSize,
  //     height: squareSize,
  //     colorDark : "#000000",
  //     colorLight : "#ffffff",
  //     correctLevel : QRCode.CorrectLevel.H
  //   });		
  // });
</script>

<style>
  #qrcode {
    width:20px;
    height:200x;
    margin-top:15px;
  }
</style>

<div id="qrcode"></div>