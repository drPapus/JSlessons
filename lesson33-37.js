function br() {
    document.write('<br>');
}

let i = 1;

while (i <= 5) {
    document.write(i + '<br>');
    i++;
}

let count = 1;

while (count <= 100) {
    document.write(count);
    count++;
}

let k = 11;

br();

while (k <= 33) {
    document.write(k);
    k++;
}

br();

let j = 1;

while (j <= 100) {
    if (j % 2 == 0) {
        document.write(j);
    }
    j++;
}

br();

let c = 1;

while (c <= 99) {
    if (c % 2 !== 0) {
        document.write(c);
    }
    c++;
}

br();

let d = 30;

while (d >= 0) {
    document.write(d);
    d--;
}

br();

for(e = 1; e <= 100; e++) {
    if (e % 2 !== 0) {
        document.write(e);
    }

}

br();

for(u = 100; u > 0; u--) {
    if (u % 2 == 0) {
        document.write(u);
    }

}