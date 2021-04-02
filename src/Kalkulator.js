var bil1;
var bil2;
var hasil;
var opr;;
var opr_seleksi = false;
function btn(angka) {
	var display = document.getElementsById("output").value=0;
	if (display == "0") {
		display = angka;
	}else
	{
		display += angka;
	}
	document.getElementsById("output").value = "0";
}

function clr() {
	document.getElementsById("output").value = "0";
	bil1 = 0;
	bil2 = 0;
	opr_seleksi = false;
}

function koma() {
	var display = document.getElementsById("output").value;
	if (display.includes(".")==false) {
		display += ".";
	}
	document.getElementsById("output").value = display;
}

function btn_opr(o) {
	opr_seleksi = true;
	bil1 = parseFloat(document.getElementsById("output").value);
	opr = o;
	document.getElementsById("output").value="0";
}

function hitung() {
	if (opr_seleksi == true) {
		bil2 = parseFloat(document.getElementsById("output").value);
		switch (opr){
			case 1 :
				hasil = bil * bil2;
				document.getElementsById("output").value = hasil;
				break;
			case 2 :
				hasil = bil / bil2;
				document.getElementsById("output").value = hasil;
				break;
			case 3 :
				hasil = bil - bil2;
				document.getElementsById("output").value = hasil;
				break;
			case 4 :
				hasil = bil + bil2;
				document.getElementsById("output").value = hasil;
				break;
		}
		opr_seleksi = false;
		hasil = 0;
		bil1 = 0;
		bil2 = 0;
	}
}