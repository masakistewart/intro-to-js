var a, b, c;
a = " bottles of beer on the wall, ";
b = " bottles of beer, ";
c = " take one down pass it around ";

for (var i = 99; i > 0 ; i--) {
    if(i === 1){
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer, take it down pass it around " + (i - 1) + " bottles of beer the wall.\n");
    } else {
	    console.log(i + a + i + b + c + (i - 1) + " beer on the wall,");
    }
}