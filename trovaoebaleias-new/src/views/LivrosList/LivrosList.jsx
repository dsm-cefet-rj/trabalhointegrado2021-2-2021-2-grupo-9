import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch} from 'react-redux'

import { BookCard } from './components'
import { LOADING_STATUS } from '../../constants'
import { fetchBooks, selectAllBooks } from 'redux/booksSlice'

import styles from './LivrosList.module.scss'

const LivrosList = () => {
    const [ loading, setLoading] = useState(false)
    const [ hasError, setHasError] = useState(false)
    const books = useSelector(selectAllBooks)
    const { status, error } = useSelector(state => state?.books)
    
    const dispatch = useDispatch()

    const sortedBooks = ([...books] || []).sort((itemA, itemB) => +itemA.id - itemB.id)

    useEffect(() => {
        const isLoading = status === LOADING_STATUS.LOADING
        const hasError = status === LOADING_STATUS.FAILED
        setLoading(isLoading)
        setHasError(hasError)

        if (status === LOADING_STATUS.NOT_LOADED || status === LOADING_STATUS.SAVED) {
            dispatch(fetchBooks())
        }
    }, [status])

    if (loading) {
        return <h1>Loading..</h1>
    }

    if (hasError) {
        return <h1>{error}</h1>
    }

    return (
        <>
            { !loading &&
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
            }
        </>
    );
}
 
export default LivrosList;