import { ResetIcon } from "@radix-ui/react-icons";

interface resetButtonProps {
  setCount: (count: number) => void;
}

export default function ResetButton({ setCount }: resetButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(0);
    event.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
