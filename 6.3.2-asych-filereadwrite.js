
const {readFile,writeFile}=require('fs');

readFile('./good-boys-folder/first.txt','utf8',(err,result)=>
{   if(err)
    {   console.log("No u could not read the file that is not existed");
        return;
    }
    const first=result;
    console.log(result);
    readFile('./good-boys-folder/second.txt','utf-8',(err,result)=>
    {   if(err)
        {   console.log("No u could not read the file which not existed");
            return;
        }
        const second=result;
        console.log(result);
        writeFile("./good-boys-folder/result.txt",`The result of both file is ${first} ${second}`,{flag:'a'},
            (err,result)=>
            {   if(err)
                {   console.log(err);
                    return;
                }
            }
        )
    })
})

/*
        Output:
            This is the first file
            This is the second file
        
        Explanation:
            The difference between synchrounous and asych file is that sych does not actually provide the blockage for example in the above example
            look at the code if the first file is not read then second file can not. Like we can control the flow execution of program it is actually
            use full assume that u did n't uploaded the file and u can use the website is it very bad right so it is better to use the asynch.

            Note:-------   As it is in the github assume the file is present 

            even the write is also included again u need to use err that thing and it is bit similar to the write function in synch
             
            zueeeeeeeeeeeeeeeeee........ finally end of the basics
*/
