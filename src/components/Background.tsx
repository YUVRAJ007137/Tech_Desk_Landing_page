export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/30 blur-[128px] animate-pulse"></div>
      <div className="absolute -right-48 top-96 h-[500px] w-[500px] rounded-full bg-red-500/30 blur-[128px] animate-pulse delay-700"></div>
      <div className="absolute left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-[128px] animate-pulse delay-1000"></div>
    </div>
  );
}