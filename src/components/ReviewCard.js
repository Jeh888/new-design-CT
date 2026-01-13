export default function ReviewCard({ review }) {
  return (
    <div className="card p-8 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="text-[11px] tracking-[0.18em] uppercase text-ink-500">Patient note</div>
        <div className="text-champagne-500 text-2xl font-display leading-none">“</div>
      </div>

      <p className="mt-5 text-ink-700 leading-relaxed flex-grow">
        {review.text}
      </p>

      <div className="mt-8 pt-6 border-t border-ink-100">
        <p className="font-medium text-ink-950">{review.name}</p>
        <p className="text-sm text-ink-600 mt-1">
          {review.treatment} • {review.location}
        </p>
      </div>
    </div>
  );
}
