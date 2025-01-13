import styles from "./hero.module.css";

export function Hero() {
    return (
        <div
            className={`w-full h-96 flex justify-center items-center ${styles.highlightersHero}`}
        ></div>
    );
}
