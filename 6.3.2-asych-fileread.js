
const {readFile}=require('fs');

readFile('./good-boys-folder/first.txt','utf8',(err,result)=>
{   if(err)
    {   console.log("No u could not read the file that is not existed");
        return;
    }
    console.log(result);
    readFile('./good-boys-folder/second.txt','utf-8',(err,result)=>
    {   if(err)
        {   console.log("No u could not read the file which not existed");
            return;
        }
        console.log(result);
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
*/
