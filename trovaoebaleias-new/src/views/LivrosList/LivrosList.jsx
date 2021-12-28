import React from 'react'
import { Link } from 'react-router-dom'

import { BookCard } from './components'

import { INITIAL_BOOKS as books } from '../../constants'

import styles from './LivrosList.module.scss'

const LivrosList = () => {
    return (
        <div className={styles["livro"]}>
            <div className={styles["livro-title"]}>
                <h1>Livros</h1>
            </div>

            <section className={styles["livro-section"]}>
                { books.map(book =>
                    <BookCard book={book} />
                )}

                <span className={styles["livro-section-adicionar"]}>
                    <button className={styles["livro-section-adicionar-button"]}><Link to="/livro/new">Adicionar Livro</Link></button>
                </span>
            </section>
        </div>
    );
}
 
export default LivrosList;