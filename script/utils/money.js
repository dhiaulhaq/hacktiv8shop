export function formatCurrency(priceCents) {
    //  some mumnber like 5 it wont round number properly
    //  so we round the priceCents first so the method has no issues with any rounding

    return (Math.round(priceCents) / 100).toFixed(2);
}

export default formatCurrency;