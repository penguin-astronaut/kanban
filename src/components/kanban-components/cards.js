import Card from "../card";
import withSelect from "../hoc-helpers/withSelect";

const ReadyCard = withSelect(Card, "Ready");
const InProgressCard = withSelect(Card, "In Progress");
const FinishedCard = withSelect(Card, "Finished");

export {
  ReadyCard,
  InProgressCard,
  FinishedCard
}