
import { auth,onAuthStateChanged,signOut,db,getDoc,doc, getDocs,collection,query,where} from "../../unitly.js";

const useImage = document.getElementById("useImage")
const login_btn = document.getElementById("login_btn")
const logout_btn = document.getElementById("logout_btn")
const productCard_continer = document.getElementById("productCard_continer")

   
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
            const uid = user.uid;
            console.log(uid)
            useImage.style.display = "flex"
            logout_btn.style.display = "flex"
            login_btn.style.display = "none"
            getimage(uid)
            getMyProduct(uid)
            
            logout_btn.addEventListener("click",()=>{
                signOut(auth)
            })
            
           
          // ...
        } else {
            useImage.style.display = "none"
          logout_btn.style.display = "none"
            login_btn.style.display = "flex"
          
        }
        function getimage(uid){

            const userRef =doc(db,"user",uid)
            getDoc(userRef).then((data)=>{
                console.log("data===>",data)
                console.log("data===>",data.data())
                useImage.src = data.data().img
            })

            }
    })

  async function getMyProduct(uid){

  try{
     const q = query(collection(db,"products"),where("createdBy","==",uid))
     const qurerySnapshot = await getDocs(q)
     productCard_continer.innerHTML = ""
     qurerySnapshot.forEach((doc)=> {
        // console.log(`${doc.id}=>${doc.data()}`)
        const product = doc.data()
        const{banner,productBrand,productName,productPrice}=product
        console.log(product)
   const pro= `<div id="productinner"> 
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="p-8 rounded-t-lg" src="${banner}"/>
                
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                   <p class="companey">${productBrand}</p>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">${productName}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    </div>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 ">$${productPrice}</span>
                    <button id="${doc.id}"onclick ="cart(this)"
                       class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  ${(auth?.currentUser && product?.cartProductFire?.includes(auth?.currentUser.uid) ? "Carted" : "Add to Cart")}</button>
                </div>
            </div>
        </div>
      </div>`
          
      productCard_continer.innerHTML +=pro
        
     });

  }catch{
   alert("not")
  }
  }
    
   getproduct()     

   
  

// web site media qure


const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
}

document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            
        }
         else if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
            header.classList.remove('scrolled');
        }
        
    });
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Scroll smoothly to the top
    document.getElementById('back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
});





