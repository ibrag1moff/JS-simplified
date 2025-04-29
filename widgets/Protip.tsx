export default function ProTip({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1 bg-primary text-sm text-white p-4 rounded-full">
      <h1 className="text-md font-bold">Pro tip:</h1> {title}
    </div>
  );
}
