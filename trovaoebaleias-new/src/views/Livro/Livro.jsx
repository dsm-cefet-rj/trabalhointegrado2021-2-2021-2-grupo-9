import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { INITIAL_BOOKS } from '../../constants'

import styles from './Livro.module.scss'

const Livro = () => {
    const [books, setBooks] = useState(INITIAL_BOOKS)
    const [bookData, setBookData] = useState({title: '', author: ''})
    const { livroId } = useParams()

    useEffect(() => {
        if (livroId) {
            const selectedBook = books.filter(book => book.id === +livroId)

            setBookData({
                author: selectedBook[0].author,
                src: selectedBook[0].src,
                title: selectedBook[0].title,
            })
        }
    }, [livroId])

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
       
        const updateBook = { id: livroId, ...bookData}
        const remaingBooks = books.filter(book => book.id !== +livroId)
        const updateBooks = [...remaingBooks, updateBook ]
 
        setBooks(updateBooks)
    }

    const handleUserInput = (e) => {
        const name = e.target.id
        const value = e.target.value
        setBookData(prevData => ({...prevData, [name]: value }))
    }

    return ( 
        <section className={styles["livro"]}>
            <img src={bookData?.src} className={styles["livro-image"]} />

            <form onSubmit={handleSubmit} className={styles["livro-form"]}>
                <div className={styles["livro-form-info"]}>
                    <div className={styles["livro-form-info-title"]}>
                        <label>Título: </label>
                        <input 
                            className={styles["livro-form-info-input"]} 
                            id="title" 
                            value={bookData?.title} 
                            onChange={handleUserInput}
                        />
                    </div>

                    <div className={styles["livro-form-info-author"]}>
                        <label>Autor: </label>
                        <input 
                            className={styles["livro-form-info-input"]} 
                            id="author"
                            value={bookData?.author} 
                            onChange={handleUserInput}
                        />
                    </div>
                </div>
    
                <input 
                    type="submit" 
                    className={styles["livro-form-submit"]} 
                    value="Atualizar"
                />     
            </form>
        </section>
     );
}
 
export default Livro;