import React from 'react';

import FeaturedMovies from '../../components/organisms/FeaturedMovies';

export default {
  component: FeaturedMovies,
  title: 'organisms/FeaturedMovies',
};

const data = [
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
]
const Template = (args) => <FeaturedMovies {...args} movies={data} />;

export const Default = Template.bind({});
Default.args = FeaturedMovies.defaultProps;
