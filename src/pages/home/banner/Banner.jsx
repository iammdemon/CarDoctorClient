import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return ( 
        <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img src={img1} className="w-full rounded-lg" />
                <div className="absolute left-0 top-0 text-white gap-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] h-full pl-10 flex items-center">
                    <div className='space-y-10'> 
                        <h2 className='text-6xl font-bold'>Affordable Price For<br></br>Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-[#FF3811] border-0 text-white hover:bg-[#b32306] mr-5'>Discover More</button>
                            <button className='btn btn-outline border-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-0 text-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5 bg-[#FF3811] text-white hover:bg-[#c22506]">❮</a> 
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-white hover:bg-[#c22506]">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src={img2} className="w-full rounded-lg" />
                <div className="absolute left-0 top-0 text-white gap-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] h-full pl-10 flex items-center">
                    <div className='space-y-10'> 
                        <h2 className='text-6xl font-bold'>Affordable Price For<br></br>Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-[#FF3811] border-0 text-white hover:bg-[#b32306] mr-5'>Discover More</button>
                            <button className='btn btn-outline border-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-0 text-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 bg-[#FF3811] text-white hover:bg-[#c22506]">❮</a> 
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] text-white hover:bg-[#c22506]">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src={img3} className="w-full rounded-lg" />
                <div className="absolute left-0 top-0 text-white gap-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] h-full pl-10 flex items-center">
                    <div className='space-y-10'> 
                        <h2 className='text-6xl font-bold'>Affordable Price For<br></br>Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-[#FF3811] border-0 text-white hover:bg-[#b32306] mr-5'>Discover More</button>
                            <button className='btn btn-outline border-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-0 text-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 bg-[#FF3811] text-white hover:bg-[#c22506]">❮</a> 
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] text-white hover:bg-[#c22506]">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src={img4} className="w-full rounded-lg" />
                <div className="absolute left-0 top-0 text-white gap-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] h-full pl-10 flex items-center">
                    <div className='space-y-10'> 
                        <h2 className='text-6xl font-bold'>Affordable Price For<br></br>Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-[#FF3811] border-0 text-white hover:bg-[#b32306] mr-5'>Discover More</button>
                            <button className='btn btn-outline border-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-0 text-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5 bg-[#FF3811] text-white hover:bg-[#c22506]">❮</a> 
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] text-white hover:bg-[#c22506]">❯</a>
                </div>
            </div> 
        </div>
     );
}
 
export default Banner;