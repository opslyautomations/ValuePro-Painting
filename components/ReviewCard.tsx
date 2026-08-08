export default function ReviewCard({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-brand-teal/40 bg-white p-6 shadow-sm">
      <div className="flex gap-1 text-brand-green mb-3" aria-hidden>
        {"★★★★★"}
      </div>
      <p className="text-sm text-ink-muted italic">{text}</p>
    </div>
  );
}
