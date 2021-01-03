<template>

  <div class="text-gray-200 bg-gray-800 mb-2"
  :class="cart.visibility" v-for="(cartItems,cartIndex) in toCartItems" :key="cartIndex">
    <div class="inline-grid grid-cols-5 text-white text-sm w-full">
      <img class="w-auto max-h-24 p-3" :src="cartItems.img" alt="product">
      <div class="text-xs m-auto">{{cartItems.brand}} {{cartItems.name}}</div>
      <!-- counter, increase, decrease -->
      <div class="flex items-center m-auto">
        <div class="text-lg">{{cartItems.total}}</div>
        <div class="flex flex-col items-center h-full ml-3">
          <!-- plus -->
          <button class="p-1 mb-1 rounded-full bg-gray-700" @click="productPlus(cartItems,cartIndex)">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
          <!-- minus -->
          <button class="p-1 mt-1 rounded-full bg-gray-700" @click="productMinus(cartItems,cartIndex)">
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

  <div class="font-mono text-white bg-gray-800 mb-2 h-1/5">
      <div class="text-center uppercase text-2xl">total</div> 
  </div>

</template>

<script>
import useSelect from '@/modules/cars.js';
import { onUpdated, reactive } from 'vue';
export default {
name:'Cart',
  setup(){
    const { product, productIndex, toCartItems }=useSelect(); // import global functions

    // cart dynamic values
    const cart=reactive({
      visibility:'hidden'
    })

      function productPlus(cartItems){cartItems.total+=1}   // add product by clicking
      function productMinus(cartItems){cartItems.total-=1}  // remove product by clicking

      let formatter = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR', minimumFractionDigits:0});  // Create number formatter

      function deleteItem(cartIndex){toCartItems.splice(cartIndex,1)} //delete item on click trash icon
    
    onUpdated(()=>{
      //open and close cart
      if(toCartItems!=null){
        cart.visibility='flex';
      } else{
        cart.visibility='hidden';
      }

      toCartItems.forEach(e => {if (e.total===0) {e.total=1}});   // we cant go under 1 on total quantity
    })


    return{
      product,
      productIndex,
      toCartItems,
      cart,
      productPlus,
      productMinus,
      formatter,
      deleteItem
    }
  }
}
</script>

<style lang="scss" scoped>

</style>