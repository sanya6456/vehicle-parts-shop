<template>
  <div class="parts-lp text-white min-h-screen w-full">
    <div class="container h-96 w-10/12 mx-auto"></div>
    <div class="container min-h-screen w-full sm:w-11/12 md:w-10/12 bg-black bg-opacity-75 rounded-t-2xl mx-auto">
      <div class="flex flex-wrap p-5">
        <!-- category card -->
        <div class="w-9/12 sm:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto my-5" v-for="(card,cardIndex) in product[productIndex.index[0]].productType" :key="cardIndex">
          <div class="min-h-full flex flex-col items-center bg-gray-200 mx-3 rounded-md cursor-pointer">
            <h3 class="uppercase text-md lg:text-xl text-black text-center border-b border-gray-400 bg-black bg-opacity-10 w-full py-2">{{card.brand}}  {{card.name}}</h3>
            <div class="w-52 h-52">
                <img class="w-auto h-full m-auto py-4 px-2" :src="card.img" alt="product">
            </div>
            <div class="p-3 text-black">{{card.desc}}</div>
            <div class="flex justify-between items-center w-full p-3">
              <!-- details button -->
              <button class="flex items-center hover:text-white" @click="addCart(card,cardIndex)">
                  <a class="border border-gray-400 p-1">
                      <svg class="w-5 h-5 text-red-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                  </a>
                  <p class="ml-2 text-green-800 font-medium">Add to cart</p>
              </button>
              <!-- price -->
              <div class="text-right text-green-800 font-semibold text-xl">{{card.price}} EUR</div>
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
//import { onUpdated } from 'vue';

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
      // force to change open product dynamic class states
      function addCart(card){
        if (toCartItems.includes(card) === false) {
          card.total=1;
          toCartItems.push(card)
        } else{
          card.total++;
        }
      }

      /*onUpdated(()=>{
        if (condition) {
          
        }
      })*/

      return{
          product,
          productIndex,
          addCart
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