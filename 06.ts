interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    return products.reduce((maxProduct, currentProduct) =>
        currentProduct.price > maxProduct.price ? currentProduct : maxProduct
    );
}