import Link from '../src/components/Link';

function Title({ children, as }) {
  const Tag = as;
  return(
    <>
      <Tag>
        {children}
      </Tag>
      <style global jsx>{`
          ${Tag} {
            color: red;
          }
      `}</style>
    </>
  )
}

export default function HomePage() {
  return (
    <div>
      <Title as="h1">Alura Cases - Home</Title>
      <Link href="/faq">
        Ir para o Faq
      </Link>
    </div>
  )
}