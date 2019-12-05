import axios from 'axios';
import { baseURL } from '../enviroment';
import { token } from './axios';

const getDisciplinas = async (curso) => {
    const URL = `${baseURL}/cursos/${curso.value}/disciplinas`; 
    try {
        const disciplinas = await axios.get(URL, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `Bearer ${token}`,
            },
            params: {
                token: token,
            },
        });

        return disciplinas.data;
    } catch (error) {
        console.log('DisciplinaService/getDisciplinas::', error);        
    }
}

export { getDisciplinas };