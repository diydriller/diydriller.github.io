<template>
  <div class="item">
    <div class="category_item">
      <span class="category_img">
        <img :src="require(`~/assets/icon/${title}.png`)">
      </span>
      <span class="category_name" :class="{'drop_down':dropDownButtonClicked}">{{title}}</span>
      <i class='bx bx-chevron-down' @click.prevent="toggleMenu" :class="{'show_menu': downButtonClicked , 'drop_down':dropDownButtonClicked }" ></i>
    </div>
    <sub-menu
      :subCategories="subCategories"
      :title="title"
      :downButtonClicked="downButtonClicked"
      class="sub_menu"
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
  props:['title','icon','subCategories'],
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


<style scoped>

.item{
  position:relative;
}

/* 카테고리 아이템 */
.category_item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  trasition: all 0.4s ease;
}

.category_item:hover{
  background: #1d1b31;
}

.item:hover .sub_menu.drop_down{
  opacity:1;
  pointer-events: auto;
  top:0px;
}

/* 카테고리 아이템 > 이미지 */
.category_item .category_img{
  height: 50px;
  min-width: 78px;
  line-height: 50px;
  text-align: center;
}

.category_item img{
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(298deg) brightness(103%) contrast(103%);
  vertical-align:middle;
}

.category_item a{
  display: flex;
  align-items: center;
  text-decoration: none;
}

/* 카테고리 아이템 > 다운 버튼 */
.category_item i{
  height: 50px;
  min-width: 78px;
  color:#fff;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.category_item i.drop_down {
  display: none
}

i.show_menu{
  transform: rotate(-180deg);
}


/* 카테고리 아이템 > 카테고리 이름 */
.category_item .category_name{
  font-size: 18px;
  font-weight: 400;
  color:#fff;
}

.category_item .category_name.drop_down{
  display: none;
}

</style>
