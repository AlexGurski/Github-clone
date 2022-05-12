const roundFollower = (count) =>{
    if (count>1000){
        return`${Math.floor(count/100)/10}k`
    } else
        return count
}

const roundRepos = (count) =>{
   return Math.ceil(count/100)
}

export {roundFollower, roundRepos}