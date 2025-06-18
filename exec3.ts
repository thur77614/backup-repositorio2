const readline= require("readline-sync");

let n1:number = parseFloat(readline.question("Primeiro numero:"));
let n2:number = parseFloat(readline.question("Segundo numero:"));
let Op: string = readline.question("Sua operacao (+,-,*,/)")

if (Op == "+"){
    console.log (n1 + n2)
}
if (Op == "-")
    {console.log  (n1 - n2)
}
if (Op == "*")
    {console.log ( n1 * n2 )
}
if (Op == "/") 
    {console.log ( n1 / n2 )
}