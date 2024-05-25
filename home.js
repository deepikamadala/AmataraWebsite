
let c=0
let k=document.getElementsByClassName("exp")[0]
let fun=()=>{
    c=c+1
    if(c%2==0){
        k.style.display = "none"
    }
    else{
        k.style.display = "block"
    }
}
let l=document.getElementsByClassName("resort")[0]
let fun1=()=>{
    c=c+1
    if(c%2==0)
    {
        l.style.display="none"
    }
    else{
        l.style.display="block"
    }
}
let m=document.getElementsByClassName("event")[0]
let fun2=()=>{
    c=c+1
    if(c%2==0)
    {
        m.style.display="none"
    }
    else{
        m.style.display="block"
    }
}
let n=document.getElementsByClassName("about")[0]
let fun3=()=>{
    c=c+1
    if(c%2==0)
    {
        n.style.display="none"
    }
    else{
        n.style.display="block"
    }
}
let p=document.getElementsByClassName("t")[0]
let fun4=()=>{
    c=c+1
    if(c%2==0)
    {
        p.style.display="none"
    }
    else{
        p.style.display="block"
    }
}
let imgs=["https://www.kamandaluresort.com/images/meditation.jpg","https://spyrola.com/uploads/blogs/42_8.2.JPG","https://media.designcafe.com/wp-content/uploads/2023/02/21194124/house-compound-wall-design.jpg"]
let imgr = document.querySelector(".cor img")
let i = 0
function fwd() {
    i = (i + 1) % 3
    imgr.src = imgs[i]
   
}
setInterval(fwd, 3000)
let obj=[{"title":"So so impressed with our stay at Amatara and grateful to the wonderful staff for<br/>making it such a relaxing and memorable trip.From the start we were utterly<br/>impressed, we were upgraded from a pool pavilion to a bay view pool villa which<br/>was super luxurious with amazing sunrise views. The facilities at the resort make it <br/>easy to spend days there just relaxing, and it is affordable enough to still get a taxi<br/>to go elsewhere in Phuket when wanting to do stuff. Honestly can't say enough<br/>great things about this resort, will definitely be back next time we are in Phuket!","desc":"Sam A, Australia"},{"title":"This hotel is perfect, from the facilities, to the staff, the food, the rooms, the gym<br/>classes and the general peaceful vibe. We loved this place and wolud defintely<br/>come back! It is quite remote and further away from the busyness of Phuket, but<br/>that is exactly what we were looking for.","desc":"Anisa B, UAE"},
{"title":"The spa services are fantastic, bespoke and delivered by experts. Acupuncture<br/>with Jitendra really helped facilitate my healing procces and the sessions with<br/>other specilalists was very well coordinated. Staff overflow with kindness all<br/>through the resort and make it a very welcoming place.","desc":"Voyager,NEW YORK"},{
    "title":"One of the best 5 star holiday resorts I have ever stayed in - the villas with a pool <br/>are stunning, the service is fantastic and the grounds are beautiful.We were<br/>initially concerned the resort was too far from everything, but we couldn't be<br/>happier.We loved the peace and quiet and we were only a 20-30 minute ride to<br/>Phuket town (highly recommend the Sunday market). The day spa is also<br/>incredible and the rooftop bar has fantastic views.","desc":"Sam M, Australia"}]
let cont=document.getElementById("f")
let p1=document.getElementById("e")
let j=0
function fw(){
    j=(j+1)%4
    cont.innerHTML= obj[j].title
    p1.innerHTML = obj[j].desc   
}
setInterval(fw,1500)
let imgrs=["https://cdn.archilovers.com/people/thumb2_41076d63-0d40-4462-b8e5-80d3deb29379-log1.gif",
"https://singaporebrides.com/destination-weddings/world-luxury-hotel-awards/images/world-luxury-hotel-awards-main.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMF6FCfqAht7UguSW0te0VXPy1fVFnq4qFRhoC9WLuJw&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzEoEyfeipbgpX8g7JDX_QqH_y7GI0xGFKdrm_zIfiQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuWgERt5PU9JgPCZT-Xc58Kyl6clUgEGbNw&s",
"https://media-cdn.tripadvisor.com/media/photo-s/1d/3c/0a/2f/arte-hotel.jpg",
"https://assets-global.website-files.com/62c2a83de7fe5c17eb65b6f7/62d44c81a73d906438a0f6ba_62bdead711a91c169580d676_Certificate-of-Excellence-TripAdvisor.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Aj-fNnA8KdbpPvSMdkX3ydjFvjrbIXi215mwE7GMEg&s",
"https://www.worldbusinessoutlook.com/wp-content/uploads/2023/12/WBO-NOMINATE-NOW.png"]
let K=0
let h=document.querySelector(".b1 img")
let P=document.querySelector(".b2 img")
let q=document.querySelector(".b3 img")
let w=document.querySelector(".b4 img")
let dotr=document.querySelectorAll(".dotcon i")
// let arr=["Luxury Lifestyle<br/>Awards 2024","World Luxury <br/>Hotel Awards<br/>2023","World Luxury Spa<br/>Awards 2023","14th Thailand<br/>Tourism Awards<br/>2023","Best Wellness Spa<br/>2022","Green Hotel<br/>2022","Certification of<br/>Excellences2019","Destination of Deluxe<br/>Awards 2022","World Businees<br/>Outlook Awards<br/>2024"]
// function f(){
//     K++
//     if (K > arr.length - 1)
//         K = 0

//     // dotr[K].className="fa-regular fa-circle" 
//     // K=(K+1)%9
//     // dotr[K].className="fa-solid fa-circle"
//     h.src = imgrs[K]
//     document.getElementById("A").innerText = arr[K]
//    P.src = imgrs[(K+1)%imgrs.length]
//     document.getElementById("z").innerText = arr[(K+1)%arr.length]
//     q.src = imgrs[(K+2)%imgrs.length]
//     document.getElementById("y").innerText = arr[(K+2)%arr.length]
//     w.src=imgrs[(K+3)%imgrs.length]
//     document.getElementById("x").innerText = arr[(K+2)%arr.length]
// }
// function b()
//             {
//                 K--;
//                 if (K < 0)
//                     K = arr.length - 1
            
//                 h.src = imgrs[K]
//     document.getElementById("A").innerText = arr[K]
//    P.src = imgrs[(K+1)%imgrs.length]
//     document.getElementById("z").innerText = arr[(K+1)%arr.length]
//     q.src = imgrs[(K+2)%imgrs.length]
//     document.getElementById("y").innerText = arr[(K+2)%arr.length]
//     w.src=imgrs[(K+3)%imgrs.length]
//     document.getElementById("x").innerText = arr[(K+2)%arr.length]
//             }
// setInterval(f,2000)
let fun0=()=>{
    window.location="well.html"
}
let f1=()=>{
    window.location="Ret.html"
}
let f2=()=>{
    window.location="Exp.html"
}
let f3=()=>{
    window.location="Res.html"
}
let f4=()=>{
    window.location="off.html"
}
let f41=()=>{
    window.location="Eve.html"
}
let f5=()=>{
    window.location="Abo.html"
}
let f6=()=>{
    window.location="Blo.html"
}
let f7=()=>{
    window.location="Book.html"
}
let d=document.getElementsByClassName(".bar")[0]
let c1=0
let f10=()=>{
    c1=c1+1
    if(c1%2==0){
        d.style.display = "none"
    }
    if(c1%2!=0){
        d.style.display = "block"
        // n.style.display="none"
    }
}
let home=()=>{
    window.location="index.html"
}