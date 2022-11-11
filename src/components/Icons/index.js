import "./icons.css";

export function Icon({ url, children }) {
  return (
    <a className="social" href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
