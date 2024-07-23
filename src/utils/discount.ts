export const discount = (value: string | undefined) => {

    const number = parseFloat(value) * 0.90
    return number.toFixed(2).toString().replace('.', ',')
}