import { FaArrowRightLong } from "react-icons/fa6";



const ServicesCard = ({service}) => {

    const {title, img, price} = service;


    return ( 
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-left">{title}</h2>
                
                <div className="card-actions flex items-center justify-between">
                    <p className="text-lefr">Price: <span className="font-bold">${price}</span></p>
                    <button className='btn text-[#FF3811] mr-5'><FaArrowRightLong /></button>
                </div>
            </div>
        </div>
     );
}
 
export default ServicesCard;