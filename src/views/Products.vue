<template>
  <div class="parts-lp text-white min-h-screen w-full">
    <div class="container h-96 w-10/12 mx-auto"></div>
    <div class="container min-h-screen w-full sm:w-11/12 md:w-10/12 bg-black bg-opacity-75 rounded-t-2xl mx-auto">
      <div class="flex flex-wrap p-5">
        <!-- category card -->
        <div class="w-9/12 sm:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto my-5" v-for="(card,cardIndex) in product[productIndex.index[0]].productType" :key="cardIndex" @click="openUp(this,cardIndex)">
          <div class="min-h-full flex flex-col items-center bg-gray-200 mx-3 rounded-md cursor-pointer">
            <h3 class="uppercase text-md lg:text-xl text-black text-center border-b border-gray-400 bg-black bg-opacity-10 w-full py-2">{{card.brand}}  {{card.name}}</h3>
            <div class="w-52 h-52">
                <img class="w-auto h-full m-auto py-4 px-2" :src="card.img" alt="product">
            </div>
            <div class="p-3 text-black">{{card.desc}}</div>
            <div class="flex justify-between items-center w-full p-3">
              <!-- details button -->
              <button class="flex items-center hover:text-white">
                  <a class="border border-gray-400 p-1">
                      <svg class="w-5 h-5 text-red-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                  </a>
                  <p class="ml-2 text-green-800 font-medium">Details</p>
              </button>
              <!-- price -->
              <div class="text-right text-green-800 font-semibold text-xl">{{card.price}} EUR</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Opened product -->
      <div class="relative" :class="box.cardVisibility">
        <div class="fixed transform translate-y-1/2 translate-x-1/2 bottom-1/2 right-1/2 w-80 sm:w-96">
          <div class="w-full mx-auto my-5">
            <div class="min-h-full flex flex-col items-center bg-gray-200 mx-3 rounded-md cursor-pointer shadow-outside">
              <div class="flex items-center pl-2 w-full border-b border-gray-400 bg-black bg-opacity-10">
                <svg class="text-red-800 w-8 h-auto py-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="exitProduct">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <h3 class="uppercase text-md lg:text-xl text-black font-medium ml-auto pr-4">{{product[productIndex.index[0]].productType[box.selectedCardIndex].brand}} {{product[productIndex.index[0]].productType[box.selectedCardIndex].name}}</h3>
              </div>
              <div class="w-52 h-52">
                  <img class="w-auto h-full m-auto py-4 px-2" :src="product[productIndex.index[0]].productType[box.selectedCardIndex].img" alt="product">
              </div>
              <div class="p-3 text-black">{{product[productIndex.index[0]].productType[box.selectedCardIndex].desc}}</div>
              <div class="flex justify-between items-center w-full p-3">
                <!-- add to cart button (visible) -->
                <button class="py-1 px-6 font-semibold text-green-800 border border-green-800 hover:border-red-800 hover:text-red-800" :class="box.showAddButton" @click="addToCart">Buy</button>
                <!-- price -->
                <div class="text-right text-green-800 font-semibold text-xl">{{product[productIndex.index[0]].productType[box.selectedCardIndex].price}} EUR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  

</template>

<script>
import useSelect from '@/modules/cars.js';
import router from '@/router/index.js';
import { reactive } from 'vue';

export default {
name:'Products',

  setup(){
      const { product, productIndex, toCartItems }=useSelect();

      // on page refresh it will push you back to car select (home page)
      window.onload=function(){
          router.push('/')
      }
      // if brand and name not empty add a '-' (dash) sign (it makes more clear to separate the informations)
      product[productIndex.index[0]].productType.forEach(e => {
          if(e.brand!='' && e.name!=''){
              e.brand=`${e.brand} - `
          }
      });
      // opened product dynamic classes
      const box=reactive({
        cardVisibility:'hidden', 
        showAddButton:'hidden',

        selectedCardIndex:0,   // clicked product index stores here
      })
      // force to change open product dynamic class states
      function openUp(cardIndex,index){
        box.selectedCardIndex=index;  // get clicked product index

        box.cardVisibility='';  
        box.detailsVisibility='hidden';  
        box.plusMinusVisibility='flex';
        box.showAddButton='';
      }
      // exit product with "left arrow"
      function exitProduct(){
        box.cardVisibility='hidden';
        box.showAddButton='hidden';
      }

      const allProduct=[];
      // add items to cart on click 'Buy'
      function addToCart(){

        
        allProduct.push({
            categoryId:productIndex.index[0],
            productId:box.selectedCardIndex,
            brand:product[productIndex.index[0]].productType[box.selectedCardIndex].brand,
            name:product[productIndex.index[0]].productType[box.selectedCardIndex].name,
            price:product[productIndex.index[0]].productType[box.selectedCardIndex].price,
            desc:product[productIndex.index[0]].productType[box.selectedCardIndex].desc,
            img:product[productIndex.index[0]].productType[box.selectedCardIndex].img,
        })

        let dataArr = allProduct.map(item=>{
            return [JSON.stringify(item),item];
        }); // creates array of array
        let maparr = new Map(dataArr); // create key value pair from array of array
        toCartItems.shift();
        toCartItems.push([...maparr.values()]);

        console.log('to cart: ',toCartItems);
      }

      return{
          product,
          productIndex,
          box,
          openUp,
          exitProduct,
          addToCart,
          toCartItems
          //item,
          //productPlus,
          //productMinus
      }
  }
}
</script>

<style lang="scss" scoped>
  .parts-lp{
    background-image: linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7),rgba(0,0,0,.7)) ,url(../assets/gallery/bg/skyline-r34.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: top;
  }
  .shadow-outside{
    box-shadow: 0 0 0 3000px rgba(0,0,0,.9);
  }
</style>