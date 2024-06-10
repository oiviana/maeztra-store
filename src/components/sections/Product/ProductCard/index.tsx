interface ProductProps {
  productId: string;
  productName: string;
  productDescription: string;
  productImg: string;
  price: number;
  sku: {
    color: string;
    src: string;
  }[];
}
[];

export default function ProductCard({
  price,
  productDescription,
  productImg,
  productName,
  sku,
}: ProductProps) {
  
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(price);


  return (
    <div className="flex flex-col w-[19.25rem] h-[37.5rem]">
      <div className="w-full h-[23.75rem] overflow-hidden">
        <img src={productImg} alt="test" />
      </div>
      <div className="flex flex-1 flex-col w-full  pt-2 px-5 gap-2">
        <div className="flex gap-2">
          {sku.map((item, index) => (
            <img src={item?.src} alt={item?.color} key={index}/>
          ))}
        </div>
        <span className="text-primary-gray font-bold text-xl">{formattedPrice}</span>
        <h3 className="text-base">{productName}</h3>
        <p className="text-xs max-w-[13.75rem] h-12 overflow-hidden text-ellipsis line-clamp-[3]">
          {productDescription}
        </p>
        <button className="w-full bg-primary-yellow rounded h-9 text-primary-white">
          Adicionar
        </button>
      </div>
    </div>
  );
}
