import React from 'react'
import { useParams } from 'react-router-dom'

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
    const { livroId } = useParams()    
    const selectedBook = books.filter(book => book.id === +livroId)
    const book = selectedBook[0]

    return ( 
        <section className={styles["livro"]}>
            <img src={book?.src} className={styles["livro-image"]} />

            <div className={styles["livro-info"]}>
                <div className={styles["livro-info-title"]}>
                    <label>Título: </label>
                    <input className={styles["livro-info-input"]} value={book?.title}></input>
                </div>

                <div className={styles["livro-info-author"]}>
                    <label>Autor: </label>
                    <input className={styles["livro-info-input"]} value={book?.author}></input>
                </div>
            </div>     
        </section>
     );
}
 
export default Livro;