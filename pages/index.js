import Layout from '../components/Layout'
import MonList from '../components/MonList';
import { useState } from 'react';

export default function Home({pokemons}) {
  console.log('mons',pokemons[2].name)
  const [offset, setOffset] = useState(386);

  return (
    <div className={``}>
      <Layout>
      <h3>(Static) </h3>
        <h1 className={`text-4xl mb-4 text-center`}>Pokedex</h1>
        <MonList pokemons={pokemons} genOffset={offset}/>
      </Layout>
    </div>
  )
}

export async function getStaticProps(context) {
  const offset = 386;
  try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=${offset}`);
      const { results } = await res.json();
      const pokemons = results.map((pokemon, index) => {
      const paddedId = ('00' + (index + 1 + offset)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...pokemon, image };
      });
      return {
          props: { pokemons },
      };
  } catch (err) {
      console.error(err);
  }
}