import React, { createContext, useState, useEffect } from 'react';

// Création du contexte
export const LanguageContext = createContext();

// Fournisseur de contexte
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr'); // Langue par défaut

    useEffect(() => {
        const storedLanguage = localStorage.getItem('preferredLanguage');
        if (storedLanguage) {
            setLanguage(storedLanguage);
        } else {
            const userLang = navigator.language.split('-')[0];
            setLanguage(userLang === 'fr' ? 'fr' : 'en');
        }
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
