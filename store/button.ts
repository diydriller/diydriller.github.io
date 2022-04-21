import {InjectionKey , useStore as buttonUseStore} from "@nuxtjs/composition-api";
import {Store as VuexStore} from 'vuex'

export type ButtonStoreType = {
  module: ButtonStateType
}

type ButtonStateType = {
  dropDownButtonClicked : boolean;
}

export const key: InjectionKey<VuexStore<ButtonStateType>> = Symbol();

export const state = (): ButtonStateType => ({
  dropDownButtonClicked: false
});

export const getters={
  dropDownButtonState(state:ButtonStateType){
    return state.dropDownButtonClicked;
  }
}

export const mutations = {
  toggleDropDown(state:ButtonStateType){
    state.dropDownButtonClicked=!state.dropDownButtonClicked;
  }
};

export const useStore = () => {
  return buttonUseStore(key);
};






