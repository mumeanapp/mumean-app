import { useParams } from "react-router"

export default function Level() {
  const params = useParams();
  return <h1 className="text-8xl">Level! { params.levelId }</h1>
}