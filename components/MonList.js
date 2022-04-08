import Link from 'next/link'
import Image from 'next/image'

function MonList(props) {
  const pokemons = props.pokemons;
  const genOffset = props.genOffset + 1;
  console.log(genOffset);
  return (
    <ul className='mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 grid-flow-row p-5'>
      {pokemons.map((pokemon, index) => (
        <li key={index} className={' max-w-lg rounded overflow-hidden shadow-lg bg-white'}>
          <Link href={`/pokemon?id=${index + genOffset}`}>
          <a>
            <div className='flex flex-col items-center justify-around pb-4'>
              <div>
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                />
              </div>
              <h2 className='text-2xl sm:text-xl capitalize text-wrap'><span className='mr-2'>{index + genOffset}.</span>{pokemon.name}</h2>
            </div>
            </a>
          </Link>
        </li>
        )
      )}
    </ul>
  );
}

export default MonList;