import { createContext, useCallback, useContext, useMemo, useState } from "react";

const BagContext = createContext(null);

export function BagProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((entries) => {
    const list = Array.isArray(entries) ? entries : [entries];
    setItems((prev) => {
      const next = [...prev];
      list.forEach((entry) => {
        const key = `${entry.id}-${entry.size ?? ""}-${entry.colour ?? ""}`;
        const existing = next.find((i) => i.key === key);
        if (existing) existing.qty += 1;
        else next.push({ ...entry, key, qty: 1 });
      });
      return next.map((i) => ({ ...i }));
    });
    setOpen(true);
  }, []);

  const remove = useCallback(
    (key) => setItems((prev) => prev.filter((i) => i.key !== key)),
    []
  );

  const value = useMemo(
    () => ({
      items,
      open,
      setOpen,
      add,
      remove,
      count: items.reduce((n, i) => n + i.qty, 0),
      total: items.reduce((n, i) => n + i.price * i.qty, 0),
    }),
    [items, open, add, remove]
  );

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export const useBag = () => useContext(BagContext);
