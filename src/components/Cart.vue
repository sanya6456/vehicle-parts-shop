<template>
  <!--v-for="(cartItems,cartIndex) in product[productIndex.index[0]].productType[toCartItemIndex.index[cart.eachIndex]]" :key="cartIndex"-->

  <div class="text-gray-200 bg-white bg-gray-800 mb-2"
  :class="cart.visibility" v-for="(cartItems,cartIndex) in toCartItems[0]" :key="cartIndex">
    <div class="inline-grid grid-cols-4 text-white text-sm w-full">
      <img class="w-auto max-h-24 p-2" :src="cartItems.img" alt="product">
      <div class="text-xs m-auto">{{cartItems.brand}} {{cartItems.name}}</div>
      <!-- counter, increase, decrease -->
      <div class="flex items-center m-auto">
        <div class="text-lg">{{cart.total}}</div>
        <div class="flex flex-col items-center h-full ml-3">
          <!-- plus -->
          <button class="p-1 mb-1 rounded-full bg-gray-700" @click="productPlus">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
          <!-- minus -->
          <button class="p-1 mt-1 rounded-full bg-gray-700" @click="productMinus" :disabled="cart.minusDisabled">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div class="mr-2 m-auto">{{cartItems.price}} EUR</div>
    </div>
  </div>
</template>

<script>
import useSelect from '@/modules/cars.js';
import { onUpdated, reactive } from 'vue';
export default {
name:'Cart',
  setup(){
    const { product, productIndex,toCartItems }=useSelect();


    // cart dynamic values
    const cart=reactive({
      visibility:'hidden',
      total:1,
      plus:0,
      minus:0,
      minusDisabled:false,
    })

      function productPlus(){cart.total+=1}   // add product by clicking
      function productMinus(){cart.total-=1}  // remove product by clicking
    
    onUpdated(()=>{
      //open and close cart
      if(toCartItems!=null){
        cart.visibility='flex';
      } else{
        cart.visibility='hidden';
      }
      // You can't go to negative values on clicking "-" on a product
      if(cart.total===1){
        cart.minusDisabled=true
      } else{
        cart.minusDisabled=false
      }
    })


    return{
      product,
      productIndex,
      toCartItems,
      cart,
      productPlus,
      productMinus
    }
  }
}
</script>

<style lang="scss" scoped>

</style>