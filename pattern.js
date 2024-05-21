pattern = (num) => {
    var string = ""
    for (var r = 1; r <= num; r++) {
        for (var c = 1; c <= r; c++){
          
            string +="*"
        }
        string +="\n"
    }

return string
}
// console.log(pattern(20));
// pattern2 = (num) => {
//     var s = ""
//     for (var r = 5; r >= num; r--) {
//         for (var c = 1; c <= num; c++){
          
//             s+="*"
//         }
//         s +="\n"
//     }

// return s
// }
// console.log(pattern2(4));




//////////////Square 
p = (num)=>{
    var str = ""
    for (var r = 1; r <= num; r++) {
        for (var c = 1; c <= num; c++){
          
            str +="*"
        }
        str +="\n"
    }
    return str
}
console.log(p(9));