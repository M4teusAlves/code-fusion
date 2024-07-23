
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css'
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luiz-felippelb.png',
      name: 'Luiz Felippe Brizola',
      role: 'Java Developer'
    },
    content: [
      { type: 'paragraph', content: 'Apresento a minha mais recente criação, a API "SpringToDo"! 🚀' },
      { type: 'paragraph', content: 'Estou animado em compartilhar esta API construída com Spring Boot, que simplifica o gerenciamento de tarefas em aplicativos e serviços. O "SpringToDo" oferece uma maneira eficaz de criar, atualizar, listar e concluir tarefas em suas aplicações.' },
      { type: 'paragraph', content: 'O código-fonte da API já está disponível no GitHub, e estou ansioso para receber feedback da comunidade de desenvolvedores. Sinta-se à vontade para explorar a API, experimentar suas funcionalidades e contribuir para aprimorá-la. Vamos trabalhar juntos para tornar o "SpringToDo" uma API de lista de tarefas poderosa e flexível para desenvolvedores de todo o mundo.' },
      { type: 'link', content: 'https://github.com/luiz-felippelb/springboot-todolist-rocket' },
    ],
    publishedAt: new Date('2023-10-20 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/NahNathan.png',
      name: 'Nathan Rodrigues',
      role: 'Flutter Developer'
    },
    content: [
      { type: 'paragraph', content: '📱💣 Meu novo aplicativo de Campo Minado em Flutter agora está no GitHub! 🚀' },
      { type: 'paragraph', content: 'Estou entusiasmado em compartilhar que você pode acessar o código-fonte do meu aplicativo de Campo Minado no GitHub. É um jogo clássico que desafia suas habilidades de lógica e estratégia.' },
      { type: 'paragraph', content: 'Confira o código e, se gostar, não esqueça de deixar uma estrela! ✨' },
      { type: 'link', content: 'https://github.com/NahNathan/Campo-Minado-Mobile' },
    ],
    publishedAt: new Date('2023-10-04 20:00:00'),
  },
];


function App() {
  return(
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
