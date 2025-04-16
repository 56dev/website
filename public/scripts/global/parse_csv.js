


export async function loadCSV(path){

    try {

        const response = await fetch(path);
        if (!response.ok){
            throw new Error("failed to fetch file");
        }
        const text = await response.text();
        const data = parseCSV(text);
        return data;

    }catch (error){
        console.log(`woops! ${error}`);
    }
    
}


export function parseCSV(csvText) {

let delim = ","
const lines = csvText.trim().split('\n');
let header_index = 0;
if (lines[0].substring(0, 4) == "sep="){
    delim = lines[0][4];
    header_index = 1;
}
const headers = lines[header_index].split(delim).map(header => header.trim());
let result = [];

for(let i = header_index + 1; i < lines.length; i++){

    const values = lines[i].split(delim).map(value => value.trim());
    const obj = {};
    headers.forEach((header, index) => {
        obj[header] = values[index] || '';

    })

    result.push(obj);

}

return result;


}



