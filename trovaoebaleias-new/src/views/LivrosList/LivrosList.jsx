import React from 'react'

import { Card, Icon } from 'components'

import { INITIAL_BOOKS } from '../../constants'

import styles from './LivrosList.module.scss'

const LivrosList = () => {
    const books = INITIAL_BOOKS

    return (
        <div className={styles["livro"]}>
            <div className={styles["livro-title"]}>
                <h1>Livros</h1>
            </div>

            <section className={styles["livro-section"]}>
                { books.map(book => 
                    <Card>
                        <div className={styles["livro-section-content"]}>
                            <img src={book.src} className={styles["livro-content-image"]} />

                            <div className={styles["livro-section-content-bottom"]}>
                                <div className={styles["livro-section-content-bottom-text"]}>
                                    <div className={styles["livro-section-content-bottom-text-title"]}>
                                        <span>{book.title}</span>
                                    </div>

                                    <div className={styles["livro-section-content-bottom-text-author"]}>
                                        <span>{book.author}</span>
                                    </div>
                                </div>

                                <span className={styles["livro-section-content-bottom-options"]}>
                                    <Icon type="three-dots"></Icon>
                                </span>
                            </div>
                            
                        </div>

                    </Card>
                )}

                <span className={styles["livro-section-adicionar"]}>
                    <button className={styles["livro-section-adicionar-button"]}>Adicionar Livro</button>
                </span>
            </section>
        </div>
    );
}
 
export default LivrosList;