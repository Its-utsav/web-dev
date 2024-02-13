interface ButtonProps {
  text: string;
  // in click we do something
  click: () => void;
  //   color?: string; // now this is optional
  //   color?: `secondary`; // only secondary value is accepted but what if more  than one
  color?:
    | `primary`
    | `secondary`
    | `success`
    | `danger`
    | `warning `
    | `info`
    | `light`
    | `dark`
    | `link`;
    // from above ca be one of this value
}

// dark is default value of color
function Button({ text, click, color = "secondary" }: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={click}>
      {text}
    </button>
  );
}

export default Button;
