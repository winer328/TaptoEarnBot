export const limit = () => {
  const dd = new Date().getDay();
  const store = JSON.parse(localStorage.getItem("store")) || {
    count: 0,
    day: dd,
  };

  console.log({ store });
  if (dd === store.day && store.count >= 10) return true;
  if (dd === store.day && store.count < 10) {
    localStorage.setItem(
      "store",
      JSON.stringify({ count: store.count + 1, day: dd })
    );
    return false;
  } else if (dd !== store.day) {
    localStorage.setItem("store", JSON.stringify({ count: 0, day: dd }));
    return false;
  }
  return false;
};
