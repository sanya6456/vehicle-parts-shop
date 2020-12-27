<template>
  <div class="parts-lp text-white min-h-screen w-full font-mono">
    <div class="container h-96 w-10/12 mx-auto">
      <div class="flex flex-col justify-center h-full text-gray-300">
        <div class="text-4xl text-gray-100">{{car.name}}</div>
        <div class="text-2xl">{{car.model}}</div>
        <div class="text-md">{{car.date}}</div>
        <div>{{car.type}}</div>
        <div>{{car.engine}}</div>
      </div>
    </div>
    <div class="container min-h-screen w-full sm:w-10/12 bg-black bg-opacity-75 rounded-t-2xl mx-auto">
      <div class="flex flex-wrap p-5">
        <!-- category card -->
        <div class="w-9/12 sm:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto my-5" v-for="(card,index) in category" :key="index" @click="clickCategory(index)">
          <div class="min-h-full flex flex-col items-center bg-gray-200 mx-6 rounded-md cursor-pointer">
            <h3 class="uppercase text-2xl text-black text-center border-b border-gray-400 bg-black bg-opacity-10 w-full py-2">{{card.categoryName}}</h3>
            <img class="w-3/5 h-auto m-auto py-4" :src="card.img" alt="brakes-category">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useSelect from '@/modules/cars.js';
import { reactive } from 'vue';
import router from '@/router/index.js';

export default {
  name:'PartsByCar',

  setup(){

    const { state, category, productIndex }=useSelect();  // Selected car options (from => cars.js)

    // Selected car options stored localy
    const car=reactive({
      name:state.carData[0],
      model:state.carData[1],
      date:state.carData[2],
      type:state.carData[3],
      engine:state.carData[4]
    })

    // if refresh the page, it will pop you back to router:'/' (home page)
    window.onload=function(){
      router.push('/')
    };

    function clickCategory(index){
      productIndex.index=[];
      productIndex.index.push(index);
      router.push('/products');
    }




    return{
      car,
      category,
      clickCategory
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
</style>