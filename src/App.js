import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'

import Home from './routes/Home/Home'
import Gallery from './routes/Gallery/Gallery'
import Video from './routes/Video/Video'
import Contact from './routes/Contact/Contact'
import Book from './routes/Book/Book'

import './App.css'

const App = () => {
    return(
        <div className='App'>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/book" element={<Book />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App