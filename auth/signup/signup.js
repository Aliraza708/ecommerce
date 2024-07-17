import { auth,createUserWithEmailAndPassword ,doc,setDoc,ref, uploadBytes,getDownloadURL, storage, db} from "../../unitly.js";

const Sign_up_form = document.getElementById("Sign_up_form")
const submit_btn = document.getElementById("submit_btn")

Sign_up_form.addEventListener("submit" ,function(e){

    console.log(e)
    e.preventDefault();
    const firstName = e.target[0].value
    const lastName = e.target[1].value
    const email = e.target[2].value
    const password = e.target[3].value
    const DateOfBirth = e.target[4].value
    const img = e.target[5].files[0]
    // const companey = e.target[7].value
    
    const userInfo ={
        img,
        email,
        password,
        firstName,
        lastName,
        DateOfBirth,
      
      } 
      console.log(userInfo)
      submit_btn.disabled = true
      submit_btn.innerHTML = "Loading..."
   createUserWithEmailAndPassword(auth,email,password).then((user)=>{

    console.log("auth===>",user.user.uid)
    // up load user imge 
    const imgRef = ref(storage, `user/${user.user.uid}`)
    uploadBytes(imgRef,img).then(()=>{
        console.log("user image upload")
        getDownloadURL(imgRef).then((url)=>{
            console.log("url===>",url)
            // update userInfo
            userInfo.img = url

            // Created user document refrence 
            const userDbRef = doc(db,"user",user.user.uid)

            // set this document to db
            setDoc(userDbRef,userInfo).then(()=>{
                window.location.href = "/"
                 submit_btn.disabled = false
                 submit_btn.innerHTML = "Submit"
             })
        }).catch((err)=>{
         submit_btn.disabled = false
         submit_btn.innerHTML = "Submit"
        })
    }).catch((err)=>
    {
        submit_btn.disabled = false
         submit_btn.innerHTML = "Submit"
    })

   }).catch((err)=>{
    alert("error===> this",err)
         submit_btn.disabled = false
         submit_btn.innerHTML = "Submit"
})   

     console.log(userInfo)

})
