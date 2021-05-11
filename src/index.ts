const main = () => {
    const numberOne: number = 5;
    const numberTwo: number = 7;
    const sum = numberOne + numberTwo;
    const element: HTMLElement = document.getElementById("value");
    element.innerHTML = sum.toString();
}

main();