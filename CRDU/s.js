let productName = document.getElementById('productName')
let productPrice =document.getElementById('productPrice')
let productCategory=document.getElementById('productCategory')
let productDescraption=document.getElementById('productDescraption')
let addBtn=document.getElementById('btn')

let arr=[]
if(localStorage.getItem('pro')!==null)
{

    arr=JSON.parse(localStorage.getItem('pro'))
    loopdata()

}

addBtn.addEventListener('click' ,function(){
    
 let data={
  pname: productName.value ,
  pprice:productPrice.value,
  pCategory:productCategory.value,
  pdescraption:productDescraption.value

 }

 arr.push(data)
 loopdata()
 claerdata()
 localStorage.setItem('pro',JSON.stringify(arr))
})

function loopdata(){
    let tab= ""

    let x = 1
    for (let i = 0; i < arr.length; i++) {
         
        tab += `

        <tr>
            <td>${x++}</td>
            <td>${arr[i].pname}</td>
            <td>${arr[i].pprice}</td>
            <td>${arr[i].pCategory}</td>
            <td>${arr[i].pdescraption}</td>
            <td><button id=delbtn onclick="delData(${i})" >Delete </button></th>
            <td><button id=upbtn onclick="upD(${i})">Update </button></th>
        </tr>
       `;
    }
    document.getElementById('info').innerHTML=tab
}

function delData(ele){

arr.splice(ele,1)
loopdata()
localStorage.setItem('pro',JSON.stringify(arr))

}

let saveBtn =document.getElementById("save")
let y 
function upD(indexedElement){

y= indexedElement
productName.value=arr[indexedElement].pname
productPrice.value=arr[indexedElement].pprice
productCategory.value=arr[indexedElement].pCategory
productDescraption.value=arr[indexedElement].pdescraption
addBtn.classList.toggle("show")
saveBtn.classList.toggle("show")
}
  saveBtn.addEventListener('click',function(){
  arr[y].pname=productName.value
  arr[y].pprice=productPrice.value
  arr[y].pCategory=productCategory.value
  arr[y].pdescraption=productDescraption.value
  addBtn.classList.toggle("show")
  saveBtn.classList.toggle("show")
  loopdata()
  claerdata()
  localStorage.setItem('pro',JSON.stringify(arr))
  
  })

 
    function claerdata (){

              productName.value=""
              productPrice.value=""
              productCategory.value=""
              productDescraption.value=""

    }






