// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let score = 0;
    let words = x.split(' ')
    let highestWord = [];
    
    for(let i = 0; i < words.length; i++) {
     let lettersPerWord =  words[i].split('')
     let newScore = 0;
      
      lettersPerWord.forEach(item => {
        newScore += item.charCodeAt(0) - 97  + 1
  
        if(score > newScore) {
          score = score
        } else if(score < newScore) {
          score = newScore
    highestWord.push(words[i])
        }else if(score === newScore) {
    highestWord.push(highestWord[highestWord.length-1])
        }
      })
    }
        return highestWord[highestWord.length-1]
    
  }