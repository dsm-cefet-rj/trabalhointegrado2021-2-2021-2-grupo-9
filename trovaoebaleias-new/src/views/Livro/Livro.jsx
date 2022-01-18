import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';

import { useSelector, useDispatch} from 'react-redux'

import { addBook, updateBook, removeBook } from '../../redux'

import NotFound from "../../img/not_found.svg";

import styles from './Livro.module.scss'

const Livro = () => {
    const [bookData, setBookData] = useState({})
    const [redirect, setRedirect] = useState(false)
    const books = useSelector(state => state.books.books)
    const dispatch = useDispatch()

    const { livroId } = useParams()
    const creationMode = livroId === "new"

    useEffect(() => {
        if (creationMode) {
            return
        }

        const selectedBook = books.filter(book => book.id === +livroId)
        loadBookData(selectedBook)
    }, [livroId])

    const loadBookData = (selectedBook) => {
        if (!selectedBook.length) {
            setRedirect("/home")
            return
        }

        setBookData({
            author: selectedBook[0].author,
            id: selectedBook[0].id,
            src: selectedBook[0].src,
            title: selectedBook[0].title,
        })
    }

    const handleUserInput = (e) => {
        const name = e.target.id
        const value = e.target.value
        setBookData(prevData => ({...prevData, [name]: value }))
    }

    const handleClick = ({ fn }) => {        
        dispatch(fn(bookData))
        setRedirect("/livros")
    }

    const handleAddClick = () => handleClick({ fn: addBook })
    const handleUpdateClick = () => handleClick({ fn: updateBook })
    const handleRemoveClick = () => handleClick({ fn: removeBook })

    if (redirect) {
        return <Redirect push to={redirect} />
    }

    return ( 
        <section className={styles["livro"]}>
            <img src={bookData?.src || NotFound} className={styles["livro-image"]} />

            <div className={styles["livro-form"]}>
                <div className={styles["livro-form-info"]}>
                    <div className={styles["livro-form-info-title"]}>
                        <label>Título: </label>
                        <input
                            type="text"  
                            className={styles["livro-form-info-input"]} 
                            id="title" 
                            value={bookData?.title} 
                            onChange={handleUserInput}
                        />
                    </div>

                    <div className={styles["livro-form-info-author"]}>
                        <label>Autor: </label>
                        <input
                            type="text" 
                            className={styles["livro-form-info-input"]} 
                            id="author"
                            value={bookData?.author} 
                            onChange={handleUserInput}
                        />
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
                        onClick={creationMode ? handleAddClick : handleUpdateClick}
                    >{`${creationMode ? 'Adicionar' : 'Atualizar'}`}</button>
                </span>
            </div>
        </section>
     );
}
 
export default Livro;