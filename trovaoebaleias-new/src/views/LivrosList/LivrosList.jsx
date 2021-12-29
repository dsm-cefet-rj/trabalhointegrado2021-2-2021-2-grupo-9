import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector} from 'react-redux'

import { BookCard } from './components'

import styles from './LivrosList.module.scss'

const LivrosList = () => {
    const books = useSelector(state => state.books)
    const sortedBooks = [...books].sort((itemA, itemB) => +itemA.id - itemB.id)

    return (
        <div className={styles["livro"]}>
            <div className={styles["livro-title"]}>
                <h1>Livros</h1>
            </div>

            <section className={styles["livro-section"]}>
                { sortedBooks.map(book =>
                    <BookCard key={book.id} book={book} />
                )}

                <span className={styles["livro-section-adicionar"]}>
                    <button className={styles["livro-section-adicionar-button"]}>
                        <Link to="/livro/new">Adicionar Livro</Link>
                    </button>
                </span>
            </section>
        </div>
    );
}
 
export default LivrosList;