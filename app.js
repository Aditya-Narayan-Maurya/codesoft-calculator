let string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{
        try {
            if (event.target.innerHTML=='C'){
                string="";
                document.querySelector(".input").value=string;
            }
            else if(event.target.innerHTML=='='){
            string=eval(string);
            document.querySelector(".input").value=string;
        }
        else if(event.target.innerHTML=='sqr'){
            string=(string)*(string);
            document.querySelector(".input").value=string;
            string='';
        }
        else if(event.target.innerHTML=='Del'){
            string=string.slice(0,string.length-1);
            document.querySelector(".input").value=string;
        }
        else{
            string= string+event.target.innerHTML;
            document.querySelector(".input").value=string;
        }
    } catch (error) {
        document.querySelector(".input").value='error';
        string='';
    }
    })
})
