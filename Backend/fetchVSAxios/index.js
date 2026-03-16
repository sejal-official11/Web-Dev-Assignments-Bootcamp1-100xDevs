
const axios = require('axios');

// function main() {

//     fetch("https://dummyjson.com/todos")
//     .then(async response => {
//         const json =  await response.json();
//         console.log(json.todos.length);
//     })

// }

//change req headers
// send body


// async function main() {

//     const response = await fetch("https://www.postb.in/1773631962860-9484627137426", {
//         method: "POST",
//         body : {

//         },
//      headers: {
//         Authorization : "Bearer 345"
//      }
//     });
//     const textualData = await response.text();;
//     console.log(textualData);
// }



async function main() {
    const response = await axios.post("https://httpdump.app/dumps/bb753fcd-8ea6-4d7b-8b40-ddab97d5f2ba", {
        username: "Sejal",
        password: "987654"
    }, {
         headers: {
            "Authorization": "Bearer 345"
        }
    });
    console.log(response.data);
    }
main();