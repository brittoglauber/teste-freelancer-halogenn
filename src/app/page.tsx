'use client'

import Card from "./components/Card";
import { Header } from "./components/Header";
import Loading from "./components/Loading";
import Panel from "./components/Panel";
import { useAllProducts } from "./hooks/fetchData";

export default function Home() {
  const { data, isLoading, isError } = useAllProducts();

  return (
    <>
      <Header />
      <Panel />
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p>Ocorreu um erro ao buscar os dados.</p>
      ) : (
        <Card produtos={data} />
      )}

      
    </>
  )
}
