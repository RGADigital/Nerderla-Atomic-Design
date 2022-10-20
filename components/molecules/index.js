import dynamic from 'next/dynamic';

export const FeaturedMovie = dynamic(() => import('./FeaturedMovie'), {
    ssr: false,
});
export const MovieCard = dynamic(() => import('./MovieCard'), {
    ssr: false,
});
export const MovieCardBig = dynamic(() => import('./MovieCardBig'), {
    ssr: false,
});
export const NavItem = dynamic(() => import('./NavItem'), {
    ssr: false,
});
