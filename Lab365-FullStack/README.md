/\*
async function search () {
const response = await fetch('https://rickandmortyapi.com/api/character/215')
const data = await response.json()
console.log(data)
document.getElementById('name').innerHTML = data?.name
document.getElementById('status').innerHTML = data?.status

}
search() \*/

setInterval(()=>{

const d2 = '2023-02-27';
const diffInMs = new Date(d2) - new Date()
const diffInDays = diffInMs / (1000*60*60\*24);

if (diffInMs>0) {
console.log(`faltam ${diffInDays
