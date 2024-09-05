// Empty Squares for Board
export default function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
        {props.value && <img src={props.value} alt="lumi-mascot" />}
    </button>
  );
}
