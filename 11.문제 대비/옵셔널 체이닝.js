// let undefObj;
// console.log(undefObj.x);

// let undefObj1 = null;
// console.log(undefObj1.x);


let undef = undefined;

console.log(
  undef?.x,
  undef?.['x'],
  undef?.[1],
  {}.func?.()
)

const objs = [
  { func () { console.log(1) } },
  {},
  { func () { console.log(2) } },
  {},
  { func () { console.log(3) } },
]

objs.forEach(o => o.func1?.());