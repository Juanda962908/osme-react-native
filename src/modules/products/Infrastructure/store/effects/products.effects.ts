export const useProductsEffects = (products, setProducts, useCases) => {
    const loadNextPage = async () => {
        if (products.isLoading || products.isLastPage) return;
        setProducts({
            ...products,
            isLoading: true
        })
        try {
            const newProducts = await useCases.getProductsByPage({
                limit: products.limit,
                offset: products.offset,
            });

            console.log("////////", newProducts)
            if (newProducts.length === 0) {
                setProducts({
                    ...products,
                    isLoading: false,
                    isLastPage: true
                })
                return;
            }
            setProducts((prevProducts) => ({
                ...prevProducts,
                isLastPage: false,
                isLoading: false,
                offset: products.offset + 10,
                products: [...prevProducts.products, ...newProducts],
            }));
        } catch (error) {
            setProducts({
                ...products,
                isLoading: false
            })
        }
    };

    return {loadNextPage}
};

export default useProductsEffects;
