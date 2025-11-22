import ProductsList from "@/components/ProductsList"

const ProductsPage = async ({searchParams}:{searchParams:Promise<{category:string}>}) => {

    const category = (await searchParams).category
    return (
    <div>
        <ProductsList category={category} params={"products"}/>
    </div>
    )
}

export default ProductsPage