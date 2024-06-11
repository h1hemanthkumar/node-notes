
const {readFileSync}=require('fs');

const firstresult=readFileSync("./6.3.1-folder-for-learn/6.3.1-file-for-learn.txt",'utf-8')
const secondresult=readFileSync("./6.3.1-folder-for-learn/6.3.1-file-for-learn2.txt",'utf-8')

console.log(firstresult,secondresult)

/* Output:
        This is the first file This is second file
  Explanation:
        In file module there are two types 1) synchronous 2) asynchrounous 

        Sychronous:
                In this synchrounous we can read from the file and as well as write the exampel for the reading to the file is as shown above
        
        process if there is folder we need to provide the folder name first and then the file name and also the utf-8 this is basically remove the buffer 
        and also it may be thought it as converting the binary or some gibrees language to the respective thing that is in the file
*/