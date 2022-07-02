import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';


import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/brunosuza.png',
      name: 'Bruno Souza',
      role: 'CTO Master'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet.'  },
      { type: 'paragraph', content: 'Qui dolores sapiente quo veniam dolores est aperiam sint est accusantium fuga et deleniti blanditiis et consequatur obcaecati. Ut repellat ratione qui vitae saepe est repellat dicta!'  },
      { type: 'link', content: '@bruno.suza'},
    ],
    publishedAt: new Date('2022-05-03 21:17:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/brunosouza.png',
      name: 'Mario Henrique',
      role: 'CTO Junior'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet.'  },
      { type: 'paragraph', content: 'Qui dolores sapiente quo veniam dolores est aperiam sint est accusantium fuga et deleniti blanditiis et consequatur obcaecati. Ut repellat ratione qui vitae saepe est repellat dicta!'  },
      { type: 'link', content: '@bruno.suza'},
    ],
    publishedAt: new Date('2022-05-10 15:35:00')
  }
];

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
      <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
    
  )
}

export default App
