<template>
  <nav class="fixed w-full bg-black border-b border-gray-600 h-16">
    <div class="w-full mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <svg @click="toggleHamburger" id="closed" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open. -->
            <svg @click="toggleHamburger" id="opened" class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- Normal nav content (left side) -->
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden md:block">
            <div class="flex">
              <router-link to="/" class="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white active-link">Home</router-link>
              <a href="#" class="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Tools</a>
              <a href="#" class="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Clearance</a>
              <a href="#" class="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">About</a>
              <a href="#" class="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
        <!-- Nav content (right side) -->
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- phone -->
          <button class="relative flex ml-4 focus:outline-none">
            <svg class="flex-1 w-6 h-6 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span class="flex text-gray-400 text-sm self-center ml-1">+36 70 63 26 326</span>
          </button>
          <!-- Profile dropdown -->
          <div class="ml-4 relative">
            <div>
              <button @click="openProfile" class="bg-gray-800 flex text-sm rounded-full focus:outline-none" id="user-menu" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <svg class="w-6 h-6 rounded-full text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
            <!-- Profile dropdown content -->
            <div id="profile" class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem">Your Profile</a>
              <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem">Settings</a>
              <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem">Sign out</a>
            </div>
          </div>

          <!-- shopping cart -->
          <button class="relative flex ml-4 focus:outline-none" @click="toggleCart">
            <svg class="flex-1 w-8 h-8 fill-current text-gray-400 pr-1 pt-1" viewbox="0 0 24 24">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
            </svg>
            <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">{{toCartItems.cartTotal}}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Hamburger menu content -->
    <div class="hidden md:hidden bg-black bg-opacity-90 absolute w-full border-b border-gray-800 z-20" id="hamburger-menu-content">
      <div class="pt-2 pb-3 space-y-1 flex flex-col text-center">
          <router-link to="/" class="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white active-link">Home</router-link>
          <a href="#" class="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Tools</a>
          <a href="#" class="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Clearance</a>
          <a href="#" class="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">About Us</a>
          <a href="#" class="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Contact Us</a>
      </div>
    </div>
      <!-- Cart -->
    <div :class="cart.toggle" class="right-0 bottom-0 bg-black bg-opacity-90 w-screen sm:w-2/3 lg:w-1/2 xl:w-1/3 calc-height">
      <Cart/>
    </div>
  </nav>



</template>

<script>
import Cart from '@/components/Cart.vue';
import useSelect from '@/modules/cars.js';
import { reactive } from 'vue';

export default {
  name: 'Navigation',
  components:{
    Cart
  },
  setup(){
    const { toCartItems }=useSelect();

    // open and close hamburger menu
    function toggleHamburger(){
      var hamburgerContent=document.getElementById('hamburger-menu-content');
      var opened=document.getElementById('opened');
      var closed=document.getElementById('closed');
      hamburgerContent.classList.toggle('block');
      hamburgerContent.classList.toggle('hidden');
      
      // change icon. Based on mood
      if(hamburgerContent.classList.contains('block')){
        opened.classList.toggle('hidden')
        closed.classList.toggle('hidden')
      } else{
        opened.classList.toggle('hidden')
        closed.classList.toggle('hidden')
      }
    }

    // open profile
    function openProfile(){
      var openProfile=document.getElementById('profile');
      openProfile.classList.toggle('hidden');
    }

    //cart toggle
    let cart=reactive({
      toggle:'hidden',
      detectCartClicks:0
    })

    function toggleCart(){
      cart.detectCartClicks++;

      if(cart.detectCartClicks%2===0){
        cart.toggle='hidden';
      } else{
        cart.toggle='fixed';
      }
    }

    
    return{
      toggleHamburger,
      openProfile,
      toggleCart,
      cart,
      toCartItems
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .active-link{
    color: white;
  }
  .calc-height{
    height: calc(100% - 4rem);
  }
</style>
