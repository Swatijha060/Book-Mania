export default function Footer(){
    return(
        <>
        <footer className="border-gray-4 bg-paper dark:bg-dark-layer-bg mx-4 mt-[50px] border-t p-5 dark:mx-0 dark:border-none md:mt-24 text-label-2 dark:text-dark-label-2">
            <div className="w-full">
                <div className="m-auto max-w-6xl">
                    <div className="text-xs md:flex md:text-sm">
                        <div>
                            {/* Copyrights */}
                            Copyrights
                        </div>
                        <div>
                            {/* items in the footer to be flex-wrapped */}
                            Help | Books | Read | Download | Like | Bookmark
                        </div>
                        <div>
                            {/** region but not using right now */}
                            India
                        </div>
                    </div>

                </div>

            </div>
        </footer>
        </>
    )
}