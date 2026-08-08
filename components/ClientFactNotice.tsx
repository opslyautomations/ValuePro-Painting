export default function ClientFactNotice({ items }: { items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-dashed border-amber-500 bg-amber-50 p-4 space-y-1">
      {items.map((item) => (
        <p key={item} className="text-xs font-mono text-amber-800">
          {item}
        </p>
      ))}
    </div>
  );
}
