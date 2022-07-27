import CharCard from "../CharCard/CharCard";

export default function Characters({ characterList }) {
  return (
    <>
      {characterList.results
        ? characterList.results.map((characterList) => {
            return (
              <CharCard key={characterList.id} characterList={characterList} />
            );
          })
        : "Loading..."}
    </>
  );
}
