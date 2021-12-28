import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Card, Icon } from 'components'

import styles from './BookCard.module.scss'

const BookCard = ({ book }) => {
    const [showBookMenu, setShowBookMenu] = useState(false)

    const menuClick = () => setShowBookMenu(prevState => !prevState)

    return ( 
        <>
            <Card noBorder margin="xxSmall">
                <div className={styles["livro-section"]}>
                    <div className={styles["livro-section-content"]}>
                        <img src={book.src} className={styles["livro-section-content-image"]} />

                        <div className={styles["livro-section-content-bottom"]}>
                            <div className={styles["livro-section-content-bottom-text"]}>
                                <div className={styles["livro-section-content-bottom-text-title"]}>
                                    <span>{book.title}</span>
                                </div>

                                <div className={styles["livro-section-content-bottom-text-author"]}>
                                    <span>{book.author}</span>
                                </div>
                            </div>

                            <span className={styles["livro-section-content-bottom-options"]} onClick={menuClick}>
                                <Icon type="three-dots"></Icon>
                            </span>
                        </div>
                    </div>
                    
                    {  showBookMenu &&
                        <ul className={styles["livro-section-menu"]}>
                            <li className={styles["livro-section-menu-item"]}><Link to={`/livro/${book.id}`}>Ver</Link></li>
                            <li className={styles["livro-section-menu-item"]}><Link to={`/livro/${book.id}`}>Editar</Link></li>
                            <li className={styles["livro-section-menu-item"]}><Link to={`/livro/${book.id}`}>Excluir</Link></li>
                        </ul>
                    }
                </div>
            </Card>
        </>
     );
}
 
export default BookCard;