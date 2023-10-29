import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';


const About = () => {
    return ( 
        <div className="hero h-[600px]">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl " />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 border-8 border-white top-1/2" />
                </div>
                <div className='lg:w-1/2'>
                    <h2 className='text-2xl text-[#FF3811] font-bold'>About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className='btn bg-[#FF3811] border-0 text-white hover:bg-[#b32306] mt-5'>Get More Info</button>
                </div>
            </div>
        </div>
     );
}
 
export default About;