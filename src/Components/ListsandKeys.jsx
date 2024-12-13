//Lists and Keys: use.map()to render lists of items, and always include a unique key for each item in the list for efficient rendering.

const items =['apple', 'banana', 'cherry'];
const listItems = items.map((item,index)=> <li key={index}>{item}</li>)