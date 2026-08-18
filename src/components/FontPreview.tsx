/* this component is used to just preview the different Catamaran font weights and the text size. This is not used anywhere on the website. To preview, just render this component in any page.tsx */

export default function CatamaranFontPreview() {
  const weights = [
    { name: 'Thin', weightClass: 'font-thin', code: '100' },
    { name: 'Extra Light', weightClass: 'font-extralight', code: '200' },
    { name: 'Light', weightClass: 'font-light', code: '300' },
    { name: 'Regular', weightClass: 'font-normal', code: '400' },
    { name: 'Medium', weightClass: 'font-medium', code: '500' },
    { name: 'Semi Bold', weightClass: 'font-semibold', code: '600' },
    { name: 'Bold', weightClass: 'font-bold', code: '700' },
    { name: 'Extra Bold', weightClass: 'font-extrabold', code: '800' },
    { name: 'Black', weightClass: 'font-black', code: '900' },
  ];

  const sizes = [
    { name: 'Extra Small', sizeClass: 'text-xs', sizePx: '12px (0.75rem)' },
    { name: 'Small', sizeClass: 'text-sm', sizePx: '14px (0.875rem)' },
    { name: 'Base / Regular', sizeClass: 'text-base', sizePx: '16px (1rem)' },
    { name: 'Large', sizeClass: 'text-lg', sizePx: '18px (1.125rem)' },
    { name: 'Extra Large', sizeClass: 'text-xl', sizePx: '20px (1.25rem)' },
    { name: '2X Large', sizeClass: 'text-2xl', sizePx: '24px (1.5rem)' },
    { name: '3X Large', sizeClass: 'text-3xl', sizePx: '30px (1.875rem)' },
    { name: '4X Large', sizeClass: 'text-4xl', sizePx: '36px (2.25rem)' },
    { name: '5X Large', sizeClass: 'text-5xl', sizePx: '48px (3rem)' },
    { name: '6X Large', sizeClass: 'text-6xl', sizePx: '60px (3.75rem)' },
    { name: '7X Large', sizeClass: 'text-7xl', sizePx: '72px (4.5rem)' },
    { name: '8X Large', sizeClass: 'text-8xl', sizePx: '96px (6rem)' },
    { name: '9X Large', sizeClass: 'text-9xl', sizePx: '128px (8rem)' },
  ];

  const sampleText = "The quick brown fox jumps over the lazy dog";

  return (
    <div className="max-w-5xl mx-auto p-8 font-catamaran space-y-12 bg-white text-slate-900 rounded-xl shadow-md my-10">
      {/* Header */}
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold">Catamaran Font Preview</h1>
        <p className="text-slate-500 text-sm mt-1">Font Family: Catamaran (--font-catamaran)</p>
      </div>

      {/* SECTION 1: FONT WEIGHTS */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800 border-b pb-2">1. Font Weight Scale</h2>
        <div className="space-y-4">
          {weights.map((item) => (
            <div key={item.code} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
              <div className="flex-1 overflow-x-auto">
                <p className={`text-2xl whitespace-nowrap ${item.weightClass}`}>
                  {sampleText}
                </p>
              </div>
              
              <div className="sm:text-right shrink-0 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                <span className="block text-sm font-semibold text-slate-800">
                  {item.name}
                </span>
                <span className="block text-xs text-slate-500 font-mono">
                  {item.code} ({item.weightClass})
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: FONT SIZES */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800 border-b pb-2">2. Tailwind Font Size Scale</h2>
        <div className="space-y-4">
          {sizes.map((item) => (
            <div key={item.sizeClass} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
              <div className="flex-1 overflow-x-auto">
                <p className={`${item.sizeClass} font-normal truncate`}>
                  {sampleText}
                </p>
              </div>
              
              <div className="sm:text-right shrink-0 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                <span className="block text-sm font-semibold font-mono text-slate-800">
                  {item.sizeClass}
                </span>
                <span className="block text-xs text-slate-500 font-mono">
                  {item.sizePx}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}