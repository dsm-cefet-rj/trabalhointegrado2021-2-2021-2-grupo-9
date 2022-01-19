import {string, object, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let livroSchema = object().shape(
    {
        title: string().required().max(30),
        author: string().required().max(12)
    }
)