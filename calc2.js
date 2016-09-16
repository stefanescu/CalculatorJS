		
	
		function run1() {document.calc.getElementById("foo").value = "1"; }
		function run2() {document.calc.output.value += "2";}
		function run3() {document.calc.output.value += "3";}
		function run4() {document.calc.output.value += "4";}
		function run5() {document.calc.output.value += "5";}
		function run6() {document.calc.output.value += "6";}
		function run7() {document.calc.output.value += "7";}
		function run8() {document.calc.output.value += "8";}
		function run9() {document.calc.output.value += "9";}
		function run0() {document.calc.output.value += "0";}
		
		function runPlus () {document.calc.output.value += "+";}
		function runMinus () {document.calc.output.value += "-";}
		function runMultiply () {document.calc.output.value += "*";}
		function runDivide () {document.calc.output.value += "/";}
		function runPoint () {document.calc.output.value += ".";}
		
		function evaluate () {
		var endResult = eval(document.calc.output.value);
		document.calc.output.value = endResult;
		}	
		function clearScreen () {
			document.calc.output.value = "0";
		}
		