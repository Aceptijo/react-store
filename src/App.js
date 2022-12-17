import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import SavedPage from './pages/SavedPage/SavedPage';
import BagPage from './pages/BagPage/BagPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Information from './components/Information/Information';

function App() {
    return (
        <>
            <header className={styles.header}>
                <Navigation />
            </header>
            <main className={styles.main}>
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/bag'} element={<BagPage />} />
                    <Route path={'/saved'} element={<SavedPage />} />
                    <Route path={'/login'} element={<LoginPage />} />
                    <Route path={'/registration'} element={<RegistrationPage />} />
                    <Route path={'/profile'} element={<ProfilePage />} />
                </Routes>
            </main>
            <footer className={styles.footer}>
                <Information />
            </footer>
        </>
    );
}

export default App;
