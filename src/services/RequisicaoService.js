import axios from 'axios';
import { baseURL } from '../enviroment';
import { token } from './axios';

const postRequisicao = async (requisicao) => {
    if(!requisicao) return;
     
    const URL = `${baseURL}/requisicoes/`;

    try {
        const response = await axios.post(URL, requisicao, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `Bearer ${token}`,
            },
            params: {
                token: token,
            },
        });
        
        return (response.status === 201);
    } catch (error) {
        console.log('RequisicaoService/postRequisicao::', error);
    }
}

const getAproveitamentos = async () => {
    const URL = `${baseURL}/requisicoes/aproveitamento/`;
    console.log(URL);    

    try {
        const response = await axios.get(URL, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `Bearer ${token}`,
            },
            params: {
                token: token,
            },
        });

        return (response.data);
    } catch (error) {
        console.log('RequisicaoService/getAproveitamentos::', error);
    }
}

const getCertificacoes = async () => {
    const URL = `${baseURL}/requisicoes/certificacao/`;

    try {
        const response = await axios.get(URL, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `Bearer ${token}`,
            },
            params: {
                token: token,
            },
        });
        
        return (response.data);
    } catch (error) {
        console.log('RequisicaoService/postRequisicao::', error);
    }
}

export { 
    postRequisicao,
    getAproveitamentos,
    getCertificacoes,
};