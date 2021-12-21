
function StringPeriods(str) { 
  if(str.length === 1)
    return -1

  let i = 2
  let N = str.length
  let curLength = 0
  let curStr = ""

  while(i < N){
    if(N % i === 0){
      let xStr = str.substring(0, i)
      var re = new RegExp(xStr, 'g')
      let strCount = (str.match(re)||[]).length

      if(strCount > 1){
        if(xStr.length > curLength){
          curStr = xStr
          curLength = xStr.length
        }
      }
    }
    i++
  }
  return curStr===""?-1:curStr
}

  console.log(StringPeriods("affedaaffed"))