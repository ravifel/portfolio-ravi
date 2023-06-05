import React from 'react'
import styles from './Post.module.css'

export default function PostCard({ post }) {
    return (
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt='Imagem de Capa do Post'
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button className={styles.botaoLer}>Ler</button>
        </div>
    )
}