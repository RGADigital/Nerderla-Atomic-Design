import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { FeaturedMovies, MoviesGallery } from "../components/organisms";
import { SubTitle } from "../components/atoms";
import { Nav } from "../components/organisms";

export default function Home() {
  const movies = [
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 4,
      featured: true,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 2,
      featured: true,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
      featured: true,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
    },
    {
      title: "Godzilla vs. Kong",
      lead: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      tag: "Science Fiction",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/12/thumbs_b_c_622024c2110fd36134d3dfe8c3500a78.jpg?v=210432",
      rate: 1,
    },
  ];
  const navItems = [
    {
      icon: 'home',
      href: '/'
    },
    {
      icon: 'movie',
      href: '/'
    },
    {
      icon: 'tv',
      href: '/'
    },
    {
      icon: 'star-stroke',
      href: '/'
    }
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Example App</title>
        <meta name="description" content="Example App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav navItems={navItems} />
        <FeaturedMovies movies={movies.filter((movie) => movie.featured)} />
        <div className={styles["new-releases"]}>
          <SubTitle>{"New releases >"}</SubTitle>
        </div>
        <MoviesGallery movies={movies.filter((movie) => !movie.featured)} />
      </main>
    </div>
  );
}
