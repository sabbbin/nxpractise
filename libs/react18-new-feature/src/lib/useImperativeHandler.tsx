import React, { forwardRef, useImperativeHandle, useRef } from 'react';

export default function ImperativeHandlerTest() {
  const commentRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (commentRef.current) {
      commentRef.current.focus();
    }
  };
  return (
    <div>
      <CommentRef ref={commentRef} />

      <button onClick={handleClick}>Focus btn</button>
    </div>
  );
}

export const CommentRef = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        scrollttoBoddom() {
          if (inputRef.current) {
            const node = inputRef.current;
            node.scrollTop = node.scrollHeight;
          }
        },
      };
    },
    []
  );
  return <input {...props} ref={inputRef} />;
});
