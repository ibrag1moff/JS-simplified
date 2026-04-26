export default function SectionTitle({ title }: { title: string }) {
  return (
    <h1 className="font-bold text-3xl md:text-4xl uppercase font-sans tracking-wide text-slate-900 dark:text-slate-100">
      {title}
    </h1>
  );
}
