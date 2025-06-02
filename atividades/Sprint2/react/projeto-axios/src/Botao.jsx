export function Botao(props) {
  return (
    <button className="bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2">
      {props.children}
    </button>
  );
}