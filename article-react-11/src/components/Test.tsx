import { useEffect } from 'react';
import { getGlobalState, setGlobalState } from '../redux/hooks/reduxHooks';
import { languageActions } from '../redux/slices/language';

const Test = () => {
  const dispatch = setGlobalState();
  const currentLanguage = getGlobalState((state) => state.language.currentLanguage);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    dispatch(languageActions.changeLanguage(newLanguage));
  };

  useEffect(() => {
    console.log("Current application language:", currentLanguage);
  }, [currentLanguage]);

  return (
    <div>
      <p>Current language: {currentLanguage}</p>
      <button onClick={toggleLanguage}>Change language</button>
    </div>
  );
};

export default Test;
