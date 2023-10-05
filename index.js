// making a program to reverse a string using recursion

function reverseString(str){
    if(str.length==0){
        return "";
    }
    return str[str.length-1]+reverseString(str.slice(0,str.length-1));

}

console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("hello world"));