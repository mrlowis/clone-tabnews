import React from 'react';
import './App.css';
import udmImage from './udmbb.png'; // Certifique-se de salvar sua imagem em `src`

function Home() {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '20px' }}>
            <h1>Vai tomar no cu Portal RPG!</h1>
            <p>
                Vem pro <a href="https://universodomedo.com" style={{ color: '#fff' }}>UDM</a>, porra!
            </p>
            <img src={udmImage} alt="Imagem UDM" style={{ width: '100%', height: 'auto' }} />
        </div>
    );
}

export default Home;
