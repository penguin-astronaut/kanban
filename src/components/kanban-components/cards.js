import Card from "../card";
import withSelect from "../hoc-helpers/withSelect";

const ReadyCard = withSelect(Card, "Ready", "ready");
const InProgressCard = withSelect(Card, "In Progress", "in_progress");
const FinishedCard = withSelect(Card, "Finished", "finished");

export {
  ReadyCard,
  InProgressCard,
  FinishedCard
}