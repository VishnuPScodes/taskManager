import { Div } from "../../components/StylesComponents/Div";
import styles from "./tasklist.module.css";

export const TasksList = () => {
  const data = [
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
  ];
  return (
    <div>
      <div className={styles.card_container}>
        {data.map((e) => {
          return (
            <>
              <Div className={styles.card}>{e.name}</Div>
            </>
          );
        })}
      </div>
    </div>
  );
};
