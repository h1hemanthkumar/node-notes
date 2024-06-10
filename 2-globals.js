/* GLOBALS 
    1) __dirname- it is used to provide the name of the current directory
*/

console.log(__dirname);

/*  output:
        C:\Users\heman\OneDrive\Desktop\node js and express js 2
*/

//  2)--filename -it is used to provide the name of the current file

console.log(__filename);

/*  output:
        C:\Users\heman\OneDrive\Desktop\node js and express js 2\app.js
 */

/*   3) require -it is function to use the module
     4) module -it provide the information about the module or current module
     5) process -it provide the information about the evn in which the program is being executed
     6) settimeout- it is the function that executed after a few secons
     7) setinterval -it is the function that executed repeatedly for a break of few second
*/
//6) setTimeout()

setTimeout(()=>{console.log("hello guys")},2000);

/* output:
        After two seconds it prints hello guys
*/

//7) setInterval()
setInterval(()=>{console.log("hello guys")},2000);

/* output
        After two seconds it repeatedly prints hello guys
*/
