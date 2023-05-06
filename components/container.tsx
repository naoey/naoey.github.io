type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="container max-w-2xl m-auto px-4 md:m-0 md:px-12">{children}</div>
}
