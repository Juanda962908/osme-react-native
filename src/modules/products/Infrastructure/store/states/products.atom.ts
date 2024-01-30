import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const initialState = {
    isLastPage: false,
    limit: 10,
    offset: 0,
    isLoading: false,
    products: []
}

export const productsStateAtom = atom({
    key: 'ProductsState',
    default: initialState,
});



