// bai1 nhap vao 1 chuoi so roi xap sep tu be toi lon 
// function number()
// {
//     let input = prompt(" nhap vao 1 day so ");
//     for(let i = 0 ; i<input.length ; i++)
//     {
//         for(let j = 1 ; j <input.length ; j++)
//         {
//             if(input[i]<input[j])
//             {
//             let temp =input[i];
//             input[i] = input[j];
//            input[j] = temp;
//             }
//         }
//     }
// }
// console.log(number());


//bai 2 :Viết một hàm nhận một chuỗi làm đối số và trả về độ dài của chuỗi.

// function change()
// {
//     let input = prompt("nhap vao 1 chuoi ky tu ")
//     let arr = +input[0].length
//     for(let i = 0; i < input.length; i++ )
//        {
//                 return input.length
//         }
// }
// console.log(change());
// console.log(`do dai chuoi ky tu bang ${input}`);



//bai4
// function dao(){
//     let input = prompt("nhap vao chuoi ky tu ")
//     let arrReverse = [];
//     for(let i = input.length - 1 ; i>=0; i++)
//     {
//         arrReverse.push(input[i]);

//     }
// }
// console.log(dao());

//bai 3 :Viết một hàm nhận một mảng các chuỗi làm đối số và trả về mảng mới chứa các chuỗi viết hoa.
// function inhoa(){
//     let input = prompt("nhap vao chuoi ky tu thuong")
//     let a = " ";
//     for(let i = 0; i<input.length; i++)
//     {
//         a += input.toUpperCase();
//     }
// }
// console.log(inhoa());


//bai 5 Viết một hàm nhận một mảng các số làm đối số và trả về mảng mới chỉ chứa các số nguyên tố.

function element()
{
    let input = prompt("nhap vao 1 day so duoc cach nhau boi dau " ,"")
    let arrList = +input.split(" , ");
    let check = true;

    if(input < 2)
    {
        check = false;
    }
    for(let i = 2; i< input.length ; i++  )
    {
        if(input % 2 ===0)
            {
                check = false;
                break;
            }
    }
    console.log(`cac so nguyen to la ${input}`);
}
console.log(element());
