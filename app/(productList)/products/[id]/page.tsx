const ProductDetails = async ({ params }: { params: { id: string[] } }) => {
  const { id } = await params;


  return <div>ProductDetails {id} </div>;
};
export default ProductDetails;
