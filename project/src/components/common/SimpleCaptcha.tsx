import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

interface SimpleCaptchaProps {
  onVerify: (verified: boolean) => void;
}

/**
 * A simple CAPTCHA component to protect forms from bots
 */
export const SimpleCaptcha: React.FC<SimpleCaptchaProps> = ({ onVerify }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  // Generate a random captcha text
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserInput('');
    setError('');
  };

  // Initialize captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Verify the captcha
  const verifyCaptcha = () => {
    if (userInput.trim() === captchaText) {
      setIsVerified(true);
      setError('');
      onVerify(true);
    } else {
      setAttempts(prev => prev + 1);
      setError('Incorrect CAPTCHA. Please try again.');
      generateCaptcha();
      onVerify(false);
      
      // If too many failed attempts, add a delay before allowing another try
      if (attempts >= 3) {
        setError('Too many failed attempts. Please wait a moment before trying again.');
        setTimeout(() => {
          setAttempts(0);
          setError('');
        }, 5000);
      }
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    if (error) setError('');
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyCaptcha();
  };

  return (
    <div className="mt-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="captcha" className="text-sm font-medium text-gray-300">
          Security Check
        </label>
        
        <div className="flex items-center space-x-2">
          <div 
            className="bg-gray-700 px-4 py-2 rounded-lg font-mono text-lg tracking-wider select-none"
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18C11.9 16 13.5 14 16 14C18.5 14 20.1 16 21 18M9 9H15L12 6M15 9H21L18 6\' stroke=\'%23666\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E")',
              backgroundSize: '100px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3), -1px -1px 2px rgba(255,255,255,0.1)'
            }}
          >
            {captchaText}
          </div>
          
          <button 
            type="button"
            onClick={generateCaptcha}
            className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            aria-label="Generate new CAPTCHA"
          >
            <RefreshCw size={18} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            id="captcha"
            value={userInput}
            onChange={handleInputChange}
            className={`flex-1 px-4 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
              error ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="Enter the text above"
            disabled={isVerified}
            aria-invalid={!!error}
            aria-describedby={error ? "captcha-error" : undefined}
          />
          
          {!isVerified && (
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              disabled={attempts >= 3}
            >
              Verify
            </button>
          )}
        </form>
        
        {error && (
          <p id="captcha-error" className="text-sm text-red-500">
            {error}
          </p>
        )}
        
        {isVerified && (
          <p className="text-sm text-green-500">
            Verification successful!
          </p>
        )}
      </div>
    </div>
  );
};
