interface ProfileProps {
  urlImg: string
}

export function Profile({ urlImg }: ProfileProps) {
  return (
    <>
      <img src={urlImg} alt="img" />
    </>
  )
}
