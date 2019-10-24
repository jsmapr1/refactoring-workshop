export function generateDisplayName(selected) {
  const modified = [...selected.reduce((all, topping) => {
      if (!all.get(topping)) {
        all.set(topping, 1);
        return all;
      }
      all.set(topping, all.get(topping) + 1);
      return all;
    }, new Map()),
  ].map(([nameUpdate, count]) => `${nameUpdate} ${count === 1 ? '' : `(${count})`}`);
  return modified;
}

export function generateModalConfig({
  image,
  text,
  top = 50,
  left = 50,
  ...css
}) {
  return({
    getModalStyle: () => {
      return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        width: 400,
        backgroundColor: '#fff',
        boxShadow: '1px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
        padding: 32,
        outline: 'none',
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        ...css,
      };
    },
    ...(image && { image }),
    text
  })
}
