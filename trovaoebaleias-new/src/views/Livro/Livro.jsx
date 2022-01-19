import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';

import { useSelector, useDispatch} from 'react-redux'

import { selectBooksById, addBookServer, updateBookServer, deleteBookServer } from 'redux/booksSlice'

import { livroSchema } from './livroSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import NotFound from "../../img/not_found.svg";
import styles from './Livro.module.scss'

const Livro = () => {
    const [redirect, setRedirect] = useState(false)
    const dispatch = useDispatch()

    const { livroId } = useParams()
    const creationMode = livroId === "new"
    const bookFound = useSelector(state => selectBooksById(state, livroId))

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(livroSchema)
    });

    const [livroOnLoad, setLivroOnLoad] = useState(
        livroId ? bookFound ?? livroSchema.cast({}): livroSchema.cast({})
    )

    useEffect(() => {
        if (creationMode) {
            return
        }

        if (bookFound) {
            loadBookData(bookFound)
        }

    }, [livroId])

    const loadBookData = (selectedBook) => {
        if (!Object.keys(selectedBook)) {
            setRedirect("/home")
            return
        }

        setLivroOnLoad({
            author: selectedBook.author,
            id: selectedBook.id,
            src: selectedBook.src,
            title: selectedBook.title,
        })
    }

    const handleAddClick = (bookData) => {
        dispatch(addBookServer(bookData))
        setRedirect("/livros")
    }
    const handleUpdateClick = (bookData) => {
        dispatch(updateBookServer(bookData))
        setRedirect("/livros")
    }
    const handleRemoveClick = (bookData) => {
       dispatch(deleteBookServer(bookData.id))
       setRedirect("/livros") 
    }

    if (redirect) {
        return <Redirect push to={redirect} />
    }

    return ( 
        <section className={styles["livro"]}>
            <img src={livroOnLoad?.src || NotFound} className={styles["livro-image"]} />

            <div className={styles["livro-form"]}>
                <div className={styles["livro-form-info"]}>
                    <div className={styles["livro-form-info-title"]}>
                        <label>Título: </label>
                        <input
                            type="text"  
                            className={styles["livro-form-info-input"]} 
                            id="title" 
                            defaultValue={livroOnLoad?.title} 
                            {...register}
                        />
                        <span>{errors?.title?.message}</span>
                    </div>

                    <div className={styles["livro-form-info-author"]}>
                        <label>Autor: </label>
                        <input
                            type="text" 
                            className={styles["livro-form-info-input"]} 
                            id="author"
                            defaultValue={livroOnLoad?.author} 
                            {...register}
                        />
                        <span>{errors?.author?.message}</span>
                    </div>
                </div>

                <span className={styles["livro-form-submit"]}>
                    <button 
                        type="submit"
                        id="excluir" 
                        className={styles["livro-form-submit-secondary"]} 
                        onClick={handleRemoveClick}
                    >Excluir</button>
                    <button 
                        type="submit"
                        id="adicionar"  
                        className={styles["livro-form-submit-primary"]} 
                        onClick={creationMode 
                            ? handleSubmit(handleAddClick) 
                            : handleSubmit(handleUpdateClick)
                        }
                    >{`${creationMode ? 'Adicionar' : 'Atualizar'}`}</button>
                </span>
            </div>
        </section>
     );
}
 
export default Livro;