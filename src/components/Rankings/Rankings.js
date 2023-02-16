import DevsRanking from "../DevsRanking/DevsRanking";
import PunsRanking from "../PunsRanking/PunsRanking";
import "./Ranking.css";

const Rankings = ({ puns, devs }) => {
  const punsRanking = puns.sort((pun, anotherPun) => {
    return -pun.votes + anotherPun.votes;
  });
  const devsRanking = devs.sort((dev, anotherDev) => {
    return -dev.puns + anotherDev.puns;
  });
  return (
    <>
      <PunsRanking punsRanking={punsRanking} />
      <DevsRanking devsRanking={devsRanking} />
    </>
  );
};

export default Rankings;
