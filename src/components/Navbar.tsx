'use client';
import Image from "next/image";
import Link from "next/link";

import casadocantoLogo from "@/logo.svg";

const Navbar = () => {

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="mx-auto flex h-14 w-full items-center justify-center bg-white/75 backdrop-blur-lg">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between self-center px-4 md:px-8">
            <div className="flex items-center space-x-10">
              <Link
                aria-label="Return home"
                className="flex h-full flex-none items-center rounded-md text-black ring-0"
                href="/"
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src={casadocantoLogo}
                    width={119}
                    height={32}
                    alt="CasadoCanto Logo"
                  />
                </div>
              </Link>
              <div className="hidden items-center gap-2 md:flex">
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;