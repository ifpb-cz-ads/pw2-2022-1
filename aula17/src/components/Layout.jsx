import Nav from "./Nav";

export default function Layout(props) {
  return (
    <div>
      <div>
        <Nav message={"Um exemplo de props"} url={"/exemplo"} bgcolor={"red"} />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}