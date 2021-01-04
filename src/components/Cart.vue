<template>
  <div class="overflow-y-auto scrollbar-hide h-5/6">
    <div class="text-gray-200 bg-gray-800 mb-2 last-mb-none" v-for="(cartItems,cartIndex) in toCartItems" :key="cartIndex">
      <div class="inline-grid grid-cols-5 text-white text-sm w-full">
        <img class="w-auto h-20 p-3" :src="cartItems.img" alt="product">
        <div class="text-xs m-auto">{{cartItems.brand}} {{cartItems.name}}</div>
        <!-- counter, increase, decrease -->
        <div class="flex items-center m-auto">
          <div class="text-lg">{{cartItems.total}}</div>
          <div class="flex flex-col items-center h-full ml-3">
            <!-- plus -->
            <button class="p-1 mb-1 rounded-full bg-gray-700 focus:outline-none" @click="productPlus(cartItems,cartIndex)">
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
            <!-- minus -->
            <button class="p-1 mt-1 rounded-full bg-gray-700 focus:outline-none" @click="productMinus(cartItems,cartIndex)">
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mr-0 m-auto">{{formatter.format(cartItems.price*cartItems.total)}}</div>
        <div class="mr-4 m-auto">
          <svg class="h-7 w-7 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="deleteItem(cartIndex)">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  

  
  <!-- button group -->
  <div class="h-1/6">
    <div class="text-white flex items-center m-auto h-full">
      <!-- check out button -->
      <button class="flex items-center justify-center text-center bg-gray-800 w-full py-2 ml-6 mr-3 rounded">
        <svg class="w-8 h-8 fill-current pt-1 mr-2 text-green-800" viewbox="0 0 24 24">
          <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
        </svg><div>Check out</div>
      </button>
      <!-- discard button -->
      <button class="flex items-center justify-center text-center bg-gray-800 w-full py-2 ml-6 mr-3 rounded">
        <svg class="w-8 h-8 fill-current mr-2 text-red-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg><div>Discard</div>
      </button>
    </div>
  </div>
</template>

<script>
import useSelect from '@/modules/cars.js';
import { onUpdated } from 'vue';
export default {
name:'Cart',
  setup(){
    const { product, productIndex, toCartItems }=useSelect(); // import global functions

      function productPlus(cartItems){
        cartItems.total+=1;  // add product by clicking
        toCartItems.cartTotal=toCartItems.reduce((a,b)=>a+b.total,0)  // sum total items in cart
      }   

      function productMinus(cartItems){
        cartItems.total-=1;  // remove product by clicking
        toCartItems.cartTotal=toCartItems.reduce((a,b)=>a+b.total,0);  // sum total items in cart
      }  

      let formatter = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR', minimumFractionDigits:0});  // Create number formatter

      function deleteItem(cartIndex){
        toCartItems.splice(cartIndex,1);  //delete item on click trash icon
        toCartItems.cartTotal=toCartItems.reduce((a,b)=>a+b.total,0);  // sum total items in cart
      } 
    
      onUpdated(()=>{toCartItems.forEach(e => {if (e.total===0) {e.total=1}});   // we cant go under 1 on total quantity
      
    })


    return{
      product,
      productIndex,
      toCartItems,
      productPlus,
      productMinus,
      formatter,
      deleteItem
    }
  }
}
</script>

<style lang="scss" scoped>
  // last product has mb-0
  .last-mb-none{
    &:last-child{
      margin-bottom: 0;
    }
  }
  .scrollbar-hide{
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .scrollbar-hide::-webkit-scrollbar{
    display: none;
  }
</style>