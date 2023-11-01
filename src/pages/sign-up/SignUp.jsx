
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';


const Signup = () => {


    const handleSignUp = event => {
        event.preventDefault();
    }

    return ( 
        <div className="hero lg:my-20 my-0">
            
            <div className="hero-content flex-col lg:flex-row flex justify-between">
                <div className="w-1/2 mr-12">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm border-2 border-[#FF3811]">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn bg-[#FF3811] hover:bg-[#cf2503] text-white"/>
                        </div>
                    </form>
                    <p className='text-center mb-5'>Already Have an Account? <Link className='text-[#FF3811] font-bold ' to="/login"> Login Now</Link></p>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;