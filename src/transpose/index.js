/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  /*   let newArray= []
    for(let i=0; i>array.length; i++) {
        newArray.push([]);
    }
    for(let i=0; i<array.length; i++){
    for (let j=0; j<array.length; j++){
        newArray[j].push(array[i][j]);
    }
    }
    return newArray; */

    let [row] = array

    return row.map((value, column) => array.map(row => row[column]))
}

console.log(transpose([
    [1, 7, 9],
    [2, 3, 5],
]))

module.exports = transpose;
