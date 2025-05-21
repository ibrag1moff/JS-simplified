export default function ProTip({ title }: { title: string }) {
  return (
    <div className="my-8 border border-primary shadow-custom shadow-primary text-sm text-white p-5 text-center rounded-full">
      {title}
    </div>
  );
}
