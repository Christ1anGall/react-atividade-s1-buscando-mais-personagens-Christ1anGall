import Container from "./styles";

export default function CharCard({ characterList }) {
  return (
    <>
      <Container characterList={characterList}>
        <h2>
          {characterList.name.length > 16
            ? characterList.name.substring(0, 16) + "..."
            : characterList.name}
        </h2>
        <img src={characterList.image} alt="" />
      </Container>
    </>
  );
}
