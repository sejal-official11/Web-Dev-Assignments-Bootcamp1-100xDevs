// // // const fs = require("fs");

// // // fs.readFile("a.txt", "utf-8", function(err, data) {
// // //     if(err) {
// // //         console.log("error while reading file");
// // //     }
// // //     else {
// // //         console.log(data);
// // //     }
// // // })



// // // const p = new Promise((resolve, reject) => resolve);


// // // console.log(p);




// // //create a promisified vrsion of fs.readFile, fs.writeFile, setTimeout




// // function fsReadFilePromise(fileName, encoding) {
// //     return new Promise(function(resolve, reject) {
// //         fs.readFile(fileName, encoding, function(err, data) {
// //             if(err) {
// //                 reject(err);
// //             }
// //             else {
// //                 resolve(data);
// //             }
// //         })
// //     });
// // }


// // fsReadFilePromise("a.txt", "utf-8")
// //   .then(function(data) {
// //     console.log(data);
// //   })
// //   .catch(function(err) {
// //     console.log("Error while reading file");
// //   })














// //   function setTimeoutPromisified(delay) {
// //       return new Promise(function(resolve, reject) {
// //         setTimeout(function() {
// //             resolve()
// //         }, delay)
// //       })
// //   }



// //   setTimeoutPromisified(10000)
// //   .then(function(){
// //      console.log("10 second has passed");
// //   })

















// // function fsReadAndWriteFilePromisified(filePath, encoding) {
// //     return newPeomise(function(resolve, reject) {
        
// //     })
// // }















// // function readFilePromisified(filepath, encoding, ){

// // }















// // async based call

// const fs = require("fs");


// let contents = fs.readFileSync("a.txt", "utf-8");
// const trimmedContents = contents.trim();
// fs.writeFileSync('a.txt', trimmedContents);




// for(let i = 0; i < 100; i++) {
//     console.log("Hi");
// }




// // promisified based call

// function cleanFile(filePath) {
//     fs.readFile()
// }



// read file asyncronously, callback based



// const fs = require('fs');

// function cleanFile(filePath) {
//  fs.readFile('a.txt', 'utf-8', function(err, contents) {
//     const trimmedContents = contents.trim();
//     fs.writeFile('a.txt', trimmedContents, function() {
//         cb();
//     })
// })
// }


// cleanFile('a.txt', function() {
//     console.log('done cleaning a.txt');
// });
















// clean file  promisified



const fs = require('fs');

function cleanFile(filePath) {

    return new Promise(function(resolve, reject) {

        fs.readFile(filePath, 'utf-8', function(err, contents) {

            if(err) {
                console.log("Error while reading file");
            }
            else {
                const trimmedContents = contents.trim();
                fs.writeFile('a.txt', trimmedContents, function(err) {
                    if(err) {
                        reject();
                    }
                    else {
                        resolve();
                    }
                } )
            }
        })
    })
}


// cleanFile('a.txt')
// .then(function() {
//     console.log("file has been cleared");
// })
// .catch(function() {
//     console.log("Error while cleaning the file");

// })



async function main(){

  try {
    await cleanFile('a.txt')
    console.log("Done");
  }
  catch(e) {
    console.log("Error while reading the file");
  }


}
































