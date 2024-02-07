
export const highlightMatchedText = (text, searchTerm) => {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);

  return (
    
        parts.map((part, i) =>
          regex.test(part) ? <b key={i} style={{ color: '#000' }} >{part}</b> : part

        )
     
    )
};
