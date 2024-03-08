import BagsFootwear from "./data/BagsFootwear.js"
import BeautyHealth from "./data/BeautyHealth.js"
import Electronics from "./data/Electronics.js"
import HomeKitchen from "./data/HomeKitchen.js"
import JewelleryAccessories from "./data/JewelleryAccessories.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"

let inputsearchEl = document.querySelector(".inputsearch")
let recentinput = []
let forminputEl = document.getElementById("inputform")
const listofRecentEl = document.querySelector(".listofRecent")



inputsearchEl.addEventListener("keydown",()=>{
 if(inputsearchEl.value){
  document.getElementById("closesearch").style.display="block"
 }
 else{
  document.getElementById("closesearch").style.display="none"
 }
})

forminputEl.addEventListener("sumbit",(e)=>{
  e.preventDefault()
let listofRecentHTMLEl = ""

  recentinput.unshift(inputsearchEl.value)
  
  if(recentinput.length > 0){
    for(let i=0; i<recentinput.length; i++){
      listofRecentHTMLEl += ` 
      <div class="recentitem">
        <div class="recenticon">
          <img src="images/recent.png" alt="">
        </div>
        <p>${recentinput[i]}</p>
     </div>`
    }
    listofRecentEl.innerHTML = listofRecentHTMLEl
  }
})

/**function reuble**/ 
function renderSubMenu(id,data){
  let temp = document.getElementById(id)

function tempfunc(){
 return data.map(el =>{
   let list = "";
  list = el.data.map(element => `<p>${element}</p>`).join("")
   return `
   <div class="colum">
     <h4>${el.heading}</h4>
     ${list}
   </div>
   `
  }).join("")

}
temp.innerHTML = tempfunc()
}

/**womenEthnic**/
renderSubMenu("womenEthnic",WomenEthnic)

/**WomenWestern**/
renderSubMenu("womenWestern",WomenWestern)

/**men**/
renderSubMenu("men",Men)

/**kids**/
renderSubMenu("kids",Kids)

/**homekitchen**/

renderSubMenu("homeKitchen",HomeKitchen)

/**beautyhealth**/
renderSubMenu("beautyHealth",BeautyHealth)

/**jewelleryAccessories**/ 
renderSubMenu("jewelleryAccessories",JewelleryAccessories)

/**bagsFootwear**/ 
renderSubMenu("bagsFootwear",BagsFootwear)

/**electronic**/ 
renderSubMenu("electronics",Electronics)

/*********************product section***********************/ 

import ProductData from './meeso/data.js'

const category = [...new Set (ProductData.map(el=>el.category))]
console.log( category);

let filterData = []

document.addEventListener("click", (e)=>{
  
  const bluetoothEl = document.getElementById("bluetooth").checked
  const ChainsEl = document.getElementById("chains").checked
  const KurtasEl = document.getElementById("kurtas").checked
  const AccessoriesEl = document.getElementById("accessories").checked
  const sareesEl = document.getElementById("sarees").checked
  const watchEl = document.getElementById("watch").checked


  
 filterData = ProductData.filter(el => (
  bluetoothEl && el.category == "luetooth Headset " ||
  ChainsEl && el.category ==  "Men Chains"||
  KurtasEl && el.category ==  "Kurtas" ||
  AccessoriesEl && el.category ==  "Mobile Accessories"||
  sareesEl && el.category ==  "sarees" ||
  watchEl && el.category ==  "watch"
 ))
 
 renderProductData()
})

function renderProductData(){
  let filterDataHTML="";

  if(filterData[0]){
    filterData.forEach(el =>{
      filterDataHTML += `
      <div class="productCard" onclick="ClickProduct(${el.id})">
              <div class="product-image">
               <img src="meesho/ProductImage/${el.img}"/>
              </div>
             <h3 class="product-name">${el.name}</h3>
             <p class="product-price">
              <span><i class="fa-solid fa-indian-rupee-sign"></i></span>
              <span>${el.price}</span>
             </p>
        </div>
      `
    })
  }
  else{
    ProductData.forEach(el =>{
      filterDataHTML += `
      <div class="productCard" onclick="ClickProduct(${el.id})">
              <div class="product-image">
               <img src="meesho/ProductImage/${el.img}"/>
              </div>
             <h3 class="product-name">${el.name}</h3>
             <p class="product-price">
              <span><i class="fa-solid fa-indian-rupee-sign"></i></span>
              <span>${el.price}</span>
             </p>
        </div>
      `
    })
  }

    document.getElementById("product-category-displayId").innerHTML = filterDataHTML
}  
renderProductData()

function ClickProduct(id){
 localStorage.setItem("productId",join.stringify(id))
  // window.location("./page/product.html")
  alert("hii")
}