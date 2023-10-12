"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "./common/Button";
import Modal from "./common/Modal";
import MultiStepForm from "./Forms/AddBeerForm/MultiStepForm";
import Link from "next/link";

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="bg-slate-600 text-white shadow-md  relative"
      ref={headerRef}
    >
      <div className="container mx-auto md:p-4  flex justify-between items-center">
        <h1 className="text-xl md:text-2xl flex items-center font-semibold">
          <Link href="/collection">Beer Collection</Link>
        </h1>
        <div>
          <button
            className="md:hidden p-6 flex items-center z-10"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div className="h-1 w-5 bg-white mb-1"></div>
            <div className="h-1 w-5 bg-white mb-1"></div>
            <div className="h-1 w-5 bg-white"></div>
          </button>

          <div
            className={`absolute top-full right-0 mt-2 w-64 p-4 bg-white rounded-lg shadow-md ${
              isMenuOpen ? "block" : "hidden"
            } md:relative md:p-0 md:bg-transparent md:shadow-none md:block md:w-full z-10`}
          >
            <Button
              ver="secondary"
              className="mb-2 mr-2 w-full md:w-auto md:mb-0"
              onClick={() => setModalOpen(true)}
            >
              Add Beer
            </Button>
            <Link href="/collection">
              <Button className="mb-2 mr-2 w-full md:w-auto md:mb-0">
                Online Beers
              </Button>
            </Link>
            <Link href="/custom-collection">
              <Button ver="primary" className="w-full md:w-auto">
                Custom Beers
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <MultiStepForm onClose={() => setModalOpen(false)} />
      </Modal>
    </header>
  );
}

export default Header;
