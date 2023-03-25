//  A function to choose a letter from a string of words or word

function letterFinder(word, match){
    
      for(var i = 0; i < word.length; i++){
        if(match === word[i]){
            console.log(i)
        } else {
            console.log(console.log('---No match found at', i))
        }
       


    }

}

letterFinder("James", "x");
