import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Features from "@site/src/components/HomepageFeatures";
import logo from "@site/static/img/logo.png";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12", styles.heroText)}>
            <Heading as="h1" className={clsx("hero__title", styles.center)}>
              <img src={logo} className={styles.logo} alt="Sejm Stats" />
              Sejm Stats{" "}
            </Heading>
            <p className="hero__subtitle">
              Dane, statystyki i analizy sejmowe w zasięgu ręki
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--secondary button--lg",
                  styles.heroButton
                )}
                to="/docs/intro"
              >
                O projekcie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function VideoContainer() {
  return (
    <div className="container text--center margin-top--xl">
      <div className="row">
        <div className="col">
          <Heading as="h2">
            Obejrzyj wprowadzenie do aplikacji
          </Heading>
          <div className="video-container" style={{ maxWidth: '50%', margin: '0 auto' }}>
            <LiteYouTubeEmbed
              id="YPKBta1VSA0"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Naprawiłem stronę sejmu! devlog 1"
              poster="maxresdefault"
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({
  feature,
  className,
}) {
  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={useBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <Heading as="h3" className={clsx(styles.featureHeading)}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}


function FeaturesContainer() {
  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);

  return (
    <div className="container text--center">
      <div className="row margin-top--lg margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Witaj w ${siteConfig.title}`}
      description="Sejm Stats - transparentność danych sejmowych w zasięgu ręki"
    >
      <HomepageHeader />
      <main>
        <div className={styles.section}>
          <FeaturesContainer />
          <VideoContainer />
        </div>
      </main>
    </Layout>
  );
}
