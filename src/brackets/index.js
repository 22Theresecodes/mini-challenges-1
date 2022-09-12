/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {}

module.exports = isValid;
function isValid(str) {
    const stack = [];
    for (let s of str) {
    if (s === "{" || s === "[" || s === "(") {
      stack.push(s)
     } else if (s === "}" && stack.pop() !== "{") {
         return "inValid";
     } else if (s === "]" && stack.pop() !== "[") {
          return "inValid";
       } else if (s === ")" && stack.pop() !== "(") {
          return "inValid";
        }
    }
      return stack.length > 0 ? "inValid" : "valid";
     }

     console.log(isValid("(]"))