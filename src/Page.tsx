import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { Link } from "react-router-dom";

export function PageOne() {
  const { ref } = useFocusable();

  return (
    <div style={{ marginBottom: "2rem" }}>
      <button
        ref={ref}
        type="button"
        onClick={() => console.log("from onClick handler")}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            console.log("from onKeyup handler");
          }
        }}
      >
        With Keyup
      </button>
    </div>
  );
}

export function PageTwo() {
  const { ref } = useFocusable();
  return (
    <div style={{ marginBottom: '2rem' }}>
      <button ref={ref} type='button' onClick={() => console.log('form onClick handler')}>
        Without Keyup
      </button>
    </div>
  );
}

export function PageThree() {
  const { ref } = useFocusable();
  return (
    <div>
      <Link ref={ref} to="/new">
        Link to "New" Page
      </Link>
    </div>
  );
}
