import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handlerDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/brunosuza.png' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Souza</strong>

                            <time title='20-06-2022 18:59' dateTime='2000-06-20 18:59'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handlerDeleteComment} title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>    
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir<span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}