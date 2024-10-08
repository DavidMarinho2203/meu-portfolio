const errorPage = () => {
  return (
    <main className="flex flex-col h-screen gap-5 py-5 ">

            <section className="flex flex-col gap-4 py-5 text-center select-none">
                <h2 className="px-4 text-2xl font-bold sm:px-22 md:px-40 lg:px-60 ">URL failed</h2>
                <div className="w-[10vw] h-1 mx-auto rounded-3xl bg-roxo"></div>
                <p className="px-4 text-sm sm:px-22 md:px-40 lg:px-60">There was an error in the URL you tried to access.</p>
                <p className="px-4 text-sm sm:px-22 md:px-40 lg:px-60">Click one of the navigation links in the header.</p>
            </section>
        </main>
  )
}

export default errorPage
