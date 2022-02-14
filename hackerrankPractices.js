// function processData(input) {

//Telefon listesinde olanları bulmak ve yazdırmak olmayanlara not found yazmakç
//     //Enter your code here
//     inputArr = input.split("\n");
//     let inputObj = inputArr;
//     let inputValue = inputArr.slice(+inputArr[0] + 1);
  
  
  
//     inputObj = inputArr.slice(1, +inputArr[0] + 1).map((item) => {
//       let obj = {
//         name: item.split(" ")[0],
//         phoneNumber: item.split(" ")[1]
//       }
//       return obj;
  
  
//     });
//     let phoneBook = [];
//     for (let list of inputObj) {
//       phoneBook[list.name] = list.phoneNumber;
//     }
    
//     for (name of inputValue) {
  
//       if (phoneBook[name]) {
  
//         console.log(`${name}=${phoneBook[name]} `)
  
//       } else {
//         console.log("Not found")
//       }
//     }
  
  
  
  
  
  
//   }
  
  
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   _input = "";
//   process.stdin.on("data", function (input) {
//     _input += input;
//   });
  
//   process.stdin.on("end", function () {
//     processData(_input);
//   });
  