import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo size={24} />
        <p className="text-[#A0A0A0] text-sm">
          © {year} webuilder.gm — todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
