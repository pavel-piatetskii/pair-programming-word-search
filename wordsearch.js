const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;
    const transposed = transpose(letters);  
    if (!joinAndCheck(letters, word) && !joinAndCheck(transposed, word)) {
        return false;
    } else {
        return true;
    }
}

const joinAndCheck = function(letters, word) {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true    
    }
    return false;
}

module.exports = wordSearch

//Transpose Function
const transpose = function(matrix) {
    // Put your solution here
    for (let i= 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j ++) {
        let tmp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = tmp;
      }
    }
   return matrix[0].map((col, i) => matrix.map(row => row[i]))
  };
  
 