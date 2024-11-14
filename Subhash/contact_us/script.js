const menu = document.getElementById("menu")
        const bar = document.getElementById("bar")

        let flag = true;

        menu.addEventListener("click",()=>{
            if(flag){
                bar.style.display = "flex";
                menu.classList.remove('ri-menu-line');
                menu.classList.add('ri-close-line');
            }
            else{
                bar.style.display = "none"
                menu.classList.remove('ri-close-line');
                menu.classList.add('ri-menu-line');
            }
            flag = !flag;
        })
        const send = (e)=>{
            alert("Message sent....")
        }