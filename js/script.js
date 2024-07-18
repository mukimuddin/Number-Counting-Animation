const myNum = document.querySelectorAll(".count")
let speed = 200
myNum.forEach((myCount)=>{
    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    let new_increment_numebr = Math.floor(target_count / speed)
    const updateNumber = ()=>{
        init_count +=  new_increment_numebr
        myCount.innerText = init_count
        if(init_count < target_count){
            setTimeout(()=>{
                updateNumber()
            }, 20)
        }        
    }
    updateNumber();
})