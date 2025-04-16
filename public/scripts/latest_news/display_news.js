import { loadCSV } from "../global/parse_csv.js";

const path = "data/news.csv"

async function displayData(){
    
        const list = document.getElementById("news");
        const res = await loadCSV(path);

        
        let l = "";
        if (!list){
          
          return;
        }
        if (!res){

            return;

        }
        if (!(res[0].hasOwnProperty("DATE") && res[0].hasOwnProperty("DESCRIPTION"))){

            list.innerHTML = "<li>Nothing to see.";
            return;
        }
        
        for(let i = 1; i < res.length; i++){

          l += `<li>${res[i]["DATE"]}</li><ul><li>${res[i]["DESCRIPTION"]}</li></ul>`;

        }
        list.innerHTML = l;
        
}
displayData();



