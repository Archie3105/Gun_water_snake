const user = document.querySelector("#user");
const show = document.getElementById("show");
const again = document.querySelector(".again");
const snakewatergun = (user,cpu)=>{
    // returns 1 if user win, -1 if user lose , 0 if draw
    // conditions for draw
    if (user == cpu)
    {
        return 0;
    }
    // Non-Draw conditions
    // snake and gun
    if (user = 'snake' && cpu =='gun')
    {
        return -1;
    }
    else if (user = 'gun' && cpu == 'snake')
    {
        return 1;
    }
    // water and snake
    if (user ='snake' && cpu == 'water')
    {
        return 1;
    }
    else if (user =='water' && cpu == 'snake')
    {
        return -1;
    }
    // gun and water
    if (user ='gun' && cpu == 'water')
    {
        return -1;
    }
    else if (user =='water' && cpu == 'gun')
    {
        return 1;
    }
}
const cpuChance = ()=>{
    let number = Math.floor(Math.random() * 100) + 1;
    let cpu;
    if (number<33)
    {
        cpu = 'snake';
    }
    else if (number>33 && number<66)
    {
        cpu = 'water';
    }
    else
    {
        cpu = 'gun';
    }
    return cpu;
}
const playsound = (sound)=>{
    let audio = new Audio(`assets/${sound}`)
    audio.play();
}
user.addEventListener("click",(value)=>{
    let user = value.target.id;
    let cpu = cpuChance();
    let result = snakewatergun(user, cpu);
    if(result===0){
        show.innerHTML  = "<h2>Match Draw Try Again</h2>";
        playsound('click.mp3');
    }
    else if(result === -1){
        
        show.innerHTML = "<h2>You loose</h2>";
        playsound('loose.mp3');
    }
    else{
        show.innerHTML = `<img src="assets/youwin.png" >`;
        playsound('win.mp3');
    }
    console.log(result)
})
again.addEventListener("click",()=>{
    show.innerHTML = null;
})