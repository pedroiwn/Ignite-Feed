import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './style.module.css';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment( { content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);


  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handlelikeComment() {

    setLikeCount((state) => {
      return state + 1;
    });
    
  }

  return (
   <div className={styles.comment}>
    <Avatar 
    hasBorder={false} 
    src="https://github.com/pedroiwn.png" 
    alt=""
    />

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Pedro Cristóvão</strong>
            <time title="20 de janeiro ás 13:30" dateTime="2025-01-20 13:30:00">Cerca de 1h atrás</time>
          </div>

          <button onClick={handleDeleteComment} title="Deletar comentário">
            <Trash size={24}/>
          </button>
        </header>

          <p>{content}</p>
        </div>

          <footer>
            <button onClick={handlelikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
      </div>
   </div>
 );
}

