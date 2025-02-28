import Header from './components/Header';
import Article from './components/Article';
import img1 from './assets/sidewalk-img.jpg';
import img2 from './assets/dialogue-img.jpg';
import articlesData from './data/articles';
import Footer from './components/Footer';
import './App.css'

function App() {
    return (
        <div>
            <Header />
            <main>
                {articlesData.map((article, index) => (
                    <Article 
                    key={index}
                    title={article.name}
                    image={index === 0 ? img1 : img2}
                    content={article.text}
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default App;