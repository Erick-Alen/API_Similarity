import '../../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // offset navbar height
  return <section className='py-20'>{children}</section>
}
