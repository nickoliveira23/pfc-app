import React from 'react';

import './style.css';

import logoImg from '../../assets/wonderlogo.png';
import ImagePreview from '../../assets/imagePreview.png';
import ImageGoogle from '../../assets/googleplay.png';
import ImageApple from '../../assets/applestore.png';


export default function Index(){
    return (
        <div>
            <header className="header-container">
                <a href="">
                    <img src={logoImg} alt="Wonder" />
                </a>
                <nav>
                    <ul>
                        <li><a href="">Produtos</a></li>
                        <li><a href="">Saiba mais</a></li>
                        <li><a href="">Conta</a></li>
                        <button onClick="" type="button">
                            Login
                        </button>
                    </ul>
                </nav>
            </header>
            <main className="index-container">
                <div className="text-area">
                    <h1>
                        Se relacione.<br></br>
                        Converse.<br></br>
                        Divirta-se.<br></br>
                    </h1>
                    <br></br>
                    <br></br>
                    <p>
                        Vá além do seu círculo social e se conecte com 
                        pessoas perto e longe de você. Você está prestes 
                        a ter a melhor experiência de relacionamentos 
                        online — tudo o que precisa são boas fotos e uma
                        bio legal para se destacar.
                    </p>
                </div>
                <div className="image-area">
                    <img src={ImagePreview} alt="Wonder" />
                </div>
                
                <section>
                    <h1>Baixe o aplicativo!</h1>
                    <div className="image-icon">
                        <img src={ImageGoogle} alt="Wonder" />
                    </div>
                    <div className="image-icon">
                        <img src={ImageApple} alt="Wonder" />
                    </div>
                </section>
                
                
            </main>
        </div>
    )
}
