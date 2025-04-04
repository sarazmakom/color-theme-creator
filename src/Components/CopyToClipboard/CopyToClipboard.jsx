import { useState, useEffect } from "react";

export default function CopyToClipboard({ clipText }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  async function handleCopyText() {
    try {
      await navigator.clipboard.writeText(clipText);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy", error);
    }
  }

  return (
    <div>
      <button onClick={handleCopyText}>{isCopied ? "COPIED!" : "COPY HEX"}</button>
    </div>
  );
}
