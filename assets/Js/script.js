//Hiển thị thanh menu
const menu =document.querySelector(".header .inner-button-menu");
if(menu)
{
    menu.addEventListener("click",()=>
    {

        const sidebar=document.querySelector("[box-menu]");
        
        sidebar.style.display="block";
    });
}

//đóng box menu
const closemenu=document.querySelector(".box-menu__button-close");
if(closemenu)
{
    closemenu.addEventListener("click",()=>{
        const sidebar=document.querySelector("[box-menu]");
   
        sidebar.style.display="none";
    });
}
//Hết đóng box menu

//khi click vào nút tìm kiếm thì nút tìm kiếm sẽ ẩn đi , ô input sẽ hiển thì và focus vào input
const  formButtonsrch=document.querySelector(".form-srch__btn-srch");
console.log(formButtonsrch);
if(formButtonsrch)
{
    formButtonsrch.addEventListener("click",()=>
    {
        const formsrchinput=document.querySelector(".form-srch__input");
        if(formsrchinput)
        {
            formsrchinput.style.display="inline-block";
            formButtonsrch.style.display="none";
            formsrchinput.focus();
        }
    });
}
//End khi click vào nút tìm kiếm thì nút tìm kiếm sẽ ẩn đi , ô input sẽ hiển thì và focus vào input


//Khi mất trọng tâm thì dòng input ẩn đi và nút tìm kiếm sẽ hiển thị lại
const formsrchinput=document.querySelector(".form-srch__input");
formsrchinput.addEventListener("blur",()=>
{
    formButtonsrch.style.display="inline-block";
    formsrchinput.style.display="none";
});
//End Khi mất trọng tâm thì dòng input ẩn đi và nút tìm kiếm sẽ hiển thị lại

