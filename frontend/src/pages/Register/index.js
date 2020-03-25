import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './style.css';
import logosImg from '../../assets/logo.svg'

import api from '../../services/Api';

function handleRegister(e){
    e.preventDefault();
}

function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logosImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={ { width: 80, marginLeft: 8 } }/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;