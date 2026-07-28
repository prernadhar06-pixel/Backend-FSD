// Promises for async
// JS is single-threaded

const promiseOne = new Promise((resolve, reject) => {
    console.log("Promise task 1");
    resolve("Promise passed by using resolve");
    let msg = true ;
    if(!msg){
        console.log("message using promises failed")
    }
});

promiseOne
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });