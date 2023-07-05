import { memo, useDeferredValue, useMemo, useState } from 'react';
import styles from './react18-new-feature.module.css';

/* eslint-disable-next-line */
export interface React18NewFeatureProps {}

export const DisplayList = memo(
  ({ searchParams }: { searchParams: string }) => {
    const datas = [
      { name: 'abcde' },
      { name: 'aa' },
      { name: 'sabin' },
      { name: 'sabina' },
    ];

    console.log('a');
    return (
      <ul>
        {datas
          .filter((a) => a.name.includes(searchParams))
          .map((a) => (
            <li>{a.name}</li>
          ))}
      </ul>
    );
  }
);

export function React18NewFeature(props: React18NewFeatureProps) {
  const [search, setSearch] = useState('');

  const deferedQuery = useDeferredValue(search);
  const isStale = search !== deferedQuery;

  return (
    <div className={styles['container']}>
      <h1>Welcome to React18NewFeature!</h1>
      <label> Search params</label>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <div
        className="bg-red-400"
        style={{
          opacity: isStale ? 0.5 : 1,
          transition: isStale
            ? 'opacity 0.2s 0.2s linear'
            : 'opacity 0s 0s linear',
        }}
      >
        <DisplayList searchParams={deferedQuery} />
      </div>
    </div>
  );
}

export default React18NewFeature;
