import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Nie wierz na słowo - weryfikuj!',
    Image: require('@site/static/img/p1.png').default,
    description: (
      <>
            Łatwy dostęp do głosów wszystkich posłów.
            Dzięki inteligentnemu filtrowaniu przeglądaj tylko istotne głosowania.
      </>
    ),
  },
  {
    title: 'Sprawdź co robią posłowie',
    Image: require('@site/static/img/p2.webp').default,
    description: (
      <>
        Sprawdź pod jakimi projektami się podpisali, jakie składali interpelacje, 
        Co robią w komisjach i jak głosują.
      </>
    ),
  },
  {
    title: 'Analizuj',
    Image: require('@site/static/img/p3.png').default,
    description: (
      <>
        Sejm-stats został zaprojektowany z myślą o analizie danych.
       Wykryj anomalie w zachowaniu posłów i wiele więcej. 
      </>
    ),
  },
];

function Feature({Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} className={styles.featureImage} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
