import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from 'next/image'

export default function SingleMon({pokemon}) {
  console.log(pokemon)

  return (
    <Layout title={pokemon.name}>
        <h3>(Server Side) </h3>
        <div className={'mx-auto max-w-lg rounded overflow-hidden shadow-lg bg-white p-10 mt-4'}>
          <h1 className="text-4xl mb-2 text-center capitalize">
              {pokemon.id}. {pokemon.name}
          </h1>
          <div className="mx-auto max-w-md text-center">
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={200}
              height={200}
            />
            <div className="flex justify-center ">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={120}
                height={120}
                className="first-sprite"
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={120}
                height={120}
              />
            </div>
          </div>
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
          <h2 className="text-2xl mt-6 mb-2">Moves</h2>
          <ul className="grid grid-cols-2 ">
          {pokemon.moves.map((move, index) => (
              <li key={index} className="capitalize">
                {/* <Link href={`/move?id=${index}`}> */}
                <Link href={`/move?id=${move.move.url.split('/move/')[1]}`}>
                  <a>
                    {move.move.name}
                  </a>
                </Link>
              </li>
          ))}
          </ul>
          <p className="mt-10 text-center">
              <Link href="/">
                  <a className="text-2xl underline">Home</a>
              </Link>
          </p>
        </div>
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