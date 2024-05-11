import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Features from "@site/src/components/HomepageFeatures";
import logo from "@site/static/img/logo.png";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12", styles.heroText)}>
            <Heading as="h1" className={clsx("hero__title", styles.title, styles.center)}>
              <img src={logo} className={styles.logo} alt="Sejm Stats" />
              Sejm Stats{" "}
            </Heading>
            <p className="hero__subtitle">
              Dokumentacja projektu Sejm Stats - transparentność danych sejmowych
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--outline button--secondary  button--lg margin-right--md",
                  styles.getStarted
                )}
                to="/docs/intro"
              >
                O projekcie
              </Link>
              <Link
                className={clsx(
                  "button button--outline button--secondary  button--lg",
                  styles.getStarted
                )}
                to="https://patronite.pl/sejm-stats"
                target="_blank"
                rel="noopener noreferrer"
              >
                Patronite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function VideoContainer({ videoId, videoTitle, videoPoster, description }) {
  return (
    <div className="container text--center margin-top--xl">
      <div className="row">
        <div className="col col--6">
          <Heading as="h2">{videoTitle}</Heading>
          <p>{description}</p>
        </div>
        <div className="col col--6">
          <div className="video-container">
            <LiteYouTubeEmbed
              id={videoId}
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title={videoTitle}
              poster={videoPoster}
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ feature, className }) {
  return (
    <div className={clsx("col", className)}>
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
            className={clsx("col--4", idx === 0 && "col--offset-2")}
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
          <VideoContainer
            videoId="5PVSQD4JcNo"
            videoTitle="Tworzę aplikację dla każdego Obywatela! devlog2"
            videoPoster="hqdefault" // Use the appropriate thumbnail for the video
            description="
    Drugi devlog projektu Sejm Stats ukazuje intensywne dwa tygodnie pracy nad aplikacją. 
    Prezentuje udoskonalenia takie jak nowa grafika, funkcjonalność interpelacji oraz 
    obsługi komisji sejmowych. Twórca podkreśla przełom w zarządzaniu danymi, 
    umożliwiający ich asynchroniczną aktualizację i omawia wyzwania technologiczne napotkane 
    w trakcie integracji danych. Film kończy się zachętą do wsparcia przez Patronite 
    i planami rozwoju społeczności wokół aplikacji."
          />

          <VideoContainer
            videoId="rljMODq5Ess"
            videoTitle="Co może aplikacja którą buduję od pół roku?"
            videoPoster="hqdefault"
            description="
            W filmie zostały przedstawione główne funkcjonalności aplikacji,
             takie jak przeglądanie listy posłów, śledzenie ich aktywności,
              a także eksperymentalne elementy, takie jak sekcja dotycząca afer rządowych. 
              Dodatkowo omówione zostały plany rozwoju projektu, w tym możliwość hostowania
              na AWS-ie oraz zaproszenie do współtworzenia i dzielenia się pomysłami."
          />
          <VideoContainer
            videoId="YPKBta1VSA0"
            videoTitle="Naprawiłem stronę sejmu! devlog 1"
            videoPoster="maxresdefault"
            description="
            W filmie opowiadam o mojej motywacji do stworzenia strony internetowej, 
            która ma pomóc obywatelom lepiej zrozumieć pracę parlamentarzystów.
             Przedstawiam główne funkcje projektu, takie jak inteligentna wyszukiwarka 
             aktów prawnych i możliwość sprawdzenia aktywności posłów. Omawiam także 
             techniczne wyzwania związane z agregacją danych głosowań parlamentarnych oraz
              aktualny stan projektu, zachęcając do zaangażowania społeczności w jego rozwój."
          />
        </div>
      </main>
    </Layout>
  );
}
