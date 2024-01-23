        // let ch =60;
        // let eng = 60;
        // let math=59;
        // // if (ch>=60 or eng>=60) and math>=60:
        // //     print("通過考試")
        // if ((ch>=60 || eng>=60) && math>=60){
        //     console.log("通過考試")
        // }else{
        //     console.log("fail~~")
        // }
        //         let email = "winnie@gmail.com";
        //         console.log(email);
        //         console.log(email.length);
        //         console.log(email[0]);
        //         console.log(email[1]);
        //         console.log(email[email.length-1]);
        //         // i++ => i+=1
        //         for(let i=0;i<email.length;i++){
        //             console.log(i,email[i]);
        //         }

        // let z = null;
        // console.log(z);
        // console.log(z + 1);

        // console.log(Math);
        // console.log(Math.PI);

        // 0~1 間浮點數
        // 1~10 間亂數
        // 0~10 randint(0,10)
        // 0~10 randint(0,49)
        // 輸出 10 個亂數
        // for (let i = 0; i < 10; i++) {
        //     // let r = Math.floor(Math.random() * 10);
        //     // let r = Math.floor(Math.random() * 10)+1;
        //     let r = Math.floor(Math.random() * 49)+1;
        //     console.log(r);
        // }
        // 
        // while(true){
        //     let r = Math.floor(Math.random() * 49)+1;
        //     console.log(r);
        //     if(r==49){
        //         break;
        //     }
        // }

        // while (true) {
        //     let r = getRandomInt(1, 49);
        //     console.log(r);
        //     if (r == 49) {
        //         break;
        //     }
        // }
        // 宣告函式
        function getRandomInt(start, end) {
            let x = Math.floor(Math.random() * end) + start;
            return x;
        }

        document.write(Date()+"<hr>");
        // document.write(new Date());

        // 輸出六個號碼道網頁上
        // for(i=0;i<6;i++){
        //     let n=getRandomInt(1, 49)
        //     console.log(n)
        //     // document.write("<h3>第"+(i+1)+"個號碼:"+n+"</h3>");
        //  //使用反引號 ` + ${}
        //     document.write(`<h3>第 ${i+1} 個號碼: ${n} </h3>`);

        // }

        // 陣列(串列)

        // let rows = []
        // for (j = 0; j < 5; j++) {
        //     let numbers = []
        //     for (i = 0; i < 6; i++) {
        //         let n = getRandomInt(1, 49);
        //         console.log(n);
        //         // document.write("<h3>第"+(i+1)+"個號碼:"+n+"</h3>");
        //         //  //使用反引號 ` + ${}
        //         // document.write(`<h3>第 ${i + 1} 個號碼: ${n} </h3>`);
        //         numbers.push(n);
        //     }
        //     console.log(numbers);
        //     rows.push(numbers);
        // }
        // console.log(rows);

        let rows = []
        for (j = 0; j < 5; j++) {
            let numbers = []
            // 內迴圈產生的每組的 六個號碼(不重複)
            while (true) {
                let x = getRandomInt(1, 49);
                // ! ==> not
                //  includes
                if (!numbers.includes(x)) {
                    numbers.push(x);
                }
                if(numbers.length == 6){
                    break;
                }

            }
            // 排序 number.sort(2)
            numbers.sort(compare);

            console.log(numbers);
            rows.push(numbers);
        }
        // 排序的方法
        function compare(a,b){
            return a-b;
        }

        console.log(rows);

        const lottoryE1 = document.querySelector("#lottory");
        for(let i=0;i<rows.length;i++){
            // console.log(rows[i]);
            let result=rows[i].join(" , ");
            console.log(result);
            lottoryE1.innerHTML+=`<h3>第${i+1}組號碼:${result}</h3>`;
            // document.write(`<h3>第${i+1}組號碼:${result}</h3>`);
        }

        // let x = "3.5";
        // document.write(x+"<br>");
        // document.write(Number(x)+"<br>");
        // document.write(parseInt(x)+"<br>");
        // document.write(parseFloat(x)+"<br>");

        let user = {
            name:"winnie",
            email:"winnie@gmail.com",
            password:"123456789",
            height:"168",
            weight:"65"
        }
        console.log(user, typeof(user));
        console.log(user.name,user["name"]);
        
        // 

        console.log(getBMI(user.height,user.weight));
        // document.write(getBMI(user.height,user.weight));
        
        // 計算bmi函式
        function getBMI(height,weight){
            let bmi = weight/(height/100)**2;
            if(isNaN(bmi)){
                return "數值錯誤!";
            }
            return bmi.toFixed(2);
        }
        
        const h1 = document.querySelector("h1");
        

        console.log(h1);
        console.log(lottoryE1);
        // h1.innerText="大樂透";
        h1.innerHTML="<u>大樂透</u>";
        h1.style.color="blue";




        //         // i++ 有前後之分 ++i(先 + , 後輸出 ),  i++ (先輸出,後 +)
        //         let x = 10;
        //         console.log(x++);
        //         console.log(x);
        //         console.log(++x);
        //         console.log(10=="10");
        //         console.log(10==="10");
        // // 型態轉換 Number, String, Booleaan
        //         console.log(String(10)==="10");
        //         console.log(10===Number("10"));

        // let height = prompt("請輸入身高(cm):")
        // let weight = prompt("請輸入體重(kg):")
        // let bmi = weight/(height/100)**2
        // console.log("BMI:"+bmi)
        // document.write("<h2>BMI:"+bmi+"</h2>")

        // let result = "<ul>";
        //     result+="<li>身高:"+height+"</li>";
        //     result+="<li>體重:"+weight+"</li>";
        //     // 使用toFixed約束小數點
        //     result+="<li>BMI:"+bmi.toFixed(2)+"</li>";
        // result+="</ul>"
        // document.write(result)
        // // 使用 let 優於var
        // let x = 30;
        // // 常數宣告
        // const PI =3.1415926;
        // {
        //     let x=20;
        // }
        // // 計算圓面積
        // // let radius=10;
        // let radius = prompt("請輸入半徑:")
        // let area=radius*radius*PI;
        // // 字串 + 數字 (字串串接)
        // let result = "area is : " + area;
        // let y = 20;

        // // print(x+y)
        // // 輸出到log
        // // console.log(x + y, area);
        // /**
        //  多行註解用
        // */
        // console.log(radius,area,result,typeof(result), typeof(radius));
        // // 輸出到網頁
        // document.write(result);
        // document.write("<h2>"+result+"</h2>");
        // //alert
        // // alert(result)