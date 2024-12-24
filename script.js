const cal=()=>{
    let screen=document.getElementById("screen")
    let btns=document.querySelectorAll('.btn')
    let clear=document.querySelector('.clear')
    let equal=document.querySelector('.equal')
    
    btns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            let value=e.target.dataset.num;
            screen.value+=value
            
        })
    })
    equal.addEventListener("click",()=>{
        let ans=eval(screen.value)
        screen.value=ans
    })
    clear.addEventListener("click",()=>{
        screen.value=""
    })

}
cal()