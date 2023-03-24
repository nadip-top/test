var cklik = 0;
		function k1(){
			document.getElementById('jhg').innerHTML = "<u>Корзина ("+cklik+")</u>" ;
			cklik=cklik+1;
		}
		var i = 0;
		var k = 0;
		var w=53;
		var s="______         Подробнее";
	//M-Shirt
		function klo(){
			document.getElementById("scrip").style.width=w+"px";
			document.getElementById("scrip").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==0) {
				i=i+2
			}
			if (w<165 && k==0){
				w=w+2;
				var ti=setTimeout("klo()",5);
			}
			if (w==165  && k==0) {
				k = 1
			}
		}
		function kli(){
			document.getElementById("scrip").style.width=w+"px";
			document.getElementById("scrip").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==1) {
				i=i-2
			}
			if (w>53 && k==1){
				w=w-2
				var t=setTimeout("kli()",1);
			}
			if (w==53 && k==1) {
				k = 0
			}
		}
//end
//L-Shirt
		function klo1(){
			document.getElementById("scrip2").style.width=w+"px";
			document.getElementById("scrip2").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==0) {
				i=i+2
			}
			if (w<165 && k==0){
				w=w+2;
				var ti=setTimeout("klo1()",5);
			}
			if (w==165  && k==0) {
				k = 1
			}
		}
		function kli1(){
			document.getElementById("scrip2").style.width=w+"px";
			document.getElementById("scrip2").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==1) {
				i=i-2
			}
			if (w>53 && k==1){
				w=w-2
				var t=setTimeout("kli1()",1);
			}
			if (w==53 && k==1) {
				k = 0
			}
		}
//end
//RushGuard
			function klo2(){
			document.getElementById("scrip3").style.width=w+"px";
			document.getElementById("scrip3").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==0) {
				i=i+2
			}
			if (w<165 && k==0){
				w=w+2;
				var ti=setTimeout("klo2()",5);
			}
			if (w==165  && k==0) {
				k = 1
			}
		}
		function kli2(){
			document.getElementById("scrip3").style.width=w+"px";
			document.getElementById("scrip3").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==1) {
				i=i-2
			}
			if (w>53 && k==1){
				w=w-2
				var t=setTimeout("kli2()",1);
			}
			if (w==53 && k==1) {
				k = 0
			}
		}
//end
//M-Jacket
			function klo3(){
			document.getElementById("scrip4").style.width=w+"px";
			document.getElementById("scrip4").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==0) {
				i=i+2
			}
			if (w<165 && k==0){
				w=w+2;
				var ti=setTimeout("klo3()",5);
			}
			if (w==165  && k==0) {
				k = 1
			}
		}
		function kli3(){
			document.getElementById("scrip4").style.width=w+"px";
			document.getElementById("scrip4").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==1) {
				i=i-2
			}
			if (w>53 && k==1){
				w=w-2
				var t=setTimeout("kli3()",1);
			}
			if (w==53 && k==1) {
				k = 0
			}
		}
//end
//L-Jacket
				function klo4(){
			document.getElementById("scrip5").style.width=w+"px";
			document.getElementById("scrip5").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==0) {
				i=i+2
			}
			if (w<165 && k==0){
				w=w+2;
				var ti=setTimeout("klo4()",5);
			}
			if (w==165  && k==0) {
				k = 1
			}
		}
		function kli4(){
			document.getElementById("scrip5").style.width=w+"px";
			document.getElementById("scrip5").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==1) {
				i=i-2
			}
			if (w>53 && k==1){
				w=w-2
				var t=setTimeout("kli4()",1);
			}
			if (w==53 && k==1) {
				k = 0
			}
		}
//end
//RushGuard2
			function klo5(){
			document.getElementById("scrip6").style.width=w+"px";
			document.getElementById("scrip6").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==0) {
				i=i+2
			}
			if (w<165 && k==0){
				w=w+2;
				var ti=setTimeout("klo5()",5);
			}
			if (w==165  && k==0) {
				k = 1
			}
		}
		function kli5(){
			document.getElementById("scrip6").style.width=w+"px";
			document.getElementById("scrip6").innerHTML="<p class=\"jk\">"+s.substring(0,(w-53)*s.length/110)+"</p>"
			if (k==1) {
				i=i-2
			}
			if (w>53 && k==1){
				w=w-2
				var t=setTimeout("kli5()",1);
			}
			if (w==53 && k==1) {
				k = 0
			}
		}
//end