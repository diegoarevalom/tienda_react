
const Card = (props) => {

  const { img, description, price, inventory } = props;

  return (
    <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col gap-2 text-center items-center text-gray-300">
      <img src={img} className="w-40 h-40 object-cover -mt-20 shadow-xl rounded-full" />
      <p className="test-xl">{description}</p>
      <span className="text-gray-400">{price}</span>
      <p className="text-gray-600">{inventory}</p>
    </div>
  )
}

export default Card;