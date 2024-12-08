export default function Footer() {
  return (
    <>
      <footer className=" bg-[#7F642E] w-full ">
        {/* <div className="w-full"> */}
        <div className="m-auto max-w-6xl">
          <div className="text-xs flex justify-between md:flex md:text-sm">
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

        {/* </div> */}
      </footer>
    </>
  );
}
