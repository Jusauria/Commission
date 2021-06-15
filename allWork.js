"use strict";

let iKnow=0;

function Calculator(){
    
    this.bindB=function(){
        document.querySelector('#artCom').onclick=()=>{
            let main = document.querySelector("body");
            
            main.classList.remove('starting');
            main.classList.remove('pro');
            main.className="art";
            
            document.querySelector('#artComCont').classList.remove('none');
            
            document.querySelector('#proComCont').className='none';
            document.querySelector('#startQuest').classList.remove('on');
            document.querySelector('#startQuest').className='none';
            document.querySelector('#backUp').classList.remove('none');
            document.querySelector('#backUp').className='on';
            document.querySelector('#start').classList.remove('vers-1');
            document.querySelector('#start').classList.remove('vers-3');
            document.querySelector('#start').className='vers-2';
            document.querySelector('#sfwEx').className='none';
            document.querySelector('#nsfwEx').className='none';
            document.querySelector('#ychEx').className='none';
            document.querySelector('#aboutJu').className='none';
            
            let  button =document.querySelector('#artCom');
            button.style='background: lightgray;';
            document.querySelector('#proCom').style.background =null;
            
        }
        document.querySelector('#proCom').onclick=()=>{
            let main = document.querySelector("body");
            
            main.classList.remove('starting');
            main.classList.remove('art');
            main.className="pro";
            
            document.querySelector('#proComCont').classList.remove('none');
            
            document.querySelector('#artComCont').className='none';
            document.querySelector('#startQuest').classList.remove('on');
            document.querySelector('#startQuest').className='none';
            document.querySelector('#backUp').classList.remove('none');
            document.querySelector('#backUp').className='on';
            document.querySelector('#start').classList.remove('vers-1');
            document.querySelector('#start').classList.remove('vers-2');
            document.querySelector('#start').className='vers-3';
            document.querySelector('#sfwEx').className='none';
            document.querySelector('#nsfwEx').className='none';
            document.querySelector('#ychEx').className='none';
            document.querySelector('#aboutJu').className='none';
            
            let  button =document.querySelector('#proCom');
            button.style='background: lightgray;';
            document.querySelector('#artCom').style.background =null;
        }
        document.querySelector('#title').onclick=()=>{
            let main = document.querySelector("body");
            
            main.classList.remove('art');
            main.classList.remove('pro');
            
            main.className="starting";
            
            document.querySelector('#proComCont').className='none';
            document.querySelector('#artComCont').className='none';
            document.querySelector('#startQuest').classList.remove('none');
            document.querySelector('#startQuest').className='on';
            document.querySelector('#backUp').classList.remove('on');
            document.querySelector('#backUp').className='none';
            document.querySelector('#start').classList.remove('vers-2');
            document.querySelector('#start').classList.remove('vers-3');
            document.querySelector('#start').className='vers-1';
            document.querySelector('#sfwEx').className='none';
            document.querySelector('#nsfwEx').className='none';
            document.querySelector('#ychEx').className='none';
            document.querySelector('#aboutJu').className='none';
            
            document.querySelector('#artCom').style.background =null;
            document.querySelector('#proCom').style.background =null;
        }
        document.querySelector('#sfwBlock').onclick=()=>{
            
            document.querySelector('#artComCont').className='none';
            document.querySelector('#sfwEx').classList.remove('none');
            
        }
        document.querySelector('#nsfwBlock').onclick=()=>{
            
            document.querySelector('#artComCont').className='none';
            document.querySelector('#nsfwEx').classList.remove('none');
            
        }
        document.querySelector('#ychB').onclick=()=>{
            
            document.querySelector('#artComCont').className='none';
            document.querySelector('#ychEx').classList.remove('none');
            
        }
        document.querySelector('#Ju').onclick=()=>{
            
            document.querySelector('#artComCont').className='none';
            document.querySelector('#proComCont').className='none';
            document.querySelector('#aboutJu').classList.remove('none');
            
        }
        
        
    }
}

let calc=new Calculator();

calc.bindB();

