<template>
  <div class="item">
    <div class="category_item">
      <span class="category_img">
        <img :src="require(`~/assets/icon/${name}.png`)">
      </span>
      <span class="category_name" :class="{'drop_down':dropDownButtonClicked}">{{name}}</span>
      <i class='bx bx-chevron-down' @click.prevent="toggleMenu" :class="{'show_menu': downButtonClicked , 'drop_down':dropDownButtonClicked }" ></i>
    </div>
    <sub-menu
      :subCategoryMap="subCategoryMap"
      :name="name"
      :downButtonClicked="downButtonClicked"
    />
  </div>
</template>


<script lang="ts">
import {computed, defineComponent, ref, useStore} from '@nuxtjs/composition-api'
import SubMenu from '@/components/SubMenu.vue';
import {ButtonStoreType} from "~/store/button";


export default defineComponent({
  components:{
    SubMenu
  },
  props:['name','icon','subCategoryMap'],
  setup(){
    const store=useStore<ButtonStoreType>();

    const dropDownButtonClicked = ref(computed(()=>store.getters["button/dropDownButtonState"]));
    let downButtonClicked=ref(false);

    const toggleMenu=()=>{
      downButtonClicked.value=!downButtonClicked.value;
    }

    return {toggleMenu,downButtonClicked,dropDownButtonClicked};
  }
});
</script>


<style lang="scss" scoped>

.item{
  position:relative;
}


.category_item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  trasition: all 0.4s ease;


  &:hover{
    background: #1d1b31;
  }


  .category_img{
    height: 50px;
    min-width: 78px;
    line-height: 50px;
    text-align: center;
  }


  img{
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(298deg) brightness(103%) contrast(103%);
    vertical-align:middle;
  }


  a{
    display: flex;
    align-items: center;
    text-decoration: none;
  }


  i{
    height: 50px;
    min-width: 78px;
    color:#fff;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    transition: all 0.3s ease;
    cursor: pointer;

    &.drop_down{
      display: none;
    }

    &.show_menu{
      transform: rotate(-180deg);
    }
  }


  .category_name{
    font-size: 18px;
    font-weight: 400;
    color:#fff;

    &.drop_down{
      display: none;
    }
  }
}



</style>
