import { Button } from '@mnsmarcelo/component-library';
export function Header() {
  return (
    <header
      style={{
        backgroundColor: "#090909",
        color: "white",
        height: "80px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Button label="ss" size="large" backgroundColor="#fff" />
      <ul>
        <li>Home</li>
      </ul>
    </header>
  );
}
