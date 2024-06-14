import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function SignupPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''} min-h-screen bg-gradient-to-r from-orange-500 to-orange-800 flex items-center justify-center`}>
      <div className="forms-container">
        <div className="signin-signup bg-white shadow-lg rounded-lg p-8">
          {!isSignUpMode ? (
            <form action="#" className="sign-in-form">
              <h2 className="text-2xl mb-4">Sign in</h2>
              <div className="input-field mb-4">
                <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
                <input type="text" placeholder="Username" className="border border-gray-300 rounded-lg py-2 px-4 w-full" />
              </div>
              <div className="input-field mb-4">
                <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
                <input type="password" placeholder="Password" className="border border-gray-300 rounded-lg py-2 px-4 w-full" />
              </div>
              <button className='btn bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-lg w-full mb-4'>Login</button>
              <p className="text-sm text-gray-500"> Sign in with social platforms</p>
              <div className="social-media flex justify-center space-x-4">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faFacebookF} className='text-blue-500' />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} className='text-blue-500' />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faGoogle} className='text-blue-500' />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} className='text-blue-500' />
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">Don't have an account? <button onClick={handleSignUpClick} className="text-blue-500 cursor-pointer focus:outline-none">Sign Up</button></p>
            </form>
          ) : (
            <form action="#" className="sign-up-form">
              <h2 className="text-2xl mb-4">Sign up</h2>
              <div className="input-field mb-4">
                <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
                <input type="text" placeholder="Username" className="border border-gray-300 rounded-lg py-2 px-4 w-full" />
              </div>
              <div className="input-field mb-4">
                <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto'/>
                <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg py-2 px-4 w-full" />
              </div>
              <div className="input-field mb-4">
                <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
                <input type="password" placeholder="Password" className="border border-gray-300 rounded-lg py-2 px-4 w-full" />
              </div>
              <button className='btn bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-lg w-full mb-4'>Sign Up</button>
              <p className="text-sm text-gray-500"> Or Sign up with social platforms</p>
              <div className="social-media flex justify-center space-x-4">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faFacebookF} className='text-blue-500' />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} className='text-blue-500' />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faGoogle} className='text-blue-500' />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} className='text-blue-500' />
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">Already have an account? <button onClick={handleSignInClick} className="text-blue-500 cursor-pointer focus:outline-none">Sign In</button></p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignupPage;






