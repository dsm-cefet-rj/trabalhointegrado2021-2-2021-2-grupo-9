import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';

import NotFound from "../../img/not_found.svg";

import styles from './Livro.module.scss'

const Livro = ({ books, setBooks, removeBook }) => {
    const [bookData, setBookData] = useState({})
    const [redirect, setRedirect] = useState(false)

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

    const getCurrentGreatestIndex = () => {
        const bookIds = books.map(book => +book.id)
        const sortedBookIdsDec = bookIds.sort((a, b) => b - a)
        const firstIndex = sortedBookIdsDec[0]
        return firstIndex
    }

    const handleUserInput = (e) => {
        const name = e.target.id
        const value = e.target.value
        setBookData(prevData => ({...prevData, [name]: value }))
    }

    const handleSubmit = (e) => {        
        e.preventDefault()
        e.stopPropagation()
        const actionType = e.target.id
        const removeBook = actionType === "excluir"

        if (removeBook) {
            removeBook(bookData.id)
            setRedirect("/livros")
            return
        }

        creationMode ? addBook() : updateBook()
        setRedirect("/livros")
    }

    const addBook = () => {
        const newBook = { id: getCurrentGreatestIndex() + 1, src: NotFound, ...bookData}
        const newBookList = [...books, newBook ]
        setBooks(newBookList)
    }

    const updateBook = () => {
        const updatedBook = { id: livroId, ...bookData}
        const remaingBooks = books.filter(book => book.id !== +livroId)
        const updatedBooks = [...remaingBooks, updatedBook ]
        setBooks(updatedBooks)
    }

    if (redirect) {
        return <Redirect push to={redirect} />
    }

    return ( 
        <section className={styles["livro"]}>
            <img src={bookData?.src ? bookData?.src : NotFound} className={styles["livro-image"]} />

            <form onSubmit={handleSubmit} className={styles["livro-form"]}>
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
                    <input 
                        type="submit"
                        id="excluir" 
                        className={styles["livro-form-submit-secondary"]} 
                        value='Excluir'
                    />
                    <input 
                        type="submit"
                        id="adicionar"  
                        className={styles["livro-form-submit-primary"]} 
                        value={`${creationMode ? 'Adicionar' : 'Atualizar'}`}
                    />
                </span>
            </form>
        </section>
     );
}
 
export default Livro;