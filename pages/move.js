import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function SingleMon({move}) {
  console.log(move)
  const router = useRouter()

  const styles = {
    tableRows: "bg-blue-100",
    tableCols: "p-4 first:border-r-1",
    flavorText: "p-4 mt-5"
  };
  function TableCol(props){
    return <td className={styles.tableCols}>{props.children}</td>
  }
  function TableRow(props){
    return <tr className={styles.tableRows}>{props.children}</tr>
  }
  return (
    <Layout title={move.name}>
        <h3>(Server Side) </h3>
        <div className={'mx-auto max-w-lg rounded overflow-hidden shadow-lg bg-white p-10 mt-4'}>
          <h1 className="text-4xl mb-2 text-center capitalize">
              {move.name}
          </h1>
          <table className="table-auto w-full">
            <tbody>
              <TableRow>
                <TableCol>Accuracy:</TableCol>
                <TableCol>{move.accuracy}</TableCol>
              </TableRow>
              <TableRow>
                <TableCol>Power:</TableCol>
                <TableCol>{move.power}</TableCol>
              </TableRow>
            </tbody>
          </table>
          <p className={styles.flavorText}>
          {move.flavor_text_entries[0].flavor_text}
          </p>
          <div className={'flex flex-auto'}>
            <p className="w-1/2 mt-10 text-center hover:cursor-pointer">
              <span className="text-2xl underline" onClick={() => router.back()}>Back</span>
            </p>
            <p className="w-1/2 mt-10 text-center">
                <Link href="/">
                    <a className="text-2xl underline">Home</a>
                </Link>
            </p>
          </div>
        </div>

    </Layout>
  );
}
;
export async function getServerSideProps({query}){
  const id = query.id;
  try {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${id}/`);
  const move = await res.json();
  return {
    props : {move},
  }
  } catch (error) {

  }
}