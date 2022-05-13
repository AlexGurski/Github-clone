const roundFollower = (count) =>{
    if (count>1000){
        return`${Math.floor(count/100)/10}k`
    } else
        return count
}

export {roundFollower}