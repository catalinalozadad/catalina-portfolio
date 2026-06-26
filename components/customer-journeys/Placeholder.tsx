type PlaceholderProps = {
  label: string;
  ratio?: string;
};

export default function Placeholder({
  label,
  ratio = "aspect-[16/9]",
}: PlaceholderProps) {
  return (
    <div
      className={`w-full ${ratio} rounded-[32px] bg-neutral-100 border border-neutral-200 flex items-center justify-center`}
    >
      <span className="text-neutral-400 uppercase tracking-[0.2em] text-xs">
        {label}
      </span>
    </div>
  );
}