import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

interface countProps {
  type: "minus" | "plus";
  setCount: (count: number | ((prev: number) => number)) => void;
  locked: boolean;
}

export default function CountButton({ type, setCount, locked }: countProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prev: number) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
