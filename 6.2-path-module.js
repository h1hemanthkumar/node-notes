const path=require("path");

console.log(path.sep);// This is basically used to separate the path file like if the name of the folder and then the file and then path like that using /

const filename=path.join('/good-boys-folder/','good-things','game-pro')

console.log(filename);
/* output:
    \good-boys-folder\mad-man\game-pro

    Explanation:
        This is used to join theh path that we given for example in the above output the good-boys-folder is the folder and the subfolder in that is mad-man
        and the file is game-pro this is basically is  used to join that together provide the path 
*/

const basename_of_folder=path.basename(filename)
console.log(basename_of_folder)
/* output:
        game-pro
    explanation:
        this is used to provide the base path of the folder or the link easy bro
*/

