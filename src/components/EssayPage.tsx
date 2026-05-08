import { ArrowLeft } from "lucide-react";
import { Essay } from "../data";

interface EssayPageProps {
  essay: Essay;
  onClose: () => void;
}

export function EssayPage({ essay, onClose }: EssayPageProps) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900 pb-24 pt-24">
      <div className="max-w-3xl mx-auto px-6">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </button>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{essay.title}</h1>
        <div className="text-slate-500 mb-12">{essay.date}</div>
        <div className="text-slate-800 leading-relaxed text-lg whitespace-pre-line prose max-w-none">
          {essay.content}
        </div>
      </div>
    </div>
  );
}
