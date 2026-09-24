export default function ResourcesPage() {
  return (
    <main className="text-xl">
      <h1 className="h1">Resources</h1>
      <section className="flex flex-col gap-6 items-center justify-center max-w-3xl mx-auto text-center">
        <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
          If you have questions about our company or software and can’t find answers here, ask!
        </p>
        <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
          Please email{" "}
          <a href="mailto:inquiry@conatix.com" className="text-electric-blue hover-effect hover:underline">
            inquiry@conatix.com
          </a>{" "}
          and we would be happy to write or talk with you.
        </p>
      </section>
    </main>
  );
}
