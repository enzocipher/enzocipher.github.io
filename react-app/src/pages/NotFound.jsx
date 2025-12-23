import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: linear-gradient(135deg, #fde2e4, #f8edeb, #e8e8e4);
          font-family: 'Poppins', sans-serif;
          color: #4b4453;
        }

        .not-found-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          text-align: center;
          padding: 20px;
          position: relative;
        }

        .not-found {
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .not-found h1 {
          font-size: clamp(4rem, 15vw, 8rem);
          color: #f7c9d6;
          margin-bottom: 1rem;
          text-shadow: 3px 3px 0px rgba(0,0,0,0.1);
        }

        .not-found p {
          font-size: clamp(1rem, 4vw, 1.3rem);
          margin-bottom: 2rem;
          max-width: 500px;
          line-height: 1.6;
          color: #4b4453;
        }

        .not-found .btn {
          background: #f7c9d6;
          color: white;
          padding: 12px 30px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 500;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: inline-block;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .not-found .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(247, 201, 214, 0.4);
          background: #f5b8c8;
        }

        .not-found-footer {
          margin-top: auto;
          padding: 2rem 0 1rem;
          color: #9a8c98;
          font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .not-found-container {
            padding: 15px;
          }
          
          .not-found h1 {
            font-size: 5rem;
          }
          
          .not-found .btn {
            padding: 10px 25px;
          }
        }

        @media (max-width: 480px) {
          .not-found h1 {
            font-size: 4rem;
          }
          
          .not-found p {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="not-found-container">
        <section className="not-found">
          <div className="container">
            <h1>404</h1>
            <p>Lo que buscas ya no está o quizás nunca existió...</p>
            <Link to="/" className="btn">Volver al inicio</Link>
          </div>
        </section>
        
        <footer className="not-found-footer">
          <p>© 2025 Enzo Favio — Hecho con amor y prompts digo Café</p>
        </footer>
      </div>
    </>
  )
}