const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (item) {
   // console.log(item);
    
})

coding.forEach ( (item) => {
   // console.log(item);
    
})

function printMe(item){
  //  console.log(item);
    
}

coding.forEach(printMe)


coding.forEach( (item, index, arr) =>{
   // console.log(item, index, arr);
    
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "pyhton",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )