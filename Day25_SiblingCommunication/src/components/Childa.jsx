export default function ChildA({ setMessage }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-80 mb-4">
      <h2 className="text-xl font-semibold mb-2">Child A</h2>
      <input
        type="text"
        placeholder="Xabar yozing..."
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
