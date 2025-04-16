import { loadCSV } from "../global/parse_csv.js";

const path = "data/news.csv"

async function displayData(){
    
        const list = document.getElementById("news");
        const res = await loadCSV(path);

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
        


        list.innerHTML = `<li>${res[1]["DATE"]}</li><ul><li>${res[1]["DESCRIPTION"]}</li></ul>`;

        
       
        
}
displayData();



