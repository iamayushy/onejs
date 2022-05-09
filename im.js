// let container = document.querySelector(".loading")
let im = document.querySelector('.imf')
function load(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(ans => setans(ans))
.catch(err =>console.log(err))
}

function setans(ans){
    
        let imgs = document.createElement('img')
        imgs.src = `${ans.message}`
        console.log(ans)
        let holder = document.createElement('div')
        holder.className='baby'
        holder.append(imgs)

        im.append(holder)
        
    
}

window.addEventListener('scroll',()=>{
    console.log(window.scrollY) 
    console.log(window.innerHeight) 
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight - 5){
    
    load();
    }
})