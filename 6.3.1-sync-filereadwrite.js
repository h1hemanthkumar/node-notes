
const {readFileSync,writeFileSync}=require('fs');

const firstresult=readFileSync("./good-boys-folder/first.txt",'utf-8')
const secondresult=readFileSync("./good-boys-folder/second.txt",'utf-8')

console.log(firstresult,secondresult)

writeFileSync("./good-boys-folder/result.txt",`The result of both file is ${firstresult} ${secondresult}`)

/* Output:
        it console the things that is in first result and the second result the respective file and the write the content that we wrote in the quotes

        Problem with above code 
                The problem with above code is that what ever there is in the folder that we provided will be erased and then the text written will be written
                to avoid that we need to use flag for example look at the bellow code
*/

writeFileSync("./good-boys-folder/result.txt",`The result of both file is ${firstresult} ${secondresult}`,{flag:'a'})

/* output:
        This don't erase anything if will write from the next letter it just continue try to understand bro

        Make assumption with the file because can't create everything
*/