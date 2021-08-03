var result='';

function clear_data(){
    document.getElementById("input_value1").value = "";
    document.getElementById("input_value2").value = "";
    var result='';
}

function set_on_box(btn_val){
        document.getElementById("input_value1").value += btn_val;
        mainf();
        document.getElementById("input_value2").value = result;
}

function insert_sign(sign_val){
      let last_sign = (document.getElementById("input_value1").value).charAt((document.getElementById("input_value1").value).length-1)
      if(last_sign == '+' || last_sign == '-' || last_sign == 'x' || last_sign == '÷' || last_sign == '%') {
        remove_one_char();
      }
        document.getElementById("input_value1").value += sign_val;
}

function press_equal(){
    document.getElementById("input_value1").value =    document.getElementById("input_value2").value;
    document.getElementById("input_value2").value = '';
}

function remove_one_char(){
        document.getElementById("input_value1").value = (document.getElementById("input_value1").value).substr(0, (document.getElementById("input_value1").value).length-1);
        if(document.getElementById("input_value1").value == '' && document.getElementById("input_value2").value != ''){
            document.getElementById("input_value1").value = document.getElementById("input_value2").value;
            document.getElementById("input_value2").value = '';
        }
}


var strArr = [];
function split_str_into_array(v1){
    
    var bl = '';
    for(let i=0;i< v1.length; i++){
        if(v1.charAt(i)=='%'||v1.charAt(i)=='÷'||v1.charAt(i)=='+'||v1.charAt(i)=='-'||v1.charAt(i)=='x'){
            if(bl!=''){ strArr.push(bl);}
            bl = '';
            if(v1.charAt(i)=='÷'){
                strArr.push('/');
            }
            else if(v1.charAt(i)=='x'){
                strArr.push('*');
            }
            else{
                strArr.push(v1.charAt(i));
            }
        }
        else{
            bl += v1.charAt(i);
        }
    }
    if(bl!=''){ strArr.push(bl);}
}


function mainf(){
    var v1 = document.getElementById("input_value1").value;
    var v2 = document.getElementById("input_value2").value;
    result='';
    strArr = [];
    split_str_into_array(v1);

    for(let i in strArr){
        
        if(strArr[i] =='/'||strArr[i] =='-'||strArr[i] =='+'||strArr[i] =='*'||strArr[i] =='%'){      }
        else{
            
            switch(t){
                case 'Binary':
                    strArr[i] = (btd(strArr[i])).toString();
                    break;
                case 'Octal':
                    strArr[i] = (otd(strArr[i])).toString();
                    break;
                case 'Decimal':
                    break;
                case 'Hexa':
                    strArr[i] = (htd(strArr[i])).toString();
                    break;
                default:
                    result = "Select Type of Number";
            }

        }
    }

    switch(t){
        case 'Binary':
            
            result = dtb(eval(strArr.join('').toString()));

            break;
        case 'Octal':
            result = dto(eval(strArr.join('').toString()));
            break;
        case 'Decimal':
            result = eval(strArr.join('').toString());
            break;
        case 'Hexa':
            result = dth(eval(strArr.join('').toString()));                    
            break;
        default:
            result = "Select Type of Number";
    }

    console.log(strArr);
    // document.getElementById("input_value1").value = result;
}    


var t='';
function bin(){
    t = 'Binary';
    clear_data();
    document.getElementById("bin").setAttribute("style", "border: 2px solid lightgreen");
    document.getElementById("dec").setAttribute("style", "border: 1px solid gray");
    document.getElementById("oct").setAttribute("style", "border: 1px solid gray");
    document.getElementById("hex").setAttribute("style", "border: 1px solid gray");  
}
function oct(){
    t = 'Octal';
    clear_data();
    document.getElementById("oct").setAttribute("style", "border: 2px solid lightgreen");
    document.getElementById("dec").setAttribute("style", "border: 1px solid gray");
    document.getElementById("bin").setAttribute("style", "border: 1px solid gray");
    document.getElementById("hex").setAttribute("style", "border: 1px solid gray");  
}
function dec(){
    t = 'Decimal';
    clear_data();
    document.getElementById("dec").setAttribute("style", "border: 2px solid lightgreen");
    document.getElementById("bin").setAttribute("style", "border: 1px solid gray");
    document.getElementById("oct").setAttribute("style", "border: 1px solid gray");
    document.getElementById("hex").setAttribute("style", "border: 1px solid gray");  
}
function hex(){
    t = 'Hexa';
    clear_data();
    document.getElementById("hex").setAttribute("style", "border: 2px solid lightgreen");
    document.getElementById("dec").setAttribute("style", "border: 1px solid gray");
    document.getElementById("oct").setAttribute("style", "border: 1px solid gray");
    document.getElementById("bin").setAttribute("style", "border: 1px solid gray");  
}


function dtb(a){
    let minus = false;
    if(parseInt(a)<0){   a*=-1;   minus = true;   }
    if(parseInt(a)==0){ return 0}

    console.log("result are = ",a);
    var remain='';
    a = parseInt(a);
    while(a/2>0){
        remain += (a%2).toString();
        a = parseInt(a/2)
    }
    
    if (minus){ return '-' + remain.split('').reverse().join('');    }
    else{   return remain.split('').reverse().join('');    }
}


function dto(a){
    let minus = false;
    if(parseInt(a)<0){   a*=-1;   minus = true;   }
    if(parseInt(a)==0){ return 0}

    var remain='';
    a = parseInt(a);
    while(a/8>0){
        remain += (a%8).toString();
        a = parseInt(a/8)
    }

    if (minus){ return '-' + remain.split('').reverse().join('');    }
    else{   return remain.split('').reverse().join('');    }
}


function dth(a){
    let minus = false;
    if(parseInt(a)<0){   a*=-1;   minus = true;   }
    if(parseInt(a)==0){ return 0}

    var remain='';
    a = parseInt(a);
    b = a;
    res = '';
    while(a/16>0){
        rem = a%16;
        if(rem == 10){
            remain += 'A';
        }
        else if(rem == 11){
            remain += 'B';
        }
        else if(rem == 12){
            remain += 'C';
        }
        else if(rem == 13){
            remain += 'D';
        }
        else if(rem == 14){
            remain += 'E';
        }
        else if(rem == 15){
            remain += 'F';
        }
        else{
            remain += (a%16).toString();
        }

        a = parseInt(a/16)
    }
    if(parseInt(b)>15){
        res = remain.split('').reverse().join('');
    }
    else{
        res = remain;
    }
    
    if (minus){ return '-' + res;    }
    else{   return res;    }
}


function btd(a){
    let n=1;
    res=0;
    for(let i=a.length-1; i>=0; i--){
        res+= (parseInt(a.charAt(i)))*n;
        n=n*2;
    }
    return res;
}


function otd(a){
    a =  a.toString();
    po = 0;
    res=0;
    for(let i=a.length-1; i>=0; i--){
        res += parseInt(a.charAt(i)) * (8**po)
        po+=1;
    }
    return res;
}


function htd(a){
    a =  a.toString();
    let po = 0;
    res=0;
    
    for(let i=a.length-1; i>=0; i--){
        if(a.charAt(i) == 'A'){
            res += parseInt(10 * (16**po));
        }
        else if(a.charAt(i) == 'B'){
            res += parseInt(11 * (16**po));
        }
        
        else if(a.charAt(i) == 'C'){
            res += parseInt(12 * (16**po));
        }
        else if(a.charAt(i) == 'D'){
            res += parseInt(13 * (16**po));
        }
        else if(a.charAt(i) == 'E'){
            res += parseInt(14 * (16**po));
        }
        else if(a.charAt(i) == 'F'){
            res += parseInt(15 * (16**po));
        }
        else{
            res += parseInt(a.charAt(i)) * (16**po);
        }
        po+=1;
    }
    return res;
}

