import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logosImg from '../../assets/logo.svg'
import './style.css';

import api from '../../services/Api'

function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId]);

    async function handleDelete(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(x => x.id != id))
        } catch (err) {
            alert("Erro ao deletar o caso, tente novamente.")
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push("/");
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logosImg} alt="Be The Hero" />
                <span>Bem Vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={22} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(x => {
                    return (
                        <li key={x.id}>
                            <strong>CASO:</strong>
                            <p>{x.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{x.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(x.value)}</p>

                            <button onClick={() => handleDelete(x.id)} type="button">
                                <FiTrash2 size={22} color="#a8a8b3" />
                            </button>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default Profile;