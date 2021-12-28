import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { INITIAL_BOOKS } from '../../constants'

import styles from './Livro.module.scss'

const Livro = () => {
    const [books, setBooks] = useState(INITIAL_BOOKS)
    const { livroId } = useParams()
    
    const selectedBook = books.filter(book => book.id === +livroId)
    const book = selectedBook[0]

    const handleSubmit = () => {}

    return ( 
        <section className={styles["livro"]}>
            <img src={book?.src} className={styles["livro-image"]} />

            <form onSubmit={handleSubmit} className={styles["livro-form"]}>
                <div className={styles["livro-form-info"]}>
                    <div className={styles["livro-form-info-title"]}>
                        <label>Título: </label>
                        <input className={styles["livro-form-info-input"]} value={book?.title}></input>
                    </div>

                    <div className={styles["livro-form-info-author"]}>
                        <label>Autor: </label>
                        <input className={styles["livro-form-info-input"]} value={book?.author}></input>
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