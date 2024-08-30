import styles from "@/styles/Home.module.css";
import ListSection from "@/components/ListSection";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <ListSection/>
      </main>
    </>
  );
}
