import { useTranslations } from "next-intl";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./certification.module.scss";
import Link from "next/link";

interface Props {
  title: string;
  school: string;
  date: string;
  link: string;
  description: string;
  tech: string[];
}

export const CertificationItem = ({
  title,
  school,
  date,
  link,
  description,
  tech,
}: Props) => {

  const t = useTranslations("Certification");

  return (
    <div className={styles.certification}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{date}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.school}>{school}</span>
        </Reveal>
        <Reveal>
          <Link
            href={link}
            className={styles.certificate}
            target="_blank"
            rel="nofollow"
            title="certificate">
            {t("certificate")}
          </Link>
        </Reveal>
      </div>
      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
