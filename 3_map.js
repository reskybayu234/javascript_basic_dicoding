const myMap = new Map([
    ['1','string'],
    [1,'integer']
]);

console.log(myMap);
/*
{
    '1' => 'string',
    1 => 'integer'
}
*/
console.log(typeof(myMap));
/* Object */

// ============= get ==============
const one = myMap.get('1');
console.log(one);