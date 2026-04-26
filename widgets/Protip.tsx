export default function ProTip({ title }: { title: string }) {
  return (
    <div className="my-8 glass-card border-primary/45 dark:border-primary/35 font-medium text-sm text-primary dark:text-white p-5 text-center rounded-2xl">
      {title}
    </div>
  );
}
