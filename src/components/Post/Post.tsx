import { format, formatDistanceToNow } from 'date-fns';
import   { ptBR }  from 'date-fns/locale';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './style.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  id: string;
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein!'
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(post.publishedAt, "dd 'de' MMM yyyy 'ás' HH:mm", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR, 
    addSuffix: true,  
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');

  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }
  
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo precisa ser preenchido');
  }
  
  function deleteComment(commentToDelete: string) {
    const commentsWhitoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWhitoutDeletedOne);
    
  }

  const isNewCommentInputEmpty = newCommentText.length === 0;



 return (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar  src={post.author.avatarUrl} />
        <div className={styles.authorInfo}>
          <strong>{post.author.name}</strong>
          <span>{post.author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
        </time>
    </header>

    <div className={styles.content}>
      {post.content.map(line => {
        if (line.type === 'paragraph') {
          return <p key={line.content}>{line.content}</p>;
        } else if (line.type === 'link') {
          return <p key={line.content}><a href="#">{line.content}</a></p>
        }
      })}
    </div>

    <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea 
        name='comment'
        placeholder="Escreva um comentário aqui..."
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
      />

      <footer>
        <button type="submit" disabled={isNewCommentInputEmpty}>
          Publicar
        </button> 
      </footer>
    </form>

    <div className={styles.commentList}>
      {comments.map((comment) => {
        return (
          <Comment 
          key={comment} 
          content={comment} 
          onDeleteComment={deleteComment}
          />
      )
  })}
</div>
  </article>
 );
}