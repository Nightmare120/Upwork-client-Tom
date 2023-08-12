export default function StatsBox({ title, detail }) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-bold text-4xl">{title}</h3>
            <p className="text-slate-700">{detail}</p>
        </div>
    );
}
