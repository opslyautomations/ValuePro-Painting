export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl bg-brand-green-light/50 border border-dashed border-brand-teal/30 flex items-center justify-center text-center p-6 ${className}`}
    >
      <span className="text-sm text-ink-muted">{label}</span>
    </div>
  );
}
