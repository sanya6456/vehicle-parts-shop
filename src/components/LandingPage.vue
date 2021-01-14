<template>
    <div class="lp w-full">
        <div class="flex flex-wrap md:flex-nowrap min-h-screen container mx-auto w-11/12">
            <!-- LEFT TITLE -->
            <div class="flex-auto min-h-screen w-full md:min-h-auto text-gray-200 px-6 sm:px-12 md:px-0 sm:mx-6 md:mx-0 text-center md:text-left">
                <div class="flex flex-col justify-center items-center md:items-start min-h-full font-mono">
                    <div class="uppercase flex text-md sm:text-2xl text-gray-300"><p class="mt-1">featured</p><p class="border border-gray-500 text-red-800 ml-2 p-1">-15%</p></div>
                    <h1 class="uppercase text-4xl sm:text-6xl md:text-5xl xl:text-7xl mt-1">import parts</h1>
                    <h2 class="uppercase text-md sm:text-2xl md:text-xl xl:text-2xl text-red-800">for all type of imports</h2>
                    <button class="flex items-center mt-10 hover:text-white">
                        <a class="border border-gray-700 p-1">
                            <svg class="w-8 h-8 text-red-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                        <p class="ml-3 text-xl">View details</p>
                    </button>
                </div>
            </div>
            <!-- FORM -->
            <div class="flex-auto min-h-screen w-full md:min-h-auto text-gray-200 font-mono px-10">
                <div class="flex flex-col justify-center items-center md:items-start min-h-full">
                    <div class="flex justify-between items-center min-w-full">
                        <div class="flex-auto text-gray-200 text-3xl">Select your car</div>
                        <div class="flex-auto">
                            <svg class="block w-10 h-auto float-right cursor-pointer" @click="clearSelection" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                    </div>
                    <!-- brand -->
                    <form action="#" method="POST" class="mt-6 text-xl w-full text-gray-300">
                        <select required class="form-select bg-black bg-opacity-30 border border-gray-500 block w-full p-3 focus:outline-none" v-model="inputs.brand" @change="brandIndex">
                            <option class="bg-gray-700 text-gray-300" v-for="(brand,brandIndex) in select.brand" :key="brandIndex" :value="brand.name">{{brand.name}}</option>
                            <option :value="inputs.brand" disabled hidden selected>Brand</option>
                        </select>
                    </form>
                    <!-- vehicle -->
                    <form action="#" method="POST" class="mt-6 text-xl w-full text-gray-300">
                        <select required class="form-select bg-black bg-opacity-30 border border-gray-500 block w-full p-3 focus:outline-none" v-model="inputs.model" @change="modelIndex" :disabled="inputs.modelDisabled">
                            <option class="bg-gray-700 text-gray-300" v-for="(model,modelIndex) in select.brand[inputs.selectedBrandIndex].model" :key="modelIndex" :value="model.name">{{model.name}}</option>
                            <option :value="inputs.model" disabled hidden selected>Model</option>
                        </select>
                    </form>
                    <!-- year -->
                    <form action="#" method="POST" class="mt-6 text-xl w-full text-gray-300">
                        <select required class="form-select bg-black bg-opacity-30 border border-gray-500 block w-full p-3 focus:outline-none" v-model="inputs.date" @change="yearIndex" :disabled="inputs.yearDisabled">
                            <option class="bg-gray-700 text-gray-300" v-for="(year,yearIndex) in select.brand[inputs.selectedBrandIndex].model[inputs.selectedModelIndex].gen" :key="yearIndex" :value="year.date">{{year.date}}</option>
                            <option :value="inputs.date" disabled hidden selected>Date</option>
                        </select>
                    </form>
                    <!-- model -->
                    <form action="#" method="POST" class="mt-6 text-xl w-full text-gray-300">
                        <select required class="form-select bg-black bg-opacity-30 border border-gray-500 block w-full p-3 focus:outline-none" v-model="inputs.type" :disabled="inputs.typeDisabled">
                            <option class="bg-gray-700 text-gray-300" v-for="(type,typeIndex) in select.brand[inputs.selectedBrandIndex].model[inputs.selectedModelIndex].gen[inputs.selectedYearIndex].type" :key="typeIndex" :value="type">{{type}}</option>
                            <option :value="inputs.type" disabled hidden selected>Type</option>
                        </select>
                    </form>
                    <!-- engine -->
                    <form action="#" method="POST" class="mt-6 text-xl w-full text-gray-300">
                        <select required class="form-select bg-black bg-opacity-30 border border-gray-500 block w-full p-3 focus:outline-none" v-model="inputs.engine" :disabled="inputs.engineDisabled">
                            <option class="bg-gray-700 text-gray-300" v-for="(engine,engineIndex) in select.brand[inputs.selectedBrandIndex].model[inputs.selectedModelIndex].gen[inputs.selectedYearIndex].engine" :key="engineIndex" :value="engine">{{engine}}</option>
                            <option :value="inputs.engine" disabled hidden selected>Engine</option>
                        </select>
                    </form>
                    <!-- search button -->
                    <button class="flex self-start items-center mt-12 hover:text-white" @click="searchCar" :disabled='inputs.searchButtonDisabled'>
                        <a class="border border-gray-700 p-1">
                            <svg class="w-8 h-8 text-red-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                        <p class="ml-3 text-xl">Search my car</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onUpdated, reactive, toRefs } from 'vue';
import router from '@/router/index.js';
import useSelect from '@/modules/cars.js';

export default {
name:'LandingPage',

    setup(){
        const { select, state }=useSelect();

        const inputs=reactive({
            brand:'',
            model:'',
            date:'',
            type:'',
            engine:'',

            selectedBrandIndex:0,    // Selected brand index
            selectedModelIndex:0,    // Selected model index
            selectedYearIndex:0,     // Selected year index

            modelDisabled:true,     // Select disable condition
            yearDisabled:true,      // Select disable condition
            typeDisabled:true,      // Select disable condition
            engineDisabled:true,    // Select disable condition

            searchButtonDisabled:true,    // Search button disable condition 
        })

        // You can't choose from end to start OR mixed like from the center if the options
        onUpdated(()=>{
            // label to label make select to active state
            if(inputs.brand!=''){
            inputs.modelDisabled=false;
            }
            if(inputs.model!=''){
                inputs.yearDisabled=false;
            }
            if(inputs.date!=''){
                inputs.typeDisabled=false;
                inputs.engineDisabled=false;
            }

            //search button disable condition
            if(inputs.brand!='' && inputs.model!='' && inputs.date!='' && inputs.type!='' && inputs.engine!=''){
                inputs.searchButtonDisabled=false;
            }
        })

        // Dinamicly change selected brand's index
        var brandChangeDetection=0;
        function brandIndex(event){
            // It reset array index on every change (THIS FUNCTION IS REQUIRED, TO SKIP AN ERROR)
            brandChangeDetection++;
            if(brandChangeDetection>0){
                inputs.selectedModelIndex=0;
                inputs.selectedYearIndex=0;
            }
            inputs.selectedBrandIndex=event.target.selectedIndex;   // push brand index to inputs
        }

        // Dinamicly change selected model's index
        function modelIndex(event){
            inputs.selectedModelIndex=event.target.selectedIndex;   // push model index to inputs
        }

        // Dinamicly change selected model's index
        function yearIndex(event){
            inputs.selectedYearIndex=event.target.selectedIndex;
        }

        // onClick 'Search my car'
        function searchCar(){
            state.carData=[];   // make sure that array is empty before we push data to it
            state.carData.push(inputs.brand, inputs.model, inputs.date, inputs.type, inputs.engine);  // push selected values to cars.js array (to make it globaly)
            router.push('/parts');   // go to PartsByCar view
        }

        // Clear selected values onClick trash button
        function clearSelection(){
            inputs.brand=''
            inputs.model=''
            inputs.date=''
            inputs.type=''
            inputs.engine=''

            inputs.modelDisabled=true
            inputs.yearDisabled=true
            inputs.typeDisabled=true
            inputs.engineDisabled=true
        }


        return{
            select,
            inputs,
            ...toRefs(inputs),
            brandIndex,
            modelIndex,
            yearIndex,
            searchCar,
            clearSelection
        }
    }

}
</script>

<style lang="scss" scoped>
    .lp{
        background-image: linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7),rgba(0,0,0,.7)) ,url(../assets/gallery/bg/rx7-wp-hd.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }
</style>

