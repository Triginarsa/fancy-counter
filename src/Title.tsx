interface titleProps {
  locked: boolean;
}
export default function Title({ locked }: titleProps) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! Buy <b>PRO</b> FOR &gt; 5
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
