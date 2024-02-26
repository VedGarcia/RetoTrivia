export default function Logo({ width, margin }) {
  return (
    <div className="w-screen flex justify-center">
      <img
        className={`${width} ${margin}`}
        src="/img/educate.png"
      />
    </div>
  );
}
