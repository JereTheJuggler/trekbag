import Button from "./Button";

const btns = [
  "Mark all complete",
  "Mark all incomplete",
  "Reset to initial",
  "Remove all items",
];

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {btns.map((btn, index) => (
        <Button key={index} type="secondary">
          {btn}
        </Button>
      ))}
    </section>
  );
}
