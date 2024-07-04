import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Tech Stack</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Redux</span>
            <span className="chip">Tailwind</span>
            <span className="chip">shadcn/ui</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express</span>
            <span className="chip">MongoDB</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Firebase</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Vercel</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>More</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Git</span>
            <span className="chip">GitHub</span>
            <span className="chip">Copywriting</span>
            <span className="chip">SEO</span>
            <span className="chip">Figma</span>
            <span className="chip">Photoshop</span>
            <span className="chip">ChatGPT</span>
            <span className="chip">Dall-E</span>
            <span className="chip">Midjourney</span>
            <span className="chip">Git Copilot</span>
            <span className="chip">React Native</span>
            <span className="chip">Expo</span>
            <span className="chip">Cloudinary</span>
            <span className="chip">Appwrite</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
