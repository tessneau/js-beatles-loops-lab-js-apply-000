// add solution here

function theBeatlesPlay(musicians,instruments) {
  var whoPlaysWhat=[]
  
  for (var count = 0; count < musicians.length; count++) {
    whoPlaysWhat[count] = `${musicians[count]} plays ${instruments[count]}`
  }
  
  return whoPlaysWhat
}

function johnLennonFacts(facts) {
  var count = 0, aboutJohn = []
  
  while ( count < facts.length ) {
    aboutJohn[count] = facts[count] + "!!!"
    
    count++
  }
  
  return aboutJohn
}
