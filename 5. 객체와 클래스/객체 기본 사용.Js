const food = {
  name: '햄버거',
  price : 5000,
  vegan : false
}

console.log(
  food['price']
)

const food2 = {}
food2.name = '샐러드'
food2.price = '6000';
food2['vegan'] = false;

console.log(food, food2)


const obj = {
  1: '하나',
  'ab-cd' : "ABCD",
  's p a c e' : "Space"
}

console.log(
  obj[1],
  obj['ab-cd']
)