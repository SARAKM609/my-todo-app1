import { useState } from 'react'
import './App.css'
function App() {
  const [article, setArticle] = useState('')
  const [courses, setCourses] = useState([])

  function ajouterArticle() {
    const nouvelArticle = article.trim()

    if (nouvelArticle !== '') {
      setCourses([...courses, nouvelArticle])
      setArticle('')
    }
  }

  function supprimerArticle(index) {
    setCourses(courses.filter((item, i) => i !== index))
  }

  function gererClavier(e) {
    if (e.key === 'Enter') {
      ajouterArticle()
    }
  }

  return (
    <main className="page">
      <div className="decoration decoration-one"></div>
      <div className="decoration decoration-two"></div>

      <section className="app-card">
        <header className="header">
          <div className="logo">🛒</div>
          <span className="subtitle">MON PETIT ORGANISATEUR</span>
          <h1>Ma liste de <span>courses.</span></h1>
          <p>Tout ce qu'il te faut, au même endroit.</p>
        </header>

        <div className="input-section">
          <label htmlFor="article">Ajouter un article</label>

          <div className="input-group">
            <input
              id="article"
              type="text"
              placeholder="Ex. : Pommes, lait, pain..."
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              onKeyDown={gererClavier}
            />

            <button className="add-button" onClick={ajouterArticle}>
              <span>+</span> Ajouter
            </button>
          </div>
        </div>

        <div className="list-header">
          <div>
            <h2>Ma liste</h2>
            <p>Les indispensables du quotidien</p>
          </div>

          <div className="counter">
            {courses.length} {courses.length > 1 ? 'articles' : 'article'}
          </div>
        </div>

        {courses.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🥬</div>
            <h3>Ta liste est toute vide !</h3>
            <p>Ajoute ton premier article pour commencer.</p>
          </div>
        ) : (
          <ul className="courses-list">
            {courses.map((item, index) => (
              <li className="course-item" key={index}>
                <div className="item-left">
                  <span className="item-icon">✓</span>
                  <span className="item-name">{item}</span>
                </div>

                <button
                  className="delete-button"
                  onClick={() => supprimerArticle(index)}
                  aria-label={`Supprimer ${item}`}
                  title="Supprimer cet article"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}

        <footer className="footer">
          <span>🌿</span>
          <p>Une liste simple, des courses plus faciles.</p>
        </footer>
      </section>
    </main>
  )
}

export default App
