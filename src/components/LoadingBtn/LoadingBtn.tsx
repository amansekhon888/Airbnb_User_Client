import React from "react";

interface LoadingBtnProps {
  isLoading: boolean;
  text: string;
}

const LoadingBtn: React.FC<LoadingBtnProps> = ({ isLoading, text }) => {
  return (
    <>
      {isLoading && (
        <span className="dot-loading">.</span>
      )}
      {text}
      <style>{`
        .dot-loading::after {
          content: ' .';
          animation: dots 1.5s steps(3, end) infinite;
        }
        @keyframes dots {
          0% { content: ' .'; }
          33% { content: ' ..'; }
          66% { content: ' ...'; }
        }
      `}</style>
    </>
  );
};

export default LoadingBtn;