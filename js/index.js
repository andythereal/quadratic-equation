const a = Number(prompt('Input A (e.g. 5, -2, 15 etc.)'));
if (a == 0) {
    alert('(A) must not be 0 ! Press "Yes" and then refresh the page (press F5)')
}
else {
    const b = Number(prompt('Input B (e.g. 5, -2, 15 etc.)'));
    const c = Number(prompt('Input C (e.g. 5, -2, 15 etc.)'));
    const disk = b * b - 4 * a * c;
    if (disk > 0) {
        const x1 = (-1 * b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
        const x2 = (-1 * b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;
        document.write('<br>' + 'Your Equation: ' + a + 'x^2 + ' + b + 'x + ' + c + ' = 0');
        document.write('<br>' + '<br>' + 'Result: x1 = ' + x1 + '<br>' + 'Result: x2 = ' + x2 + '<br>');
    }
    else if (disk == 0) {
        const x = (-1 * b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
        document.write('<br>' + 'Your Equation: ' + a + 'x^2 + ' + b + 'x + ' + c + ' = 0');
        document.write('<br>' + '<br>' + 'Result: x1 = ' + x + '<br>');
    }
    else {
        document.write('<br>' + 'Your Equation: ' + a + 'x^2 + ' + b + 'x + ' + c + ' = 0');
        document.write('<br>' + '<br>' + 'This equation has no real solution' + '<br>' + '<br>');
    }
}
