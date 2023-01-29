import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import SavedPage from './pages/SavedPage/SavedPage';
import BagPage from './pages/BagPage/BagPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Information from './components/Information/Information';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import DeliveryPage from './pages/Delivery/DeliveryPage';
import ShopsPage from './pages/ShopsPage/ShopsPage';

function App() {
    return (
        <>
            <header className={styles.header}>
                <Navigation />
            </header>
            <main className={styles.main}>
                <Routes>
                    <Route path={'/react-store'} element={<HomePage />} />
                    <Route path={'/bag'} element={<BagPage />} />
                    <Route path={'/saved'} element={<SavedPage />} />
                    <Route path={'/login'} element={<LoginPage />} />
                    <Route path={'/profile'} element={<ProfilePage />} />
                    <Route path={'/contacts'} element={<ContactsPage />} />
                    <Route path={'/payment'} element={<PaymentPage />} />
                    <Route path={'/delivery'} element={<DeliveryPage />} />
                    <Route path={'/shops'} element={<ShopsPage />} />
                </Routes>
            </main>
            <footer className={styles.footer}>
                <Information />
            </footer>
        </>
    );
}

export default App;
