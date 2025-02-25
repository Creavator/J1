import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jatayu_logo from '../../assets/jatayu_logo.png';

export function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'white' }}>
      <div className="flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <img src={jatayu_logo} alt="Jatayu Logo" className="w-50 h-50 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-black mb-4 font-advent-pro">JATAYU</h1>
        </div>
      </div>
    </div>
  );
}
