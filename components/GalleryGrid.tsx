export default function GalleryGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-lg bg-brand-green-light/50 border border-dashed border-brand-teal/30 flex items-center justify-center text-center p-4"
        >
          <span className="text-xs text-ink-muted">
            Project photo coming soon
          </span>
        </div>
      ))}
    </div>
  );
}
