import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
          inputValue
        )}`
      );

      if (response.ok) {
        const data = await response.text();
        setShortenLink(data);
      } else {
        setError("Error shortening URL");
      }
    } catch (err) {
      console.error("Error fetching data: ", err);
      setError(err.message || "Error: Unable to shorten the URL");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }
  if (error) {
    return <p className="noData">{error}</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>
            Shortened URL:{" "}
            <a href={shortenLink} target="_blank" rel="noopener noreferrer">
              {shortenLink}
            </a>
          </p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/341/341077.png"
                alt="Copy"
              />
            </button>
          </CopyToClipboard>
          {copied && (
            <span style={{ color: "#fff", fontSize: "15px" }}>Copied!</span>
          )}
        </div>
      )}
    </>
  );
};

export default LinkResult;