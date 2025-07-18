
export default function PageTitle({ title }: { title: string }) {
  return (
    <section className="w-full pt-3 flex justify-center items-center">
      <h1 className="text-[30px] font-semibold">{title}</h1>
    </section>
  );
}