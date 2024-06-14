import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function LoginPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
    // Navigate to HomePage
    navigate('/home'); // Use navigate instead of history.push
  };
  return (
    <div style={{ minHeight: '100vh' }} className={`container ${isSignUpMode ? 'sign-up-mode' : ''} bg-gradient-to-r from-orange-500 to-orange-800 flex items-center justify-center`}>
      <div style={{ maxWidth: '400px' }} className="forms-container w-full">
        <div style={{ padding: '2rem', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }} className="signin-signup bg-white w-full">
          {!isSignUpMode ? (
            <form action="#" className="sign-in-form">
              <h2 style={{ marginBottom: '1rem' }} className="text-2xl">Sign in</h2>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }} className="input-field">
                <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5rem' }} />
                <input
                  type="text"
                  placeholder="Username"
                  style={{
                    flexGrow: 1,
                    padding: '0.75rem',
                    borderRadius: '10px',
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    backgroundColor: '#f0f0f0',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }} className="input-field">
                <FontAwesomeIcon icon={faLock} style={{ marginRight: '0.5rem' }} />
                <input
                  type="password"
                  placeholder="Password"
                  style={{
                    flexGrow: 1,
                    padding: '0.75rem',
                    borderRadius: '10px',
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    backgroundColor: '#f0f0f0',
                  }}
                />
              </div>
              <button
                style={{
                  background: 'linear-gradient(135deg, #ff8c00, #ffaf50)',
                  border: 'none',
                  padding: '0.75rem',
                  color: 'white',
                  fontSize: '1rem',
                  borderRadius: '50px',
                  width: '100%',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
                className='btn mb-4'
              >
                Login
              </button>
              <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '1rem' }} className="text-sm">Sign in with social platforms</p>
              <div className="social-media flex justify-center space-x-4">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faFacebookF} style={{ color: '#1877f2', width: '40px', height: '40px', textAlign: 'center', lineHeight: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s' }} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2', width: '40px', height: '40px', textAlign: 'center', lineHeight: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s' }} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faGoogle} style={{ color: '#db4437', width: '40px', height: '40px', textAlign: 'center', lineHeight: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s' }} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#0077b5', width: '40px', height: '40px', textAlign: 'center', lineHeight: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s' }} />
                </a>
              </div>
              <p style={{ color: '#6b7280', textAlign: 'center', marginTop: '1rem' }} className="text-sm">Don't have an account? <button onClick={handleSignUpClick} className="text-blue-500 cursor-pointer focus:outline-none">Sign Up</button></p>
            </form>
          ) : (
            <form action="#" className="sign-up-form">
              <h2 style={{ marginBottom: '1rem' }} className="text-2xl">Sign up</h2>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }} className="input-field">
                <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5rem' }} />
                <input
                  type="text"
                  placeholder="Username"
                  style={{
                    flexGrow: 1,
                    padding: '0.75rem',
                    borderRadius: '10px',
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    backgroundColor: '#f0f0f0',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }} className="input-field">
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0.5rem' }} />
                <input
                  type="email"
                  placeholder="Email"
                  style={{
                    flexGrow: 1,
                    padding: '0.75rem',
                    borderRadius: '10px',
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    backgroundColor: '#f0f0f0',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }} className="input-field">
                <FontAwesomeIcon icon={faLock} style={{ marginRight: '0.5rem' }} />
                <input
                  type="password"
                  placeholder="Password"
                  style={{
                    flexGrow: 1,
                    padding: '0.75rem',
                    borderRadius: '10px',
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    backgroundColor: '#f0f0f0',
                  }}
                />
              </div>
              <button
                style={{
                  background: 'linear-gradient(135deg, #ff8c00, #ffaf50)',
                  border: 'none',
                  padding: '0.75rem',
                  color: 'white',
                  fontSize: '1rem',
                  borderRadius: '50px',
                  width: '100%',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
                className='btn mb-4'
              >
                Sign Up
              </button>
              <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '1rem' }} className="text-sm">Or Sign up with social platforms</p>
              <div className="social-media flex justify-center space-x-4">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faFacebookF} style={{ color: '#1877f2', width: '40px', height: '40px', textAlign: 'center', lineHeight: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s' }} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2', width: '40px', height: '40px', textAlign: 'center', lineHeight: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s' }} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faGoogle} style={{ color: '#db4437', width: '40px', height: '40px', textAlign: 'center', lineHeight: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s' }} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#0077b5', width: '40px', height: '40px', textAlign: 'center', lineHeight: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s' }} />
                </a>
              </div>
              <p style={{ color: '#6b7280', textAlign: 'center', marginTop: '1rem' }} className="text-sm">Already have an account? <button onClick={handleSignInClick} className="text-blue-500 cursor-pointer focus:outline-none">Sign In</button></p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


