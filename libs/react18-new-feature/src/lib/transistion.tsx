import React, { Suspense, useState, useTransition } from 'react';
import { setTimeout } from 'timers/promises';

export default function Transistion() {
  const [tab, setTab] = useState('about');
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <TabB
        isActive={tab == 'contact'}
        onclick={() => setTab('contact')}
        title="contact"
      ></TabB>
      <TabB
        isActive={tab == 'about'}
        onclick={() => setTab('about')}
        title={'about'}
      ></TabB>
      <TabB
        isActive={tab == 'home'}
        onclick={() =>
          window.setTimeout(function () {
            setTab('home');
          }, 10000)
        }
        title={'home'}
      />
      {tab === 'about' && <div> aboud page</div>}
      {tab === 'contact' && <div> contact page</div>}{' '}
      {tab === 'home' && <div> home page</div>}
    </Suspense>
  );
}

const TabB = ({ isActive, title, onclick }) => {
  const [ispending, setTransistion] = useTransition();
  return (
    <button
      onClick={() => {
        setTransistion(() => {
          onclick();
        });
      }}
    >
      {title}
    </button>
  );
};
