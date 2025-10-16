import React, { useState, useMemo } from "react";

const TOPICS = [
  { title: "JSX & Rendering", desc: "How JSX compiles to React.createElement and how the renderer updates the DOM." },
  { title: "Components & Composition", desc: "Functional components, props, children, and composition patterns." },
  { title: "State & Props", desc: "Local component state, prop drilling, and state co-location best practices." },
  { title: "Hooks (useState/useEffect)", desc: "Stateful logic with hooks, effects lifecycle, and dependency arrays." },
  { title: "Context API", desc: "Provide/consume global-ish data without prop drilling." },
  { title: "Routing (React Router)", desc: "Client-side routing, nested routes, loaders/actions." },
  { title: "Performance", desc: "Memoization (useMemo/useCallback), lazy, Suspense, and avoiding re-renders." },
  { title: "Testing", desc: "React Testing Library, Jest/Vitest, and testing hooks & components." },
  { title: "TypeScript + React", desc: "Typing props, hooks, generics, and discriminated unions." },
  { title: "SSR & Server Components", desc: "Next.js, SSR/SSG, streaming, and the Server/Client Components model." }
];

export default function App() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return TOPICS.filter(t => t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
  }, [query]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px', color: '#61dafb' }}>React</h1>
        <p style={{ fontSize: '20px', color: '#a0a0a0' }}>Top 10 Topics</p>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics..."
          style={{ width: '300px', padding: '10px', borderRadius: '8px', border: '1px solid #30363d', backgroundColor: '#161b22', color: '#fff' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
        {filtered.map((t, i) => (
          <div key={i} style={{ backgroundColor: '#161b22', padding: '20px', borderRadius: '10px', border: '1px solid #30363d' }}>
            <h3 style={{ color: '#58a6ff', marginBottom: '10px' }}>{i + 1}. {t.title}</h3>
            <p style={{ fontSize: '14px', color: '#c9d1d9' }}>{t.desc}</p>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: '#8b949e' }}>
        <p>Type in the search box to filter topics dynamically.</p>
      </footer>
    </div>
  );
}