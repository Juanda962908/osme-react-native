import { useRecoilState } from "recoil";
import { productsStateAtom } from "../../../Infrastructure/store/states/products.atom";
import { useEffect, useState } from "react";
import { useProductsEffects } from "../../../Infrastructure/store/effects/products.effects";
import { Keyboard } from "react-native";

export const useBodyController = (useCases) => {
    const [products, setProducts] = useRecoilState(productsStateAtom);

    const [isAtBottom, setIsAtBottom] = useState(false)
    const [filteredData, setFilteredData] = useState(products.products);
    const [query, setQuery] = useState('');

    const effects = useProductsEffects(products, setProducts, useCases)

    useEffect(() => {
        console.log("iniciando el component")
        loadNextPageFn()
        return () => {
        };
    }, [isAtBottom]);

    useEffect(() => {
        setFilteredData(products.products)
    }, [products]);


    const loadNextPageFn = async () => {
        await effects.loadNextPage()
    };

    const handleScroll = (event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const maxOffset = event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height;

        if (maxOffset - currentOffset <= 10) {
            console.log("Se hizo scroll en esta moneda")
            setIsAtBottom(true)
        } else {
            console.log("No Se hizo scroll en esta moneda")
            setIsAtBottom(false)
        }
    };

    const handleSearch = (text) => {
        const filtered = products.products.filter(item =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setQuery(text);
        setFilteredData(filtered);
    };

    const handleSearchEnd = () => {
        Keyboard.dismiss();
    };


    return {
        loadNextPageFn,
        handleScroll,
        handleSearch,
        query,
        filteredData,
        handleSearchEnd,
        products
    }
}
