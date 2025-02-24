 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
 import { getDatabase,ref, push, set ,onValue} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDXnF6GVlOc0odJvUzp6QsCS9CvxL0Qr68",
   authDomain: "project-1-9786d.firebaseapp.com",
   projectId: "project-1-9786d",
   storageBucket: "project-1-9786d.firebasestorage.app",
   messagingSenderId: "692086311996",
   appId: "1:692086311996:web:45c2f6a8ba0ebf89c4c739"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app)
 const productListRef = ref(database, 'products');
//  const newProductRef = push(productListRef);
// set(newProductRef, {
//     title:"MO231 - Pomeranian White",
//     gender:"Đực",
//     age:2 ,
//     price:6900000
// });

// const buttonCreate=document.querySelector(".createItem");
// if(buttonCreate)
// {
//     buttonCreate.addEventListener("click",()=>
//     {
//          const productListRef = ref(database, 'products');
//             const newProductRef = push(productListRef);
//             set(newProductRef, {
//                 img:"",
//                 title:"MO512 - Poodle Tiny",
//                 gender:"Đực",
//                 age:2 ,
//                 price:5000000
//             });
//     });
// }




//Lấy ra dữ liệu sản phẩm từ firebase
onValue(productListRef, (items) => {
    let htmlItem=``;
    const listProducts=document.querySelector("[products]");
    items.forEach((item) => {
   
        const itemKey=item.key;
        const itemvalue=item.val();
      
        const newItem=document.createElement("li");
        newItem.innerHTML=` <div class="main">
                        <img  img-product src="${itemvalue.img}" alt="">
                        <h3 name-product>${itemvalue.title}</h3>
                        <div class="btn-list">
                            <button btn_show="${itemKey}"><i class="fa-solid fa-chevron-down"></i></button>
                            <button btn_edit="${itemKey}"><i class="fa-regular fa-pen-to-square"></i></button>
                            <button btn_delete="${itemKey}"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
                        <div dse-product class="dse-product" >
                                <p> Giống : ${itemvalue.gender}</p>
                                <p> Tuổi : ${itemvalue.age<10? "0"+itemvalue.age : itemvalue.age} tháng</p>
                                <p> <b>Giá</b> : ${itemvalue.price>0 ? itemvalue.price.toLocaleString('vi-VN'): 0} vnđ</p>
                        </div>`;

        //Thêm sản phẩm vào trong danh sách
        if(listProducts)
        {
        listProducts.appendChild(newItem);
        }

        //Show thông tin chi tiết của sản phẩm
        const buttonShow=newItem.querySelector("[btn_show]");
        if(buttonShow)
        {

            buttonShow.addEventListener("click",()=>
            {
                const dseProduct=newItem.querySelector("[dse-product]");
        
                if(dseProduct)
                {
                    if(dseProduct.style.display=="none")
                    {
                        dseProduct.style.display="block";
                        buttonShow.innerHTML=`<i class="fa-solid fa-angle-up"></i>`
                    }
                    else
                    {
                        dseProduct.style.display="none";
                         buttonShow.innerHTML=`<i class="fa-solid fa-chevron-down"></i>`
                    }
                }
            });
        }
         //End show thông tin chi tiết của sản phẩm


    
  });

  });

//Hết lấy ra dữ liệu sản phẩm từ firebase


//Đóng box-up

const closeBoxup=document.querySelector(".box-up__close");
if(closeBoxup)
{
    closeBoxup.addEventListener("click",()=>
    {
        const boxUp=document.querySelector(".box-up");
        if(boxUp)
        {
            boxUp.style.display="none";
        }
    });
}
//Hết Đóng box-up
















//Hiển thị thanh menu
const menu =document.querySelector(".header .inner-button-menu");
if(menu)
{
    menu.addEventListener("click",()=>
    {

        const sidebar=document.querySelector("[box-menu]");
        if(sidebar)
            {
       
                sidebar.setAttribute("box-menu","show")
            } 
      
    });
}

//đóng box menu
const closemenu=document.querySelector(".box-menu__button-close");
if(closemenu)
{
    closemenu.addEventListener("click",()=>{
        const sidebar=document.querySelector("[box-menu]");
   
        sidebar.setAttribute("box-menu","")
    });
}
//Hết đóng box menu

//khi click vào nút tìm kiếm thì nút tìm kiếm sẽ ẩn đi , ô input sẽ hiển thì và focus vào input
const  formButtonsrch=document.querySelector("[Search1] .form-srch");

if(formButtonsrch)
{
    // formButtonsrch.addEventListener("click",()=>
    // {
    //     const formsrchinput=document.querySelector("[showSearch]");
    //     if(formsrchinput)
    //     {
    //         formsrchinput.style.display="inline-block";
    //         formButtonsrch.style.display="none";
    //         formsrchinput.focus();
    //     }
    // });
    console.log("search 1")
}
//End khi click vào nút tìm kiếm thì nút tìm kiếm sẽ ẩn đi , ô input sẽ hiển thì và focus vào input


//Khi mất trọng tâm thì dòng input ẩn đi và nút tìm kiếm sẽ hiển thị lại
const formsrchinput=document.querySelector(".form-srch__input");
if(formsrchinput)
{
    formsrchinput.addEventListener("blur",()=>
        {
            formButtonsrch.style.display="inline-block";
            formsrchinput.style.display="none";
        });
}
//End Khi mất trọng tâm thì dòng input ẩn đi và nút tìm kiếm sẽ hiển thị lại
