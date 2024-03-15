import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import ReactPlayer from "react-player";

const FeatureList = [
  {
    title: "Łatwość Użytkowania",
    Svg: require("@site/static/img/user-group-solid.svg").default,
    description: (
      <>
        Nasza aplikacja została zaprojektowana tak, aby łatwo i szybko
        dostarczać informacje o działalności sejmowej.
      </>
    ),
  },
  {
    title: "Skupienie na Danych",
    Svg: require("@site/static/img/database-solid.svg").default,
    description: (
      <>
        Sejm Stats pozwala na skoncentrowanie się na najważniejszych danych,
        dzięki zaawansowanym filtrom i wyszukiwaniu.
      </>
    ),
  },
  {
    title: "Aktualizacje w Czasie Rzeczywistym",
    Svg: require("@site/static/img/rotate-solid.svg").default,
    description: (
      <>
        Oferujemy aktualizacje na żywo, abyś zawsze był na bieżąco z ostatnimi
        zmianami w sejmie.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
