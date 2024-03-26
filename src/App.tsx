import { Header } from './components/header';
import { Post, PostType } from './components/post';
import { Sidebar } from './components/sidebar';

import styles from './app.module.css';
import './global.css';

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/NickFFogaca.png',
            name: 'Nicolas Fogaça',
            role: 'Dev Fron-End',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2024-03-22 10:00:01'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/LeoTelless.png',
            name: 'Leo telles',
            role: 'Dev Fron-End',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2024-03-21 11:35:01'),
    },
];

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => {
                        return <Post key={post.id} post={post} />;
                    })}
                </main>
            </div>
        </div>
    );
}
