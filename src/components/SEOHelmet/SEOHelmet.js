import React from 'react';
import { Helmet } from 'react-helmet';
import eoltLogoWhite from "../../assets/eolt_logo_white.png";

const SEOHelmet = ({
  title = 'Encylopedia of Ludic Terms',
  description = 'An open-access lexicon covering terms related to the study of games and play',
  type = 'website',
  noIndex = false
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="robots" content={noIndex ? 'noindex' : 'all'} />
    <meta name="description" content={description} />
    <meta itemProp="name" content={title} />
    <meta itemProp="description" content={description} />
    <meta
      itemProp="image"
      content={eoltLogoWhite}
    />
    <meta property="og:title" content={title} />
    <meta property="og:type" content={type} />
    <meta
      property="og:image"
      content={eoltLogoWhite}
    />
    <meta property="og:image:width" content={'2048'} />
    <meta property="og:image:height" content={'1200'} />

    <meta property="og:description" content={description} />
    <meta property="og:site_name" content="Encyclopedia of Ludic Terms" />
  </Helmet>
);

export default SEOHelmet;