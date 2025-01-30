import { Header } from "./components/Header/Header.tsx";
import { Post, PostType } from "./components/Post/Post.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";
import styles from './App.module.css';

import './global.css';


const posts: PostType[] = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/pedroiwn.png',
      name: 'Pedro Cristóvão',
      role: 'Web front end developer',
    },
    content: [
        { id: '1', type: 'paragraph', content: 'Ignite Feed', },
        { id: '2', type: 'paragraph', content: 'Acabei de terminar meu projeto de rede social Ignite Feed, curso interessante que aborda os principais fundamentos do Reactjs e typeScript.' },
        { id: '3', type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-01-22T16:30:00'),
  },
  {
    id: 2, 
    author: {
      avatarUrl: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Jane Doe',
      role: 'UI/UX Designer',
    },
    content: [
        { id: '4', type: 'paragraph', content: 'Fala galeraa 👋', },
        { id: '5', type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { id: '6', type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-02-21T16:30:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              post={post}
            />
          );
          })}
        </main>
      </div>
    </div>
  )
}

