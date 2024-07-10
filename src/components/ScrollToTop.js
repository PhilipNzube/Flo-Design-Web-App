import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, search } = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(search);
        const section = params.get('section');

        if (!section) {
            window.scrollTo(0, 0);
        }
    }, [pathname, search]);

    return null;
};

export default ScrollToTop;
