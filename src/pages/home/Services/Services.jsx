import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return ( 
        <div>
            <div className="space-y-3 lg:mt-10 md:mt-96 mt-72">
                <h3 className="text-2xl text-[#FF3811] font-bold text-center">Services</h3>
                <h2 className="text-5xl font-bold text-center">Our Service Area</h2>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:my-10 md:my-20 container mx-auto">
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
     );
}
 
export default Services;