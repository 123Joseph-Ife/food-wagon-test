import Top from "./Top"

const Dashboard = ({ click, setClick }) => {
  return (
    <main>
      <Top click={click} setClick={setClick}  />
    </main>
  )
}

export default Dashboard