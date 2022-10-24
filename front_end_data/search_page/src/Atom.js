import { atom } from 'recoil';

export const inputKeyWord = atom({
  key: 'inputKeyWord',
  default: '',
})

export const products = atom({
  key: 'products',
  default: [],
})

export const page = atom({
  key: 'page',
  default: '',
})

export const if_no_data = atom({
  key: 'if_no_data',
  default: false,
})
