let input= document.getElementById('input');
let answer= document.getElementById('answer');
let buttons= Array.from(document.getElementsByClassName('button'));
let span= document.getElementsByTagName('span');
buttons.map(button => {

    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                input.innerText = '';
                answer.innerText = '';
                break;
            case '←':
                if(answer.innerText){
                    answer.innerText = answer.innerText.slice(0, -1);
                    break;
                    }
                if(input.innerText){
                input.innerText = input.innerText.slice(0, -1);
                break;
                }
                break;
            case '=':
                try{
                answer.innerText = "=" + eval(input.innerText);
                }
                catch{
                answer.innerText= 'Error!';
                }
                break;
            case '±':
                if(answer.innerText){
                    input.innerText= parseInt(answer.innerText.split("=")[1])*(-1);
                    answer.innerText='';
                   break;
                }
                var number=parseInt(input.innerText);
                input.innerText = number*(-1);
                break;
            case '-':
            case '+':
            case '*':
            case '/':
            case '%' :
                if(answer.innerText){
                    input.innerText= answer.innerText.split("=")[1]+ e.target.innerText;
                    answer.innerText='';
                   break;
                }

                if(input.innerText.charAt(input.innerText.length-1)=='-' || input.innerText.charAt(input.innerText.length-1)=='+' || input.innerText.charAt(input.innerText.length-1)=='/' || input.innerText.charAt(input.innerText.length-1)=='*' || input.innerText.charAt(input.innerText.length-1)=='%' )
                {input.innerText = input.innerText.slice(0, -1);
                input.innerText += e.target.innerText;
                }

                else{
                input.innerText += e.target.innerText;
                }
            break;
            default:
            input.innerText += e.target.innerText;
        }
    });

});