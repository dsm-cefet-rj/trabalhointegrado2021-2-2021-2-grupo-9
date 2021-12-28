import React from 'react'

import { Card, Icon } from 'components'

import Hp1 from "../../imglivros/hp1.jpg";
import Hp2 from "../../imglivros/hp2.jpg";
import Hp3 from "../../imglivros/hp3.jpg";
import Hp4 from "../../imglivros/hp4.jpg";
import Hp5 from "../../imglivros/hp5.jpg";
import Hp6 from "../../imglivros/hp6.jpg";

import styles from './Livro.module.scss'

const initialBooks = [
    { 
        id: 101,
        title: "Harry Porter e a Pedra Filosofal",
        src: Hp1,
        author: "J.K. Rowling",
        genrer: ["fantasia", "ficção"],
    },
    { 
        id: 102,
        title: "Harry Porter e a Câmara Secreta",
        src: Hp2,
        author: "J.K. Rowling",
        genrer: ["fantasia", "ficção"],
    },
    { 
        id: 103,
        title: "Harry Porter e o Prisioneiro de Azkaban",
        src: Hp3,
        author: "J.K. Rowling",
        genrer: ["fantasia", "ficção"],
    },
    { 
        id: 104,
        title: "Harry Porter e o Cálice de Fogo",
        src: Hp4,
        author: "J.K. Rowling",
        genrer: ["fantasia", "ficção"],
    },
    { 
        id: 105,
        title: "Harry Porter e a Ordem da Fénix",
        src: Hp5,
        author: "J.K. Rowling",
        genrer: ["fantasia", "ficção"],
    },
    { 
        id: 106,
        title: "Harry Porter e as Relíquias da Morte",
        src: Hp6,
        author: "J.K. Rowling",
        genrer: ["fantasia", "ficção"],
    },
    { 
        id: 107,
        title: "Harry Porter e a Pedra Filosofal",
        src: Hp1,
        author: "J.K. Rowling",
        genrer: ["fantasia", "ficção"],
    },
    { 
        id: 108,
        title: "Harry Porter e a Câmara Secreta",
        src: Hp2,
        author: "J.K. Rowling",
        genrer: ["fantasia", "ficção"],
    },
    { 
        id: 109,
        title: "Harry Porter e o Prisioneiro de Azkaban",
        src: Hp3,
        author: "J.K. Rowling",
        genrer: ["fantasia", "ficção"],
    },
    { 
        id: 110,
        title: "Harry Porter e o Cálice de Fogo",
        src: Hp4,
        author: "J.K. Rowling",
        genrer: ["fantasia", "ficção"],
    },
]

const Livro = () => {
    const books = initialBooks

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
 
export default Livro;