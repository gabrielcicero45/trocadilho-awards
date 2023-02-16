import DevsRanking from "../DevsRanking/DevsRanking";
import PunsRanking from "../PunsRanking/PunsRanking";
import "./Ranking.css";

const Rankings = ({ puns, devs }) => {
  const punsRanking = puns.sort((pun, anotherPun) => {
    return anotherPun.votes-pun.votes;
  });
  const devsRanking = devs.sort((dev, anotherDev) => {
    return anotherDev.puns-dev.puns ;
  });
  return (
    <>
      <PunsRanking punsRanking={punsRanking} />
      <DevsRanking devsRanking={devsRanking} />
    </>
  );
};

export default Rankings;
