import { ref,storage,uploadBytes,getDownloadURL,db,collection,addDoc,auth } from "../../unitly.js";

const card_form = document.getElementById("card_form")
const btn = document.getElementById("btn")

card_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e)
    btn.innerHTML = "Uploding Wait"
    btn.disabled = true
    const productCard = {
        productName : e.target[0].value,
        banner : e.target[1].files[0],
        productBrand : e.target[2].value,
         productDescrption : e.target[3].value,
         productPrice : e.target[4].value,
         createdBy : auth.currentUser.uid,
         createdByEmail : auth.currentUser.email,
         cartProductFire: [],

    }
    // console.log(productCard)
  const imgRef = ref(storage,productCard.banner.name)
  uploadBytes(imgRef,productCard.banner).then(()=>{
    console.log("file aplod")
    getDownloadURL(imgRef).then((url)=>{
        console.log("url==>",url)
        productCard.banner = url


        const productCollection = collection(db,"products")
        addDoc(productCollection ,productCard).then(()=>{
            console.log("DOCUMENT ADD")
            window.location.href = '/'
        })
    })
  })
})