const https=require('http');

const server=https.createServer((req,res)=>
{   res.write('hello bro how are you');
    res.end();
})

server.listen(2000);

/*
    output: hello bro how are you end

    write() =====> this is basically write the details that we written will be on the page
    end()   =====> this is basically end that means u could not write anything after it
 */