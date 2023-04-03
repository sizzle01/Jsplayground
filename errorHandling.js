function addTwoMums(a, b){
    try{
        if (typeof a != 'number'){
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof b != 'number'){
            throw new ReferenceError('the Second argument is not a number')
        }else{
            console.log(a+b)
        }
       
    }catch(err){
        console.log("Error!", err)
    }

}

addTwoMums(5, 5)
console.log("it still works")