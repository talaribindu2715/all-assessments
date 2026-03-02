function formatValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(Math.round(value));
    }
}
formatValue("typescript");
formatValue(50.68);
