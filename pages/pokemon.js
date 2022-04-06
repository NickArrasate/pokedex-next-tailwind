import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export default function SingleMon({pokemon}) {
  console.log(pokemon)
  return (
    <Layout title={pokemon.name}>
        <h3>(Server Side) </h3>
        <h1 className="text-4xl mb-2 text-center capitalize">
            {pokemon.id}. {pokemon.name}
        </h1>
        <img className="mx-auto" src={pokemon.image} alt={pokemon.name} />
        <p>
            <span className="font-bold mr-2">Weight:</span> {pokemon.weight}
        </p>
        <p>
            <span className="font-bold mr-2">Height:</span>
            {pokemon.height}
        </p>
        <h2 className="text-2xl mt-6 mb-2">Types</h2>
        {pokemon.types.map((type, index) => (
            <p key={index} className="capitalize">{type.type.name}</p>
        ))}
        <p className="mt-10 text-center">
            <Link href="/">
                <a className="text-2xl underline">Home</a>
            </Link>
        </p>
    </Layout>
  );
}
;
export async function getServerSideProps({query}){
  const id = query.id;
  try {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  const paddedId = ('00' + (id)).slice(-3);
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
  pokemon.image = image;
  return {
    props : {pokemon},
  }
  } catch (error) {
    
  }
}