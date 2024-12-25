function stringChop(str, size) {
	if(!str)
	{
		return [];
	}
	let chunks = [];
  for (let i = 0; i < str.length; i += size){
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
	
  // your code here
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
