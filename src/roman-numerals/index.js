/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

const romanVariable = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}



// finds decimal value of a given roman numeral
function romanToDecimal(str) 
{
    // initialize result
    let result = 0;
    // Loop through elements of str
    for (i=0; i<str.length; i++)
    {
        if (str[i] == 'I' && str[i+1] == 'V') {
            result += 4
            i++
        } else if (str[i]=='I' && str[i+1] =='X') {
            result += 9
            i++
        } else if (str[i]== 'X' && str[i+1] == 'L') {
            result += 40
            i++
        } else if (str[i]== 'X' && str[i+1] == 'C') {
            result += 90
            i++
        } else if (str[i]== 'C' && str[i+1] == 'D') {
            result += 400
            i++
        } else if (str[i] == 'C' && str[i+1] == 'M'){
            result += 900
            i++
        } else {
            result += romanVariable[str[i]]
        }

    }
    return result
}
console.log(romanToDecimal('XLV'))





module.exports = romanToDecimal;
