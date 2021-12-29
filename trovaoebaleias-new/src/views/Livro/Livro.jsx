import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';

import styles from './Livro.module.scss'

const Livro = ({ books, dispatch }) => {
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

    const handleUserInput = (e) => {
        const name = e.target.id
        const value = e.target.value
        setBookData(prevData => ({...prevData, [name]: value }))
    }

    const handleSubmit = (e) => {        
        e.preventDefault()
        e.stopPropagation()

        const submitId = e.target.id
        const actionType = getActionType(submitId)

        executeAction(actionType)
    }

    const getActionType = (submitId) => {
        if (submitId === 'excluir') {
            return 'delete'
        }  
        if (creationMode) {
            return 'add'
        }
        return 'update'
    }

    const executeAction = (type) => {
        switch (type) {
            case 'add': 
                addBook()
                break
            case 'update': 
                updateBook()
                break
            case 'delete':     
                deleteBook()
                break
            default:
                throw new Error() 
        }
        setRedirect("/livros")
    }

    const addBook = () => dispatch({type: 'add', payload: bookData})
    const updateBook = () => dispatch({type: 'update', payload: bookData})
    const deleteBook = () => dispatch({type: 'delete', payload: bookData})

    if (redirect) {
        return <Redirect push to={redirect} />
    }

    return ( 
        <section className={styles["livro"]}>
            <img src={bookData?.src} className={styles["livro-image"]} />

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