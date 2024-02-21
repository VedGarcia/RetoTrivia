export default function Logo({ width }) {
  return (
    <div className="w-screen flex justify-center">
      <img
        className={`w-${width} m-8`}
        src="/img/educate.png"
      />
    </div>
  );
}
