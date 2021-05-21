function convertFahrToCelsius(c){
    if(Array.isArray(c)){
        console.log(`${JSON.stringify(c)} is not a valid number but a/an Array.`);
        return (`${JSON.stringify(c)} is not a valid number but a/an Array.`);
    }
    else if(typeof(c) === "object" || typeof(c) === "boolean"){
        console.log(`${JSON.stringify(c)} is not a valid number but a/an ${typeof(c)}.`);
        return (`${JSON.stringify(c)} is not a valid number but a/an ${typeof(c)}.`);
    }
    else if(typeof(c) !=="number"){
       if(Number.isNaN(Number(c)) || (Number(c)===0 && c !== "0")){
           console.log(`${JSON.stringify(c)} is not a valid number but a/an ${typeof(c)}.`);
           return (`${JSON.stringify(c)} is not a valid number but a/an ${typeof(c)}.`);
       }
       else{
          let celsius = (c - 32) * (5 / 9);
          celsius = Number(celsius.toFixed(4));
          console.log(celsius);
          return (celsius);
       }
    }
    else{
        let celsius = (c - 32) * (5 / 9);
        celsius = Number(celsius.toFixed(4));
        console.log(celsius);
        return (celsius);
    }
}

convertFahrToCelsius(0)
convertFahrToCelsius(-0)
convertFahrToCelsius("0")
convertFahrToCelsius([1,2,3])
convertFahrToCelsius({temp:0})
convertFahrToCelsius("i love to code")
convertFahrToCelsius("js is hard")
convertFahrToCelsius(true)
convertFahrToCelsius(false)

  //Task Two

let checkYuGiOh = (n) => {
  if ((isNaN(n) || typeof(n)!=="number" && Number(n) === 0) || typeof(n)==="boolean")  {
    var content = JSON.stringify(n);
    return "invalid parameter :"   + (content);
  
  }
  else {
    var arr = Array.from({ length: n }, (_, i) => i + 1);
    var results = [];
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] % 2 === 0) && (arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
        results.push("yu-gi-oh");
      }
      else if ((arr[i] % 2 === 0) && (arr[i] % 3 === 0)) {
        results.push("yu-gi");
      }
      else if ((arr[i] % 2 === 0) && (arr[i] % 5 === 0)) {
        results.push("yu-oh");
      }
      else if ((arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
        results.push("gi-oh");
      }
      else if ((arr[i] % 2 === 0)) {
        results.push("yu")
      }
      else if ((arr[i] % 3 === 0)) {
        results.push("gi")
      }
      else if ((arr[i] % 5 === 0)) {
        results.push("oh")
      }
      else {
        results.push(arr[i])
      }
  }  }  return results
}
console.log(checkYuGiOh(10))
console.log(checkYuGiOh(5))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh("10"))
console.log(checkYuGiOh(3))
console.log(checkYuGiOh(2))
console.log(checkYuGiOh("3"))
console.log(checkYuGiOh("2"))
console.log(checkYuGiOh("fizzbuzz is meh"))
console.log(checkYuGiOh("Can we get a tutorial video on this task"))
console.log(checkYuGiOh("Thank you Zuri"))
console.log(checkYuGiOh(true))
console.log(checkYuGiOh(false))
console.log(checkYuGiOh(" "))
