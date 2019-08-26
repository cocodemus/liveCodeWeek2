function addTitle (person1, person2, person3, person4) {
 var mr='Mr.'

return mr+' '+person1+','+' '+mr+' '+person2+','+' '+mr+' '+person3+','+' '+mr+' '+person4
}
console.log(addTitle('asep', 'joko', 'indro', 'kasino'))

function changeSpaceWith (str, to){
  return str.split(" ").join(to)
}

console.log(changeSpaceWith('Cristiano Ronaldo','+'))

function cutString (str){
  return str.slice(0,6)
}

console.log(cutString('Lionel Messi'))