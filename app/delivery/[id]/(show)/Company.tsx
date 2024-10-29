import CompanyType from "@/types/company";

export default function Company({ company }: { company: CompanyType }) {
  return (
    <div className="w-full flex flex-row p-5 gap-3 bg-background rounded-lg items-center">
      {/* Image */}
      <div className="w-24 h-24 bg-slate-100 rounded-lg"></div>

      {/* Company detail */}
      <div className="flex flex-col flex-1 gap-7">
        <span className="w-full text-foreground-2">Société</span>
        <div className="flex flex-col flex-1 gap-2">
          <span className="w-full font-bold text-base">{company.name}</span>
          <span className="w-full text-foreground-2 text-sm">
            {company.phone_number}
          </span>
        </div>
      </div>
    </div>
  );
}
