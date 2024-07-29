import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main} style={{ height: "500px" }}>
      <h1 ><p className="underline font-bold text-2xl bg-[#1da1f2] text-yellow-300">Hello</p>
        <p className="text-base/6 bg-purple text-green-200">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
      </h1>
      <Link href={{
        pathname: "/about",
        query: { name: "test" }
      }} scroll={false} className={styles.link}>About Page</Link>

      <table className="border border-yellow-400 bg-green-700  border-spacing-2 border-separate hover:border-collapse border-collapse">
        <thead>
          <tr>
            <th className="border border-yellow-400 hove:bg-yellow-200">State</th>
            <th className="border border-yellow-400">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-yellow-400">Indiana</td>
            <td className="border border-yellow-400">Indianapolis</td>
          </tr>
        </tbody>
      </table>
      <div className="divide-y divide-yellow-400 2xl:divide-y-reverse flex flex-col-reverse">
        <div className="w-10 h-10 my-2 rounded-[12px] bg-purple">1</div>
        <div className="w-10 h-10 my-2 rounded-[12px] bg-purple">2</div>
        <div className="w-10 h-10 my-2 rounded-[12px] bg-purple">3</div>
      </div>
    </main>
  );
}
